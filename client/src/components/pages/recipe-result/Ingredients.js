import React from "react";
import './Ingredients.css'

function Ingredients(props) {
 
//   //when box is checked set value to the name on input--> how does checked work
//   const handleChecked = (e) => {
//     console.log(e.target.checked);
//     setIngState({ check: e.target.checked }); //code breaks here
//   };




  return (
    <div className="ingDiv">
      <h2 className="ingredients">Ingredients: </h2>
        <ul className="ingText">
          {props.ingredients.map((ingredient, i) => (<li key={"ing" + i + props.recipe_id}>{ingredient}</li>))}
        </ul>
    </div>
  );
}

export default Ingredients;
