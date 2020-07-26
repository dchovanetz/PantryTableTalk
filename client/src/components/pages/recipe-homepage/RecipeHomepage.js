import React, { useState, useEffect } from "react";
import axios from "axios";
// import RecipeSearch from "./RecipeSearch";
// import RecipeSearchResults from "./RecipeSearchResults.js";
import RecipeCard from "./RecipeCard";
import RecipeMaker from "./RecipeMaker";
import "./RecipeHomepage.css";
import RecipeResultApp from "../recipe-result/RecipeResult";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function RecipeHomepage() {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    let url = "http://localhost:5000/api/recipes/";

    let myRecipes = {};
    axios
      .get(url)
      .then((response) => {
        setRecipeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [recipeData]);


  return (
    <div className = 'recipeHomepage'>
      {/* Recipe Search stays on top of recipe page so user can easily search for something else */}
      {/* <RecipeSearch /> */}
      {/* Switches between the search results and the individual recipe result */}

      <Switch>
        <Route exact path="/recipes">
        <div className='row layout' >
          
           {recipeData.map((recipe,index) => {
            return (
             
              <RecipeCard
                title={recipe.name}
                image={recipe.image}
                key={recipe._id}
                id={recipe._id}
                dateAdded={recipe.dateAdded}
              />
            );
          })}
          </div>
        </Route>
        <Route path="/recipes/recipe-maker" component={RecipeMaker} />
        <Route path="/recipes/:id" component={RecipeResultApp} />
      </Switch>
 
    </div>
  );
}

export default RecipeHomepage;
