var React = require('react/addons');

const propTypes = {};

// comment above class
class MyComponent extends React.Component {
  static someStaticThing() {
    return 'Foo';
  }

  // comment on componentDidMount
  componentDidMount() {
  }

  renderFooter() {
    return <div>JSX content {this.renderButton()}</div>;
  }

  getProperty() {
    return 42;
  }

  renderConditionalThing() {
    if (this.getProperty() === 42) {
      return (
        <div>it return JSX</div>
      );
    } else {
      return null;
    }
  }

  renderFormatFooBar(id) {
    if (!id) {
      return null;
    }

    if (id === 42) {
      return <span>jsx content</span>;
    }
  }

  formatFoo(id) {
    if (!id) {
      return null;
    }

    if (id === 42) {
      return 'not a JSX';
    }
  }

  renderToolbar() {
    // comment within method
    if (this.getProperty() === 42) {
      return null;
    }

    return <Toolbar header={this.renderFormatFooBar(this.getProperty())} />;
  }

  renderButton = () => {
    return <button>jsx content</button>;
  }

  render() {
    return (
      <div>
        {this.renderToolbar()}
        {this.renderConditionalThing()}
        {this.formatFoo()}
        {this.renderButton()}
        {this.renderFooter()}
      </div>
    );
  }

}

MyComponent.propTypes = propTypes;

/* comment at end */
module.exports = MyComponent;
