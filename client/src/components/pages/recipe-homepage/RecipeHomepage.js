import React, { useState } from "react";
import axios from "axios";
import RecipeSearch from "./RecipeSearch";
import RecipeSearchResults from "./RecipeSearchResults.js"
import RecipeImg from "./RecipeImg"
import RecipeApp from "./RecipeApp"
import RecipeMaker from "./RecipeMaker"
import RecipeResultsApp from "../recipe-result/RecipeResultApp";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function RecipeHomepage() {
  return (
   
      <div>
        {/* Recipe Search stays on top of recipe page so user can easily search for something else */}
      <RecipeApp />
      {/* Switches between the search results and the individual recipe result */}
      <Switch>
      <Route exact path="/recipes" component={RecipeImg} />
      <Route exact path="/recipes/recipe-result" component={RecipeResultsApp} />
      <Route exact path="/recipemaker" component= { RecipeMaker } />
      </Switch>
    </div>
    

  );
}

export default RecipeHomepage;