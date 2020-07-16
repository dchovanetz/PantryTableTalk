import React, { useState, useEffect } from "react";
import axios from "axios";
// import './Recipe.css'
import Ingredients from './ingredients'

//Title, img, nutrition facts, topic tag, ingredients, serving size, video
function RecipeResult() {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api${window.location.pathname}`)
      .then((response) => {
        setRecipe(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
        console.log(recipe);
  }, []);

  // const ingredientsList=[]
  // let ingredients = recipe.ingredients
  // console.log(ingredients)
  // ingredients.forEach(ingredient => {
  // const ingredientItem = <li>{ingredient}</li>
  // ingredientsList.push(ingredientItem)
  // })
  
  // const {topicTag, servingSize, nutritionFacts, ingredients, videoUrl} = this.props;//assuming that we can get this from consuming APIs
  //do we need to map out the ingredients
  return (
    <div className="recipe-card">
      <h1>{recipe.name}</h1>
      <img src={recipe.image}></img>
      <div className="recipe-card-content">
        <span className="serving-size">Servings: {recipe.servings}</span>
        <h2>Ingredients: </h2>
        {/* {recipe.map(el=>el)} */}
        <h2>Instructions:</h2>
        {/* {ingredientsList} */}
      </div>
    </div>
  );
}

export default RecipeResult;
