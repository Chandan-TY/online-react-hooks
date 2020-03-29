import React, { Component, useState, useEffect } from "react";
import RecipeDetail from "../recipe-detail/RecipeDetail";
import RecipeList from "../recipe-list/RecipeList";
import Axios from "axios";

function RecipeApp() {
  let i = 1;

  const [recipes, setRecipes] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllRecipes();
  }, []);

  const getAllRecipes = async () => {
    const url = "https://react-js-f3568.firebaseio.com/recipes.json";

    try {
      const response = await Axios.get(url);

      const recipes = [];
      const fetchedRecipes = response.data;
      for (let key in fetchedRecipes) {
        recipes.push({
          slno: i,
          id: key,
          ...fetchedRecipes[key]
        });
        i++;
      }
      setLoading(false);
      setRecipes(recipes);
    } catch (error) {
      setLoading(false);
      setError("Something went wrong");
    }
  };
  const getRecipe = recipe => {
    setSelectedRecipe(recipe);
    setShowDetail(true);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>error</h1>;
  return (
    <div>
      <hr />
      <div className="row container">
        <div className="col-md-4">
          <RecipeList sendRecipe={getRecipe} recipes={recipes} />
        </div>
        <div className="col-md-4">
          {showDetail ? <RecipeDetail detailRecipe={selectedRecipe} /> : null}
        </div>
      </div>
    </div>
  );
}

export default RecipeApp;
