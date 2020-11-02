/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

import React, { useState } from "react";

export default function Playground(props) {
  // useState allows us to set internal state
  // it is a function that takes desired initial state
  // it returns an array with two things:
  // 1. the state itself and
  // 2. a state changer function
  const [count, setCount] = useState(0); // destructuring
  const [spinnerOn, setSpinnerOn]

  return (
    <div className="container">
      <h3>Playground for Web {props.cohort}</h3>
      <div>the count is {count}</div>
      <button onClick={(event) => setCount(count + 1)}>increase</button>
    </div>
  );
}

// const theArray = useState(0);
// const count = theArray[0];
// const setCount = theArray[1];
