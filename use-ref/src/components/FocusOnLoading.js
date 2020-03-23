import React, { useRef, useEffect } from "react";

function FocusOnLoading() {
  const focusRef = useRef();

  useEffect(() => {
    console.log(focusRef);

    focusRef.current.focus();
  }, []);

  return (
    <>
      <input ref={focusRef} />
    </>
  );
}

export default FocusOnLoading;
