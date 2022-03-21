import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
      {/* make use of arrow function syntax to pass parameters to function call */}
      <button onClick={() => {props.greetHandler("Child Component")}}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent