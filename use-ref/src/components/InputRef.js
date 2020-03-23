import React, { useRef } from "react";

function InputRef() {
  const inputRef = useRef("user");
  const focusOnInput = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} type="text" />
      <hr />
      <button onClick={focusOnInput}>Focus</button>
    </>
  );
}

export default InputRef;
