var React = require('react/addons');

// comment above class
class MyComponent extends React.Component {

  renderToolbar() {
    return <Toolbar />;
  }

  renderContent() {
    return <>
      <H1>Page</H1>
      {this.renderToolbar()}
    </>;
  }

  render() {
    return <>
      {this.renderContent()}
      <footer>Copyright 2000-present</footer>
    </>;
  }
}

/* comment at end */
module.exports = MyComponent;
