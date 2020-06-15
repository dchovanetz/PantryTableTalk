import React, {useState} from "react";
import axios from 'axios'
import "./App.css";

const RecipeApp = () => (
    
    <div>
        <h1>This is the recipe homepage</h1>
    </div>

<form>
  <label for="ingredients">Search by ingredients:</label>
  <input type="text" id="ingredients" name="ingredients">
  <input type="submit" value="Submit">
</form>

)


export default RecipeApp;
