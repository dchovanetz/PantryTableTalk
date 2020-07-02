import React, {useState} from "react";
import axios from 'axios'
import RecipeCard from './RecipeCard'
import './RecipeSearch.css'


const RecipeSearch = () => {

  const initialState = {
    ingredients: []
  }

  const [formData, setFormData] = useState(initialState)

  const resetFields = () => {
    setFormData(initialState)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()

    axios.get('/test', formData)
    .then(response => {
      console.log('Ingredients: ', response.data.recipe.name)
      let ingredients = response.data.recipe.name
      console.log(ingredients)
      ingredients.forEach(ingredient => {
        const ingredientItem = <h1>{ingredient}</h1>
        ingredientsList.push(ingredientItem)
        console.log(ingredientsList)
      })
      // setFormData(ingredientsList)
      console.log(formData) //returns an empty array
      let displayData = formData.map(el => {
        return <li>el.ingredients</li>
      })
      
      }
    )      
    .catch(err => console.log('Error: ', err))
    resetFields()
  }
      
  //   axios.post('/test', formData)
  //   .then(response => 
  //       console.log('Instructions: ', response.data.recipe.instructions))
  //   .catch(err => console.log('Error: ', err))
  //   resetFields()
  // }

  const ingredientsList = []

  const handleChange = (event)=>{
    setFormData({
        ...formData,
        [event.target.name] : event.target.value
    })}

  let {ingredients} = formData;
  

  return(
      <div>
        <form className='form' onSubmit={handleSubmit} >
          <label className='test1' htmlFor="ingredients">Search:  </label>
          <input className='test' type="text" placeholder="Enter ingredients" name="ingredients" id="ingredients" value={ingredients} onChange={handleChange} />
          <button className='btn1' type="submit">SUBMIT</button>
          <button className='btn1' type='reset' onClick={resetFields}>RESET</button>
        </form>
      </div>
  )
}


export default RecipeSearch;
