import React, { useContext } from "react";
import CounterContext from "../context-api/counterContext";

function ComponentC() {
  const { count, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h1>Count - {count.value}</h1>
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

export default ComponentC;
