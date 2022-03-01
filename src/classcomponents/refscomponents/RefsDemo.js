import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
          <input type="text" ref={this.inputRef}/>
          <button onClick={this.clickHandler}>Click</button>
     </div>
    )
  }
}

export default RefsDemo

//Adding refs html elements
// 1. Create a Ref
// 2. Attach this ref to desired element
// 3. call corresponding method on "current" property

//ref forwading topic, video 30 in CodeEvolution, I didn't go through that video