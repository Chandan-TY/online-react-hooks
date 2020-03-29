import React, { useState } from "react";
import Axios from "axios";

function RecipeAdd(props) {
  const [state, setState] = useState({
    name: "",
    ingredients: ""
  });
  const handleSubmit = event => {
    event.preventDefault();

    const url = "https://react-js-f3568.firebaseio.com/recipes.json";
    const recipe = { ...state };
    Axios.post(url, recipe)
      .then(response => {
        if (response.status === 200) {
          props.history.push("/show");
          setState({
            name: "",
            ingredients: ""
          });
        }
      })
      .catch(err => {
        console.log("Error ", err);
      });
  };

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            value={state.name}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Ingredients</label>
          <input
            value={state.ingredients}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="ingredients"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RecipeAdd;
