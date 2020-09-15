import * as React from "react";
// import { Link } from "react-router-dom";
import { IRecipe } from "./allRecipes";

const RecipeCard: React.FunctionComponent<IRecipe> = ({
  description,
  picture,
  name,
  id,
}: IRecipe) => {
  return (
    <div className="bg-blue-500 bg-opacity-75 m-2 p-5 rounded-lg flex content-center flex-col items-center">
      {/* <Link to={`/allRecipes/${id}`}> */}
      <h3 className="font-bold text-xl text-teal-200 hover:text-white">
        {name}
      </h3>
      {/* </Link> */}
      <p>{description}</p>
      <h3>Picture placehold text: {picture}</h3>
      {/* <Link to={`/allRecipes/${id}`}> */}
      <img
        src="https://i.gyazo.com/382874084392664241454615805458c2.png"
        alt="asd"
      ></img>
      {/* </Link> */}
    </div>
  );
};

export default RecipeCard;
