import React, { useState } from "react";
import axios from "axios";
import RecipeSearch from "./RecipeSearch";
import RecipeSearchResults from "./RecipeSearchResults.js";
import RecipeCard from "./RecipeCard";
import RecipeResultsApp from "../recipe-result/RecipeResultApp";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function RecipeHomepage() {
  const initialState = {};

  const [recipeData, setRecipeData] = useState(initialState);

  let url = "http://localhost:5000/api/recipeRoutes/";
  axios
    .get(url)
    .then(response => {
      return response.data
    })
    .then(recipes => {
      console.log(recipes)
    })
    .catch((error) => {
      console.log(error);
    });


  return (
    <div>
      {/* Recipe Search stays on top of recipe page so user can easily search for something else */}
      <RecipeSearch />
      {/* Switches between the search results and the individual recipe result */}
      <Switch>
        <Route exact path="/recipes" component={RecipeCard} />
        <Route
          exact
          path="/recipes/recipe-result"
          component={RecipeResultsApp}
        />
      </Switch>
    </div>
  );
}

export default RecipeHomepage;
