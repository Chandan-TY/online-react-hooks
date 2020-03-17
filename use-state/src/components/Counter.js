import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(5);
  const [name, setName] = useState("Guru");
  const [admin, setAdmin] = useState(false);

  const updateCount = () => {
    setCounter(counter + 1);
  };
  const updateName = () => {
    setName("Suresh");
  };
  return (
    <>
      <h1>Counter - {counter}</h1>
      <h2>Name - {name}</h2>
      <button onClick={updateCount}>Increment</button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCounter(5);
        }}
      >
        Reset
      </button>
      <button onClick={updateName}>Update Name</button>
      <hr />
      {admin ? "Im admin" : "Im not admin"}
      <button
        onClick={() => {
          setAdmin(true);
        }}
      >
        Update Admin
      </button>
    </>
  );
}

export default Counter;
