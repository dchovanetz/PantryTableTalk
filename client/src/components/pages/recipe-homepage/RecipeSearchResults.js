import React, { useState } from "react";
import axios from "axios";
import RecipeImg from "./RecipeImg";

function RecipeSearchResults() {
  const myStyles = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div>
      {/* eventually spread out other recipes */}

      <RecipeImg />
    </div>
  );
}

export default RecipeSearchResults;
