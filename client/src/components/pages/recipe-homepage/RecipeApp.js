import React, {useState} from "react";
import axios from 'axios'

const RecipeApp = () => {

  const initialState = {
    ingredients: ""
  }

  const [formData, setFormData] = useState(initialState)

  const resetFields = () => {
    setFormData(initialState)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post('/test', formData)
    .then(response => console.log('Response data: ', response.data))
    .catch(err => console.log('Error: ', err))
    resetFields()
  }

  const handleChange = (event)=>{
    setFormData({
        ...formData,
        [event.target.name] : event.target.value
    })
  }

  let {ingredients} = formData;
  
  return(
    <div>
    <div>
        <h1>This is the recipe homepage</h1>
    </div>

      <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Search:  </label>
        <input type="text" placeholder="Enter ingredients" name="ingredients" id="ingredients" value={ingredients} onChange={handleChange} />
        <button type="submit">SUBMIT</button>
        <button type='reset' onClick={resetFields}>RESET</button>
       </form>
    </div>
    </div>
  )
  }


export default RecipeApp;
