import React, { useContext } from "react";
import UserContext from "../../context-api/loginContext";

function Login(props) {
  const { state, dispatch } = useContext(UserContext);
  const loginAndNavigateToShowRecipe = () => {
    dispatch({
      type: "login"
    });
    props.history.push("/show");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login Page</h1>
      <p>Can have login form here...</p>
      <button
        className="btn btn-success"
        onClick={() => {
          loginAndNavigateToShowRecipe();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
