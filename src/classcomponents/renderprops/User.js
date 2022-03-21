import React, { Component } from 'react'

class User extends Component {
  render() {
    return <div>{this.props.render(true)}</div>;
  }
}

export default User

/*In react it is possible to use a prop whose value is a function
  to control what is actually rendered by a component*/
/*The term "render prop" refers to a technique for sharing code
  between react components using a prop whose value is a function*/