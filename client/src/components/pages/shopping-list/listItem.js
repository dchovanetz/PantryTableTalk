import React, { useState } from 'react'
import Ingredients from '../recipe-result/ingredients'

//A component for each individual list item-- a stateless functional component that just accepts a prop and renders it into a list element.
const ListItem = (props) => (
    <li>{props.name}</li>
  )