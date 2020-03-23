import React, { useContext, useEffect } from "react";
import UserContext from "../context-api/userContext";

function ComponentF() {
  const context = useContext(UserContext);
  const { data, setData } = context;
  useEffect(() => {
    console.log(context);
  }, []);
  return (
    <>
      <h1>Products</h1>
      <ul>
        {data.map(product => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </>
  );
}

export default ComponentF;
