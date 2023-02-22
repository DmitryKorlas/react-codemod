var React = require('react/addons');

const propTypes = {};

// comment above class
class MyComponent extends React.PureComponent {
  static someStaticThing() {
    return 'Foo';
  }

  // comment on componentDidMount
  componentDidMount() {
  }

  formatFoo(id) {
    if (!id) {
      return null;
    }

    if (id === 42) {
      return 'not a JSX';
    }

    return 'formatted foo';
  }

  getProperty() {
    return 42;
  }

  getSections = () => {
    return ['foo', 'bar'];
  }

  getConditionalThing() {
    if (this.getProperty() === 42) {
      return [
        <div key="foo">it return JSX</div>,
        <Button key="bar">Btn</Button>,
      ];
    } else {
      return null;
    }
  }

  getFooter = () => {
    return <div>JSX content {this.getButton()}</div>;
  };

  getActions() {
    return [
      <Button key="foo">foo</Button>,
      <span key="bar">bar</span>
    ];
  }

  formatFooBar(id) {
    if (!id) {
      return null;
    }

    if (id === 42) {
      return <span>jsx content</span>;
    }

    return this.formatFoo(id);
  }

  getToolbar() {
    // comment within method
    if (this.getProperty() === 42) {
      return null;
    }

    return <Toolbar header={this.formatFooBar(this.getProperty(), this.getSections())} actions={this.getActions()} />;
  }

  render() {
    return (
      <div>
        {this.getToolbar()}
        {this.getConditionalThing()}
        {this.formatFoo()}
        {this.getButton()}
        {this.getFooter()}
      </div>
    );
  }

}

MyComponent.propTypes = propTypes;

/* comment at end */
module.exports = MyComponent;
