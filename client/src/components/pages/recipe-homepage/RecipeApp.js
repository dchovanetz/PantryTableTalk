import React, {useState} from "react";
import axios from 'axios'
import RecipeImg from './RecipeImg'









const RecipeApp = () => {

  const initialState = {
    ingredients: []
  }

  const [formData, setFormData] = useState(initialState)

  const resetFields = () => {
    setFormData(initialState)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()

    axios.post('/test', formData)
    .then(response => {
      console.log('Ingredients: ', response.data.recipe.ingredients)
      let ingredients = response.data.recipe.ingredients
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
      <div>
        < RecipeImg />
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="ingredients">Search:  </label>
          <input type="text" placeholder="Enter ingredients" name="ingredients" id="ingredients" value={ingredients} onChange={handleChange} />
          <button type="submit">SUBMIT</button>
          <button type='reset' onClick={resetFields}>RESET</button>
        </form>
      </div>

      <div>
  {}
      </div>
{ingredientsList}
    </div>



  )
}


export default RecipeApp;
