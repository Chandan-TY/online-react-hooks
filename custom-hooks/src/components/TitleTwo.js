import React, { useState, useEffect } from "react";
import useTitle from "../custom-hooks/useTitle";

function TitleTwo() {
  const [count, setCount] = useState(20);
  useTitle(count);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 10);
        }}
      >
        TitleTwo -{count}
      </button>
    </div>
  );
}

export default TitleTwo;
