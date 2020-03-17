import React, { useState } from "react";

function ArrayState() {
  const [flowers, setFlowers] = useState(["Roses", "Jasmine", "Sunflower"]);
  console.log(flowers);
  const update = () => {
    const f = [...flowers];
    f[0] = "XYZ";

    setFlowers(f);
  };
  const makeUpperCase = () => {
    const f = [...flowers];
    const fl = f.map(flower => {
      return flower.toUpperCase();
    });
    setFlowers(fl);
  };
  return (
    <>
      {flowers.map((flower, index) => {
        return <li key={index}>{flower}</li>;
      })}
      <button onClick={update}>Update</button>
      <button onClick={makeUpperCase}>Upper</button>
    </>
  );
}

export default ArrayState;
