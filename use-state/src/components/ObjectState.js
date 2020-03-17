import React, { useState } from "react";

function ObjectState() {
  const [person, setPerson] = useState({
    name: "Suresh",
    age: 20
  });
  const updateName = () => {
    const p = { ...person };
    p.name = "Mahesh";
    console.log(p);
    setPerson(p);
  };
  const updateAge = () => {
    const p = { ...person };
    p.age = 25;
    setPerson(p);
  };
  const updateAgeAndName = () => {
    const p = { ...person };
    p.name = "Vijay";
    p.age = 40;
    setPerson(p);
  };
  return (
    <>
      <h1>Name - {person.name}</h1>
      <h1>Age - {person.age}</h1>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateAge}>Update Age</button>
      <button onClick={updateAgeAndName}>Update Name and Age</button>
    </>
  );
}

export default ObjectState;
