import React, { useState } from "react";
import axios from "axios";
import RecipeImg from "./RecipeImg";


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




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ingredients">Submit  a URL to make new recipe: </label>
        <input
          type="text"
          placeholder="Recipe URL"
          name="recipe"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default RecipeMaker;
