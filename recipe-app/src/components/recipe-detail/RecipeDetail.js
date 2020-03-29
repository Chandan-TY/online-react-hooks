import React from "react";

export default function RecipeDetail(props) {
  return (
    <div className="card" style={{ width: "40rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.detailRecipe.slno}</h5>
        <h1 className="card-text">{props.detailRecipe.name}</h1>
        <p className="p">{props.detailRecipe.ingredients}</p>
      </div>
    </div>
  );
}
