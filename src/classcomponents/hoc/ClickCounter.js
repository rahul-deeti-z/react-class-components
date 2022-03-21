import React, { Component } from 'react'
import withCounter from './withCounter'
//below import no longer needed
// import UpdatedComponent from './withCounter'
class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: 0
    //   }
    // }
    // incrementCount = () => {
    //     this.setState( prevState => {
    //         return {count: prevState.count+1}
    //     })

    // }

  render() {
    const {count, incrementCount} = this.props
    return (
        <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
    )
  }
}

export default withCounter(ClickCounter, 5)