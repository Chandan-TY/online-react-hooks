import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import CounterContext from "../context-api/counterContext";

function ComponentB() {
  const { count, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h1>Count - {count.value}</h1>
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
      <hr />
      <ComponentC />
    </div>
  );
}

export default ComponentB;
