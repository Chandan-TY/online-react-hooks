import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0
};

const reducer = (state, action) => {
//   console.log("state", state);
//   console.log("action", action);

  switch (action.type) {
    case "increment":
      const s = { ...state };
      s.firstCounter = s.firstCounter + action.payload;
      return s;
    case "decrement":
      return {
        firstCounter: state.firstCounter - action.payload
      };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
};
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count - {count.firstCounter}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "increment",
            payload: 10
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "decrement",
            payload: 10
          });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "reset"
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterTwo;
