import React, { useState, useEffect } from "react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import YoutubeVideo from "./YoutubeVideo";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import QRCode from "qrcode.react"
import "./RecipeResults.css";

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

  const {
    ingredients,
    instructions,
    _id,
    name,
    servings,
    image,
    youTube_Url,
  } = recipe;


//variable to check if youTUbe video is available--> for if/else statement
  const youTube = recipe.youTube_Url 

  // const {topicTag, servingSize, nutritionFacts, ingredients, videoUrl} = this.props;//assuming that we can get this from consuming APIs
  //do we need to map out the ingredients
  return (
    <Jumbotron className="jumbo">
      <div className="recipe-card">
        <h1 className="recipe-name">{name}</h1>
        <span className="serving-size">Servings: {servings}</span>
        <div className="img-repo">
          <img className="recipe-img" src={image} alt={`${name}`}></img>
        </div>
        <div className="recipe-card-content">
          <Ingredients ingredients={ingredients} recipe_id={_id} />
          <Instructions instructions={instructions} recipe_id={_id} />
          <p className="p-ctfb">
            Recipes are provided by the Central Texas Food Bank in accordance
            with the Healthy Pantry Initiative Program.
          </p>
        </div>
        <div className="container">
        {youTube 
        ? <YoutubeVideo video={youTube} />
        : <p className="p-noVideo">Cooking demonstration video coming soon!</p>
        }
        </div>

        <QRCode value={window.location.href} />
      </div>
    </Jumbotron>
  );
}

export default RecipeResult;
