import * as React from "react";
import { Link } from "react-router-dom";
import { Recipe } from "./allRecipes";

const RecipeCard: React.FunctionComponent<Recipe> = ({
  description,
  picture,
  name,
  id,
}: Recipe) => {
  return (
    <div>
      <Link to={`/allRecipes/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>{description}</p>
      <h3>Picture placehold text: {picture}</h3>
      <Link to={`/allRecipes/${id}`}>
        <img src="https://i.gyazo.com/382874084392664241454615805458c2.png"></img>
      </Link>
    </div>
  );
};

export default RecipeCard;
