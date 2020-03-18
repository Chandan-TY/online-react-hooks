import React, { useEffect, useState } from "react";

function UseEffectTwo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // Equivalent to componentDidMount
  useEffect(() => {
    console.log("component is mounted");
  }, []);

  // Equivalent to componentDidUpdate
  useEffect(() => {
    if (count !== 0) {
      console.log("count value is changed");
    }
  }, [count]);

  // Equivalent to componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("component is unmounted");
    };
  }, []);

  useEffect(() => {
    if (name !== "") {
      console.log("Name is changed to ", name);
    }
  }, [name]);

  useEffect(() => {
    console.log("name or count changed");
  }, [name, count]);
  return (
    <>
      <h1>UseEffect Two</h1>
      <h1>Count - {count}</h1>
      <h1>Name - {name}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setName("Abhi");
        }}
      >
        Update Name
      </button>
    </>
  );
}

export default UseEffectTwo;
