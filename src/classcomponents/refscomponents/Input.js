import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      
    }
    focusInput(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
          <input type="text" ref = {this.inputRef} />
      </div>
    )
  }
}

export default Input

// adding Refs to react components

//ref forwading topic, video 30 in CodeEvolution, I didn't go through that video