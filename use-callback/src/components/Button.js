import React from "react";

function Button(props) {
  console.log(props.text, "Button Rendering");
  return (
    <div>
      <button onClick={props.handleClick}>{props.children}</button>
    </div>
  );
}

export default React.memo(Button);
