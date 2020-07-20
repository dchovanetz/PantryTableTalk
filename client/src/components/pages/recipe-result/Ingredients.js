import React, { useState, useEffect } from "react";

function Ingredients(props) {
 
//   //when box is checked set value to the name on input--> how does checked work
//   const handleChecked = (e) => {
//     console.log(e.target.checked);
//     setIngState({ check: e.target.checked }); //code breaks here
//   };




  return (
    <div>
      <h2>Ingredients: </h2>
        <ul>
          {props.ingredients.map((ingredient, i) => (<li key={"ing" + i + props.recipe_id}>{ingredient}</li>))}
        </ul>
    </div>
  );
}

export default Ingredients;
