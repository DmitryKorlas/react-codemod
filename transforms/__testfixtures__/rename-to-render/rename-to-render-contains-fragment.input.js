var React = require('react/addons');

// comment above class
class MyComponent extends React.Component {

  getToolbar() {
    return <Toolbar />;
  }

  getContent() {
    return <>
      <H1>Page</H1>
      {this.getToolbar()}
    </>;
  }

  render() {
    return <>
      {this.getContent()}
      <footer>Copyright 2000-present</footer>
    </>;
  }
}

/* comment at end */
module.exports = MyComponent;
