import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        message: 'Hello'
    }
    this.clickHandler = this.clickHandler.bind(this)
    // console.log(this)
  }
  clickHandler(){
      this.setState({
          message: 'Goodbye!'
      })
      console.log(this)
  }

    render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          {/* <button onClick={this.clickHandler.bind(this)}>Click V1</button> */}
          {/* <button onClick={() => this.clickHandler()}>Click V2 </button> */}
          <button onClick = {this.clickHandler}>Click V3</button>
      </div>
    )
  }
}

export default EventBind