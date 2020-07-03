import React, { useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";


const RecipeMaker = () => {
  const initialState = {
    ingredients: [],
  };

  const [formData, setFormData] = useState(initialState);

  const resetFields = () => {
    setFormData(initialState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/scrapeRecipe", formData)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.log("Error: ", err));
  
  };

  const makerStyles = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "Center",
    width: "500px"
  }


  return (
    <div >
      <h1>Make a new Recipe Here!</h1>
      <form onSubmit={handleSubmit} style={makerStyles}>
        
        <label htmlFor="ingredients">Submit  a URL to make new recipe: </label>
        <input
          type="text"
          placeholder="Recipe URL"
          name="recipe"
        />
        <label htmlFor="ingredients">Please add a YouTube URL if it applies </label>
        <input
          type="text"
          placeholder="YouTube URL"
          name="youtube"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default RecipeMaker;
