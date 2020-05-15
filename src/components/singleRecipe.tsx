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

export const SingleRecipe: React.FunctionComponent<any> = ({ recipeId }) => {
  const emptyObj: any = {};
  const [recipe, setRecipe] = React.useState<Recipe | undefined>(undefined);

  React.useEffect(() => {
    getSingleRecipe(recipeId)
      .then((recipe) => setRecipe(recipe))
      .catch((error) => console.error(error));
  }, []);

  return recipe ? (
    <div>
      <h1>{recipe.name}</h1>
      <ul>
        {recipe.ingredients &&
          recipe.ingredients.map((ingredient) => {
            return <li>{ingredient}</li>;
          })}
      </ul>
      <h2>We will pull this with GraphQL...soon</h2>
    </div>
  ) : null;
};
