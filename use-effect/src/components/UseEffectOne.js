import React, { useEffect, useState } from "react";

function UseEffectOne() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("component mounted");
    console.log("state or props changed");
    return () => {
      console.log("component is unmounted");
    };
  });

  return (
    <>
      <h1>UseEffect One</h1>
      <h1>Count - {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >Increase</button>
    </>
  );
}

export default UseEffectOne;
