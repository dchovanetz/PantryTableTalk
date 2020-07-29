import React from "react";

function Instructions(props) {

  return (
    <div className="div-instructions">
        <h2 className="instructions">Instructions:</h2>
        <ol className="ol-instructions">
          {props.instructions.map((instruction, i) => 
            <li className="li-instructions" key={"inst" + i + props._id}>{instruction}</li>
          )}
        </ol>
        </div>
  );
}

export default Instructions;
