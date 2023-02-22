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

  getFooter = () => {
    return <div>JSX content {this.getButton()}</div>;
  };

  getProperty() {
    return 42;
  }

  getConditionalConsequentThing() {
    if (this.getProperty() === 42) {
      return (
        <div>it return JSX</div>
      );
    } else {
      return null;
    }
  }

  getConditionalAlternateThing = () => {
    if (this.getProperty() === 42) {
      return null;
    } else {
      return (
        <Button>it return JSX</Button>
      );
    }
  };

  formatFooBar(id) {
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

    return 'formatted foo';
  }

  getToolbar() {
    // comment within method
    if (this.getProperty() === 42) {
      return null;
    }

    return <Toolbar header={this.formatFooBar(this.getProperty())} />;
  }

  getButton = () => {
    return <button>jsx content</button>;
  }

  render() {
    return (
      <div>
        {this.getToolbar()}
        {this.getConditionalConsequentThing()}
        {this.getConditionalAlternateThing()}
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
