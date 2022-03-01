import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    //approach 1
    // if(this.state.isLoggedIn){
    //   return <div>Welcome Rahul</div>
    // } else{
    //   return <div>Welcome Guest</div>
    // }

    //aproach2
    // let message
    // if(this.state.isLoggedIn){
    //   message = <div>Welcome Rahul</div>;
    // } else{
    //   message = <div>Welcome Guest</div>;
    // }
    // return message;

    //approach3
    return this.state.isLoggedIn ? (
      <div>Welcome Rahul</div>
    ) : (
      <div>Welcome Guest</div>
    );

  }
}

export default UserGreeting