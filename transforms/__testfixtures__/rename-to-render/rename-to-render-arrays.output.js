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

  renderConditionalThing() {
    if (this.getProperty() === 42) {
      return [
        <div key="foo">it return JSX</div>,
        <Button key="bar">Btn</Button>,
      ];
    } else {
      return null;
    }
  }

  renderFooter = () => {
    return <div>JSX content {this.getButton()}</div>;
  };

  renderActions() {
    return [
      <Button key="foo">foo</Button>,
      <span key="bar">bar</span>
    ];
  }

  renderFormatFooBar(id) {
    if (!id) {
      return null;
    }

    if (id === 42) {
      return <span>jsx content</span>;
    }

    return this.formatFoo(id);
  }

  renderToolbar() {
    // comment within method
    if (this.getProperty() === 42) {
      return null;
    }

    return <Toolbar header={this.renderFormatFooBar(this.getProperty(), this.getSections())} actions={this.renderActions()} />;
  }

  render() {
    return (
      <div>
        {this.renderToolbar()}
        {this.renderConditionalThing()}
        {this.formatFoo()}
        {this.getButton()}
        {this.renderFooter()}
      </div>
    );
  }

}

MyComponent.propTypes = propTypes;

/* comment at end */
module.exports = MyComponent;
