import React, { Component } from "react";
class ThisReactDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: 0,
    };
    //  this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("From handleClick()", this);
    this.setState({ numOfClicks: this.state.numOfClicks + 1 });
  }
  render() {
    console.log("From render()", this);
    return (
      <div>
        <button onClick={this.handleClick}>Click Me!</button>
        {/* {console.log(this.handleClick)} */}
        <p>Number of Times Clicked = {this.state.numOfClicks}</p>
      </div>
    );
  }
}
export default ThisReactDemo;
