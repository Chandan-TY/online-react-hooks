import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";

const initialState = 0;
const reducer = (state, action) => {
//   console.log("state ", state);
//   console.log("action", action);

  if (action === "increment") {
    return state + 10;
  } else if (action === "decrement") {
    return state - 10;
  } else if (action === "reset") {
    return initialState;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterOne;
