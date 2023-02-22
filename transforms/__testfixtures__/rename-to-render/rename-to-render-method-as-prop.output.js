var React = require('react/addons');

// comment above class
class MyComponent extends React.Component {

  renderListItem = (item) => {
    return <div key={item.id}>{item.name}</div>;
  }

  renderToolbar() {
    return <Toolbar />;
  }

  render() {
    return <>
      {this.renderToolbar()}
      <List items={this.props.items} renderItem={this.renderListItem} />
    </>;
  }
}

/* comment at end */
module.exports = MyComponent;
