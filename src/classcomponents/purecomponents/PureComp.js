import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure Comp render')
    return (
      <div>Pure component {this.props.name}</div>
    )
  }
}

export default PureComp

//use rpce to create react pure component