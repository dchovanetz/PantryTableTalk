import React, { useState } from "react";
import axios from "axios";
import RecipeImg from "./RecipeImg";
import './RecipeApp.css'

function RecipeSearchResults() {

  //create axios call to get stuff from data base

  



  const myStyles = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div>
      {/* eventually spread out other recipes */}
      {/* Right now, there are  */}
      <RecipeImg />
    </div>
  );
}

export default RecipeSearchResults;
