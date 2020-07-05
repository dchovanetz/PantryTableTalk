import React, {useState} from "react";
import axios from 'axios'
import './RecipeSearch.css'


const RecipeSearch = () => {

  // const initialState = {
  //   ingredients: []
  // }

  const [formData, setFormData] = useState([])

  const resetFields = () => {
    setFormData([])
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log('function fired')
    const ingredientsList = []
    axios.get('/test')
    .then(response => {
      console.log('made it here')
      // console.log('Ingredients: ', response.data.recipe.ingredients)
      let ingredients = response.data.ingredients
      console.log(ingredients)
      ingredients.forEach(ingredient => {
        const ingredientItem = <li>{ingredient}</li>
        ingredientsList.push(ingredientItem)
      })
      setFormData(ingredientsList)
      // console.log(ingredientsList)
      // let displayData = formData.map(el => {
      //   return <li>el.ingredients</li>
      // })
      }
    )      
    .catch(err => console.log('Error: ', err))
  }
      
  //   axios.post('/test', formData)
  //   .then(response => 
  //       console.log('Instructions: ', response.data.recipe.instructions))
  //   .catch(err => console.log('Error: ', err))
  //   resetFields()
  // }


  const handleChange = (event)=>{
    setFormData({
        ...formData,
        [event.target.name] : event.target.value
    })}

  // let {ingredients} = formData;
  
  // let displayData = formData.map(el => {
  //   return <li>el.ingredients</li>
  // })

  return(
    <div>
      <form className='form' onSubmit={handleSubmit} >
        <label className='test1' htmlFor="ingredients">Search:  </label>
        <input className='test' type="text" placeholder="Enter ingredients" name="ingredients" id="ingredients" 
        // value={ingredients} 
        onChange={handleChange} />
        <button className='btn1' type="submit">SUBMIT</button>
        <button className='btn1' type='reset' onClick={resetFields}>RESET</button>
      </form>
      <h1>Ingredients:
      <ul>
      { formData.map(el => el) }
      </ul>
      </h1>
    </div>
)
}


export default RecipeSearch;
