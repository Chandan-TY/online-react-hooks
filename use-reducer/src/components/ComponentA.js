import React, { useContext } from "react";
import ComponentB from "./ComponentB";
import CounterContext from "../context-api/counterContext";

function ComponentA() {
  const context = useContext(CounterContext);
  const { count, dispatch } = context;
//   console.log(context);
  return (
    <div>
      <h1>Count - {count.value}</h1>
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
      <hr />
      <ComponentB />
    </div>
  );
}

export default ComponentA;
