import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import RecipeCard from "./recipeCard";

export interface IRecipe {
  id: number;
  name: string;
  description: string;
  picture: string;
  ingredients?: Array<string>;
}

// query for all recipes from db, returning name, id, description
const ALL_RECIPES = gql`
  query {
    recipes {
      name
      description
      id
      picture
    }
  }
`;

const AllRecipes: React.FunctionComponent<Element> = () => {
  const { loading, error, data } = useQuery(ALL_RECIPES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="text-center">
      <h1 className="text-3xl">Available recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-6">
        {data.recipes &&
          data.recipes.map((recipe: IRecipe) => {
            return (
              <Link to={`/allRecipes/${recipe.id}`}>
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  name={recipe.name}
                  description={recipe.description}
                  picture={recipe.picture}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default AllRecipes;

export var mockRecipes: Array<IRecipe> = [
  {
    id: 1,
    name: "Pork thing1",
    description: "lots of pork1",
    picture: "asd",
    ingredients: ["chives", "lentils", "garlic", "hand-pulled noodles"],
  },
  {
    id: 2,
    name: "Pork thing2",
    description: "lots of pork2",
    picture: "asd",
    ingredients: ["chives", "lentils", "garlic", "hand-pulled noodles"],
  },
  {
    id: 3,
    name: "Pork thing3",
    description: "lots of pork3",
    picture: "asd",
    ingredients: ["chives", "lentils", "garlic", "hand-pulled noodles"],
  },
  {
    id: 4,
    name: "Pork thing4",
    description: "lots of pork4",
    picture: "asd",
    ingredients: ["chives", "lentils", "garlic", "hand-pulled noodles"],
  },
  {
    id: 5,
    name: "Pork thing5",
    description: "lots of pork5",
    picture: "asd",
    ingredients: ["chives", "lentils", "garlic", "hand-pulled noodles"],
  },
  {
    id: 6,
    name: "Pork thing6",
    description: "lots of pork6",
    picture: "asd",
    ingredients: ["chives", "lentils", "garlic", "hand-pulled noodles"],
  },
];

// this function was written to provide mock data before we set up our graphql api
export var getRecipes = (recipes: Array<IRecipe>): Promise<Array<IRecipe>> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(recipes);
      }, 1000);
    } catch (err) {
      reject(err);
    }
  });
};
