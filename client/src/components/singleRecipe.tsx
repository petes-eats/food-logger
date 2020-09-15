import React from "react";
import { useQuery, gql } from "@apollo/client";

// import { IRecipe } from "./allRecipes";
// import { mockRecipes } from "./allRecipes";

interface Props {
  recipeId: number;
}

export const SingleRecipe: React.FunctionComponent<Props> = ({ recipeId }) => {
  const SINGLE_RECIPE = gql`
  query {
    findRecipe(id: ${recipeId}) {
      name
      description
      id
      picture
    }
  }
`;

  const { loading, error, data } = useQuery(SINGLE_RECIPE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.findRecipe ? (
    <div>
      <h1>{data.findRecipe.name}</h1>
      <h2>{data.findRecipe.description}</h2>
      <ul>
        {data.findRecipe.ingredients &&
          data.findRecipe.ingredients.map((ingredient: string) => {
            return <li key={data.findRecipe.id}>{ingredient}</li>;
          })}
      </ul>

      <h2>{data.findRecipe.picture}</h2>
    </div>
  ) : null;
};

// var getSingleRecipe = (recipeId: number): Promise<IRecipe> => {
//   return new Promise((resolve, reject) => {
//     try {
//       setTimeout(() => {
//         resolve(mockRecipes[recipeId - 1]);
//       }, 1000);
//     } catch (err) {
//       reject(err);
//     }
//   });
// };
