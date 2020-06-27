import React, { useState } from "react";
import axios from "axios";
import RecipeSearch from "./RecipeSearch";
import RecipeSearchResults from "./RecipeSearchResults.js"
import RecipeResult from "../recipe-result/RecipeResult";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function RecipeHomepage() {
  return (
   
      <div>
        {/* Recipe Search stays on top of recipe page so user can easily search for something else */}
      <RecipeSearch />
      {/* Switches between the search results and the individual recipe result */}
      <Switch>
      <Route exact path="/recipes/" component={RecipeSearchResults} />
      <Route exact path="/recipes/recipe-result" component={RecipeResult} />
      </Switch>
    </div>
    

  );
}

export default RecipeHomepage;