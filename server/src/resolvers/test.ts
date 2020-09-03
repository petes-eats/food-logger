import { Resolver, Query, Mutation, Arg } from "type-graphql";

import { Recipe } from "../entities/recipe";
import { CreateRecipeInput } from "../inputs/CreateRecipeInput";

@Resolver()
export class TestResolver {
  @Query(() => String)
  hello() {
    return "Hello!";
  }

  @Query(() => Number)
  fugNumber() {
    return 1337;
  }

  @Query(() => [Recipe])
  allRecipes() {
    return mockRecipes;
  }

  @Query(() => [Recipe])
  recipes() {
    const food = Recipe.find({ select: ["id", "name", "description"] });

    return food;
  }

  @Mutation(() => Recipe)
  async addRecipe(@Arg("data") data: CreateRecipeInput) {
    const recipe = Recipe.create(data);
    await recipe.save();
    return recipe;
  }
}

// @ObjectType()
// class Recipe {
//   @Field(() => Number)
//   id: number;

//   @Field()
//   name: string;

//   @Field()
//   description: string;

//   @Field()
//   picture: string;

//   @Field(() => [String])
//   ingredients: string[];
// }

var mockRecipes = [
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
