import React from "react";
import { Recipe } from "./allRecipes";
import { mockRecipes } from "./allRecipes";

const getSingleRecipe = (recipeId: number): Promise<Recipe> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(mockRecipes[recipeId - 1]);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
};

export const SingleRecipe: React.FunctionComponent<any> = (props) => {
  const emptyObj: any = {};
  const [recipe, setRecipe] = React.useState(emptyObj);

  React.useEffect(() => {
    getSingleRecipe(props.match.params.recipeId)
      .then((recipe) => setRecipe(recipe))
      .catch((error) => console.error(error));
  }, []);
  console.log(props.match.params, "ALEX WHY");
  return recipe ? (
    <div>
      <h1>{recipe.name}</h1>
      <h2>We will pull this with GraphQL...soon</h2>
    </div>
  ) : null;
};
