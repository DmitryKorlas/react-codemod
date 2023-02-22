/**
 * Copyright 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;
defineTest(__dirname, 'rename-to-render', null, 'rename-to-render/rename-to-render-basic');
defineTest(__dirname, 'rename-to-render', null, 'rename-to-render/rename-to-render-if-else');
defineTest(__dirname, 'rename-to-render', null, 'rename-to-render/rename-to-render-arrays');
