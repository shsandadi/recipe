import React from "react";
import "./style.css"
function RecipeTile({ recipe }) {
  return (
    <div className="recipeTile">
      <img className="recipeTile__image" src={recipe["recipe"]["image"]} alt="tile-image" />
      <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}

export default RecipeTile;
