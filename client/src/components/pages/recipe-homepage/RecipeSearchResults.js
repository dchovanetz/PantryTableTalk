import React, { useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import './RecipeSearch.css'

function RecipeSearchResults() {
  return (
    <div>
      {/* eventually spread out other recipes */}

      <RecipeCard />
    </div>
  );
}

export default RecipeSearchResults;
