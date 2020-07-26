import React, { useState, useEffect } from "react";
import Ingredients from "./Ingredients";
import YoutubeVideo from "./YoutubeVideo";
import axios from "axios";
import Jumbotron from 'react-bootstrap/Jumbotron';
import './RecipeResults.css';

//Title, img, nutrition facts, topic tag, ingredients, serving size, video
function RecipeResult() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: [],
    time: {},
    servings: "",
    serving_size: "",
    image: "",
    youTube_Url: "",
    dateAdded: "",
    qrcode: "",
  });

  // retrieves data of one recipe and sets the state
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api${window.location.pathname}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { ingredients, instructions, _id } = recipe;

  // const {topicTag, servingSize, nutritionFacts, ingredients, videoUrl} = this.props;//assuming that we can get this from consuming APIs
  //do we need to map out the ingredients
  return (
    <Jumbotron className="jumbo">
    <div className="recipe-card">
      <h1 className="recipe-name">{recipe.name}</h1>
      <span className="serving-size">Servings: {recipe.servings}</span>
      <div className="img-repo">
      <img className="recipe-img"  src={recipe.image}></img>
      </div>
      <div className="recipe-card-content">
        <Ingredients ingredients={ingredients} recipe_id={_id}/>
        <div className="div-instructions">
        <h2 className="instructions">Instructions:</h2>
        <ol className="ol-instructions">
          {instructions.map((instruction, i) => 
            <li className="li-instructions" key={"inst" + i + _id}>{instruction}</li>
          )}
        </ol>
        </div>
        <p className="p-ctfb">Recipes are provided by the Central Texas Food Bank in accordance with the Healthy Pantry Initiative Program.</p>
        <YoutubeVideo video={recipe.youTube_Url} />
      </div>
    </div>
  </Jumbotron>
  );
}

export default RecipeResult;
