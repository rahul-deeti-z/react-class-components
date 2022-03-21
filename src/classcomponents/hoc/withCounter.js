import React from "react";

const withCounter = (WrappedComponent, incrementBy = 1) => {
    class WithCounter extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          count: 0,
        };
      }
      incrementCount = () => {
        this.setState((prevState) => {
          return { count: prevState.count + incrementBy };
        });
      };
      render() {
        return (
          <WrappedComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            //below line is needed when we want to pass props from parent(app is parent in this case) to original component
            {...this.props}
          />
        );
      }
    }
    return WithCounter
}
export default withCounter