/**
 * Copyright 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

export default (file, api, options) => {
  const j = api.jscodeshift;

  const ReactUtils = require('./utils/ReactUtils')(j);
  const {isReturnJSX} = ReactUtils;

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true
  };

  const root = j(file.source);

  let renames = {};

  function renameToRender(methodName) {
    const [firstLetter, ...letters] = methodName.split('');
    const firstLetterInUppercase = firstLetter.toUpperCase();

    const renamed = `render${firstLetterInUppercase}${letters.join('')}`;
    return renamed.replace('renderGet', 'render');
  }

  const renameMethods = path => {
    const name = path.node.key.name;
    if (!name) {
      return;
    }

    if (!name.startsWith('render') && isReturnJSX(path.node)) {
      const newName = renameToRender(name);
      path.value.key.name = newName;
      renames[name] = newName;
    }
  };

  const renameCallExpressions = path => {
    const name = path.node.property.name;
    if (!name) {
      return;
    }

    if (!name.startsWith('render') && isReturnJSX(path.node)) {
      let newName = renameToRender(name);
      path.value.property.name = newName;
      renames[name] = newName;
    }
  };

  // Class methods
  root.find(j.MethodDefinition).forEach(renameMethods);

  // Class methods - typescript
  root.find(j.ClassMethod).forEach(renameMethods);

  // Arrow functions
  root.find(j.ClassProperty).forEach(renameMethods);

  // createReactClass and mixins
  root.find(j.Property).forEach(renameMethods);

  // Function calls
  root.find(j.MemberExpression).forEach(renameCallExpressions);


  for (const [oldName, newName] of Object.entries(renames)) {
    root.find(j.CallExpression, {
      callee: {
        object: {
          type: 'ThisExpression',
        },
        property: {
          name: oldName
        }
      }
    })
      .forEach(path => j(path).replaceWith(
        j.callExpression(
          j.memberExpression(
            j.thisExpression(),
            j.identifier(newName),
            false,
          ),
          path.value.arguments
        )
      ));
  }

  const hasModifications = Object.keys(renames).length > 0;
  return hasModifications ? root.toSource(printOptions) : null;
};
