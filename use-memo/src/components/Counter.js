import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(5);
  const [counterTwo, setCounterTwo] = useState(10);

  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 3);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    console.log("isEven called");
    if (counterOne % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }, [counterOne]);
  return (
    <div>
      <button onClick={incrementCounterOne}>Counter One - {counterOne}</button>
      <button onClick={incrementCounterTwo}>Counter Two - {counterTwo}</button>
      <h1>{isEven ? "Even" : "Odd"}</h1>
    </div>
  );
}

export default Counter;
