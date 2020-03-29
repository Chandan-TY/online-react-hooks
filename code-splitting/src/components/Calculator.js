import React, { useState } from "react";
import { add } from "../calculator/add";
// import { product } from "../calculator/product";

function Calculator() {
  const [sum, setSum] = useState(0);
  const [product, setProduct] = useState(0);

  const addTwoNumbers = () => {
    const s = add(10, 20);
    setSum(s);
  };

  const multiplyTwoNumbers = () => {
    import("../calculator/product").then(calci => {
      //   console.log(calci);
      const p = calci.product(20, 30);
      setProduct(p);
    });
  };
  return (
    <div>
      <h1>Sum - {sum}</h1>
      <h1>Product - {product}</h1>
      <button onClick={addTwoNumbers}>Add</button>
      <button onClick={multiplyTwoNumbers}>Multiply</button>
    </div>
  );
}

export default Calculator;
