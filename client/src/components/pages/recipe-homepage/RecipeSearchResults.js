import React, { useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import './RecipeApp.css'

function RecipeSearchResults() {
  const myStyles = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div>
      {/* eventually spread out other recipes */}

      <RecipeCard />
    </div>
  );
}

export default RecipeSearchResults;
