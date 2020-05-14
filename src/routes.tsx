import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage";
import AllRecipes from "./components/allRecipes";
import { SingleRecipe } from "./components/singleRecipe";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/allRecipes/:recipeId" component={SingleRecipe} />
      <Route path="/allRecipes" component={AllRecipes} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};

export default Routes;
