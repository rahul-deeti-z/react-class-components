import React, { Component } from 'react'
import Input from './Input'
class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }
    clickHandler = () => {
        // console.log(this.componentRef)
        // console.log(this.componentRef.current)
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
          <Input ref ={this.componentRef}/>
          <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput

//ref forwading topic, video 30 in CodeEvolution, I didn't go through that video