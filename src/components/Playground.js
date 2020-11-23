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

//useState allows to set internal state
// it is a function that takes that desired intitial state
// returns an array with 2 things: the state itself and a state changer
// NO DECLARING VARIABLES TO HOLD STATE (With Let)

export default function Playground(props) {
  const [count, setCount] = useState(0);
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [currentWeapon, setCurrentWeapon] = useState("scissors");
  if (spinnerOn) {
    return (
      <div className="container">
        Loading...
        <button
          onClick={(e) => {
            setSpinnerOn(false);
          }}
        >
          Turn Spinner Off
        </button>
      </div>
    );
  }
  return (
    <div className="container" id={"cohort" + props.cohort}>
      <h3>Playground for Web {props.cohort}</h3>
      <div>The count is {count}</div>
      <div>The Current Weapon is {currentWeapon}</div>
      <button onClick={(e) => setCurrentWeapon("scissors")}>
        Pick Scissors
      </button>
      <button onClick={(e) => setCurrentWeapon("rock")}>Pick Rock</button>
      <button onClick={(e) => setCurrentWeapon("paper")}>Pick Papper</button>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}
