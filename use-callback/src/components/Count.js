import React from "react";

function Count({ text, data }) {
  console.log(text, "Count rendering");

  return (
    <div>
      <h1>
        {text} - {data}
      </h1>
    </div>
  );
}

export default React.memo(Count);
