import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentD from "./components/ComponentD";
import { UserProvider } from "./context-api/userContext";

function App() {
  const products = [
    {
      id: 1,
      name: "Shoe",
      price: 2000
    },
    {
      id: 2,
      name: "Watch",
      price: 3000
    },
    {
      id: 3,
      name: "Bag",
      price: 1000
    }
  ];
  const [data, setData] = useState(products);
  return (
    <div className="App">
      <UserProvider
        value={{
          data: data,
          setData: setData
        }}
      >
        <ComponentD />
      </UserProvider>
    </div>
  );
}

export default App;
