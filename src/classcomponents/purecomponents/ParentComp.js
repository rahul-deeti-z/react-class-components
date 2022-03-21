import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Rahul'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Rahul'
            })
        }, 2000)
    }
  render() {
    console.log("**********Parent Comp render************");
    return (
      <div>
        Parent Component
        {/* <RegularComp name={this.state.name} />  */}
        <PureComp name={this.state.name} />
        
        {/* Memo demo */}
        {/* <MemoComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp