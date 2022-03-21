import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info){
        console.log("*************")
        console.log(error)
        console.log("***************")
        console.log(info)
        console.log("@@@@@@@@@@@@@@@")
    }
  render() {
      if(this.state.hasError){
          return <h1>Something went wrong</h1>
      }
      return this.props.children
  }
}

export default ErrorBoundary

//Note: Error boundaries don't catch inside event handlers
// we just need to use try catch statements there