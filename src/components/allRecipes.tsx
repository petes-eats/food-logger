import * as React from "react";
import RecipeCard from "./recipeCard";

export interface Recipe {
  id: number;
  name: string;
  description: string;
  picture: string;
  ingredients?: Array<string>;
}

export const mockRecipes: Array<Recipe> = [
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
];

export const getRecipes = (recipes: Array<Recipe>): Promise<Array<Recipe>> => {
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

const AllRecipes: React.FunctionComponent<Element> = () => {
  const typedArr: Array<Recipe> = [];
  const [recipes, setRecipes] = React.useState(typedArr);

  React.useEffect(() => {
    getRecipes(mockRecipes)
      .then((recipes) => {
        setRecipes(recipes);
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>All Recipes here for now</h1>
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            key={Math.random()}
            id={recipe.id}
            name={recipe.name}
            description={recipe.description}
            picture={recipe.picture}
          />
        );
      })}
    </div>
  );
};

export default AllRecipes;
