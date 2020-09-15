import React from "react";
import { IRecipe } from "./allRecipes";
import { mockRecipes } from "./allRecipes";

const getSingleRecipe = (recipeId: number): Promise<IRecipe> => {
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

interface Props {
  recipeId: number;
}

export const SingleRecipe: React.FunctionComponent<Props> = ({ recipeId }) => {
  const [recipe, setRecipe] = React.useState<IRecipe | null>(null);

  React.useEffect(() => {
    getSingleRecipe(recipeId)
      .then((recipe) => setRecipe(recipe))
      .catch((error) => console.error(error));
  }, [recipeId]);

  return recipe ? (
    <div>
      <h1>{recipe.name}</h1>
      <ul>
        {recipe.ingredients &&
          recipe.ingredients.map((ingredient) => {
            return <li key={recipe.id}>{ingredient}</li>;
          })}
      </ul>

      <h2>{recipe.picture}</h2>
    </div>
  ) : null;
};
