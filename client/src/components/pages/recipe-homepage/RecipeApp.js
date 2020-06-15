import React, {useState} from "react";
import axios from 'axios'

function App() (

  const initialState = {
    ingredients: ""

  }

  const [formData, setFormData] = useState(initialState)

  const resetFields = () => {
    setFormData(initialState)
  }


  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post('/new', formData)
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
  
  return (
    <div>
    <div>
        <h1>This is the recipe homepage</h1>
    </div>
    <div>
    <input placeholder="Enter ingredients"></input>
    <button>Submit</button>
    </div>
    </div>
  )
)


export default RecipeApp;
