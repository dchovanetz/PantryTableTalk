
import React, { useState } from 'react'
import Ingredients from '../recipe-result/ingredients'


const checkboxTest = (props) => {
    const [items, setItems] = useState([
        "oranges"
      ]);
    return (
      <form>
        <input type="checkbox" /> orange
      </form>
    )
  }