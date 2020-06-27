import React, { useState } from "react";
import axios from "axios";
import RecipeImg from "./RecipeImg";

function RecipeSearchResults() {
  const myStyles = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div style={myStyles}>
      {/* eventually spread out other recipes */}

      <RecipeImg />
      <RecipeImg />
      <RecipeImg />
    </div>
  );
}

export default RecipeSearchResults;
