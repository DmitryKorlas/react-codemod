var React = require('react/addons');

// comment above class
class MyComponent extends React.Component {

  getListItem = (item) => {
    return <div key={item.id}>{item.name}</div>;
  }

  getToolbar() {
    return <Toolbar />;
  }

  render() {
    return <>
      {this.getToolbar()}
      <List items={this.props.items} renderItem={this.getListItem} />
    </>;
  }
}

/* comment at end */
module.exports = MyComponent;
