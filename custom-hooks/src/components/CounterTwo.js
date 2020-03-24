import React, { useState } from "react";
import useCounter from "../custom-hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(100);
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={()=>{increment(10)}}>Increment</button>
      <button onClick={()=>{decrement(10)}}>Decrement</button>
      <button onClick={()=>{reset(100)}}>Reset</button>
    </div>
  );
}

export default CounterTwo;
