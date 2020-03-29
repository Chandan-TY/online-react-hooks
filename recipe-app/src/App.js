import React, { useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context-api/loginContext";
import Navbar from "./components/navbar/Navbar";

const initialState = {
  login: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        login: true
      };
    case "logout":
      return {
        login: false
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Router>
      <UserProvider
        value={{
          state: state,
          dispatch: dispatch
        }}
      >
        <Navbar />
      </UserProvider>
    </Router>
  );
}

export default App;
