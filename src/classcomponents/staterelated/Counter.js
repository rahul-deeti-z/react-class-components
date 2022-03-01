import { getValue } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'
//rce short cut for class component
export class Counter extends Component {
    //rconst is short cut for constructor
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        // this.setState(
        //   {
        //     count: this.state.count + 1,
        //   },
        //   () => {
        //     console.log(
        //       "Callback function requried when you want to execute something immeadiately after state update"
        //     );
        //   }
        // );
        this.setState( (prevState, props) => ({
            count: prevState.count + 1
        }),
          () => {
            console.log(
              "Callback function requried when you want to execute something immeadiately after state update"
            );
          }
        )
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
  render() {
    return (
        <div>
          <div>Count - {this.state.count}</div>
          <button onClick={() => this.incrementFive()}>Increment Five</button>
        </div>
    )
  }
}

export default Counter

//Notes:

// Always make use of set state and never modify state directly

// The code, that has to be executed after the state has been updated, place that code 
// in the callback function which is the second argument to setState method.

// When you have to update state based on previous state getValue, pass in function 
// as an argument instead of regular object