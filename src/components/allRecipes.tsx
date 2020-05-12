import React from "react";
import SingleRecipe from "./singleRecipe";
import { Link } from "react-router-dom";

export default function allRecipes() {
  return (
    <div>
      <h1>All Recipes here for now</h1>
      <Link to="/singleRecipe">
        <h3>Single Recipe Test</h3>
      </Link>
    </div>
  );
}
