import React, { useState } from "react";
import useCounter from "../custom-hooks/useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(20);
  return (
    <div>
     <h1>Count - {count}</h1>
      <button onClick={()=>{increment(20)}}>Increment</button>
      <button onClick={()=>{decrement(20)}}>Decrement</button>
      <button onClick={()=>{reset(20)}}>Reset</button>
    </div>
  );
}

export default CounterOne;
