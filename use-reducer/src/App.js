import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import ComponentA from "./components/ComponentA";
import { CounterProvider } from "./context-api/counterContext";

const initialState = {
  value: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      const s = { ...state };
      s.value = s.value + action.payload;
      return s;

    case "decrement":
      const d = { ...state };
      d.value = d.value - action.payload;
      return d;
    case "reset":
      return initialState;
    default:
      return initialState;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      <CounterProvider
        value={{
          count: count,
          dispatch: dispatch
        }}
      >
        <ComponentA />
      </CounterProvider>
    </div>
  );
}

export default App;
