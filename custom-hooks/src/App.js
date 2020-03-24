import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TitleOne from "./components/TitleOne";
import TitleTwo from "./components/TitleTwo";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";

function App() {
  return (
    <div className="App">
      {/* <TitleOne />
      <TitleTwo /> */}
      <CounterOne />
      <hr />
      <CounterTwo />
    </div>
  );
}

export default App;
