import React, { useState } from 'react'
import ListItem from './listItem'
import Ingredients from '../recipe-result/ingredients'

const ListDisplay = (props) => {
  //Displays the list of items in the shopping list--> a stateless functional component that just accepts a prop and renders it into a list element.
  const items = props.items.map((item, i) => (
    <ListItem
      key={i}
      name={item}
    />
  ))
    return (
      <div id="list-container">
      <ListDisplay items={items}/>
    </div>
    )
  }