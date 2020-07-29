import React, { useState } from "react";
import axios from "axios";
import "./RecipeSearch.css";

const RecipeSearch = () => {
 

  const [formData, setFormData] = useState([]);

  const resetFields = () => {
    setFormData([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search submitted!");
  
  };



  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // let {ingredients} = formData;

  // let displayData = formData.map(el => {
  //   return <li>el.ingredients</li>
  // })

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="test1" htmlFor="ingredients">
        Search:
      </label>
      <input
        className="test"
        type="text"
        placeholder="Search Recipes"
        name="ingredients"
        id="ingredients"
        onChange={handleChange}
      />
      <button className="btn1" type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default RecipeSearch;
