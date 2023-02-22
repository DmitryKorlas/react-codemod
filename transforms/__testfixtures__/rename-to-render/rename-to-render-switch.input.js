var React = require('react/addons');

// comment above class
class MyComponent extends React.Component {

  getContent(variant) {
    switch (variant) {
      case 'dark': {
        return <div>dark scheme</div>;
      }
      case 'light': {
        return <div>light scheme</div>;
      }
      default: {
        return <div>default scheme</div>;
      }
    }
  }

  getHeader() {
    return <h1>Header</h1>
  }

  render() {
    return <>
      {this.getHeader()}
      {this.getContent(this.props.variant)}
      <footer>Copyright 2000-present</footer>
    </>;
  }
}

/* comment at end */
module.exports = MyComponent;
