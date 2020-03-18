import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UseEffectOne from "./components/UseEffectOne";
import UseEffectTwo from "./components/UseEffectTwo";
import FetchingData from "./components/FetchingData";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* {show ? <UseEffectOne /> : null}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button> */}
      {/*  {show ? <UseEffectTwo /> : null}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button> */}

      <FetchingData />
    </div>
  );
}

export default App;
