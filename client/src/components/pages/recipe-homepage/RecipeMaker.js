import React from "react";
import axios from "axios";

const RecipeMaker = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    //url will be obtained through the form eventually

    //API route to POST
    let url = "http://localhost:5000/api/recipes/recipeMaker";
    //where we'll get the recipe URL from the form

    //need checks to see if input is valid
    //does it have centraltexasfoodbank domain?
    //is it a string?

    axios
      .post(url, {
        recipeUrl: event.target.recipeInput.value,
        youtubeUrl: event.target.youtubeInput.value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log("Error: ", err));
  };

  const makerStyles = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "Center",
    width: "500px",
  };

  return (
    <div>
      <h1>Make a new Recipe Here!</h1>
      <form
        onSubmit={handleSubmit}
        style={makerStyles}
        action="/recipeMaker"
        method="post"
      >
        <label htmlFor="ingredients">Submit a URL to make new recipe: </label>
        <input
          type="text"
          placeholder="Recipe URL"
          name="recipe"
          id="recipeInput"
        />
        <label htmlFor="ingredients">
          Please add a YouTube URL if it applies{" "}
        </label>
        <input
          type="text"
          placeholder="YouTube URL"
          name="youtube"
          id="youtubeInput"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default RecipeMaker;
