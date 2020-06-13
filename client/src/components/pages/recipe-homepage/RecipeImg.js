import React from "react";

//Title, img
function RecipeImg() {
  const { title, img } = this.props;
  return (
    <div className="recipe-image-card">
      <h4 className="recipe-title">{title}</h4>
      <img className="recipe-img" src={img} alt={title} />
    </div>
  );
}

export default RecipeImg;
