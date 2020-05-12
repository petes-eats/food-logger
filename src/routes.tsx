import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage";
import AllRecipes from "./components/allRecipes";
import SingleRecipe from "./components/singleRecipe";

export default function routes() {
  return (
    <Switch>
      <Route path="/singleRecipe" component={() => <SingleRecipe />} />
      <Route path="/allRecipes" component={AllRecipes} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}