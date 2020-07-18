import React, { useState, useEffect } from 'react'




function FakeIngredients (props) {
  //need to set state to checked: false and display: n--> is this the initial state
  const [ingState, setIngState] = useState([]);

  useEffect(()=> {
    let ingState = [
      {name: 'Broccoli', check: false, dispaly: true, id:1},
      {name: 'Carrots', check: false, dispaly: true, id:2},
      {name: 'Salt', check: false, dispaly: true, id:3}
    ];
    setIngState(ingState)
  }, [])

  //when box is checked set value to the name on input
  const handleChecked = e => {
    console.log(e.target.checked)
    console.log(e.target.name)
    setIngState({ ...ingState, check: e.target.checked}) //code breaks here
    console.log({check: e.target.checked})
  }
  return (
    <div>
      <form>
        <ul>
        {ingState.map( i => (
          <li key={i.id}>
          <label>
          <input type='checkbox' checked={i.check} name={i.name} onChange={handleChecked}></input>
          {i.name}
          </label>
          </li>
        ))}
      </ul>
      </form>
    </div>
  )
}


//ignore below code for now
function ShoppingList (props) {
//intitial state is an empty array or ingredient list with checked: false
const [items, setItems] = useState([
  "Pepper", "Olive Oil"
]);

return (
  <div id="list-container">
    <ListDisplay items={items}/>
    {/* <InputText handleSubmit={(item) => {
        setItems(items.concat(item));
      }}
    /> */}
    < FakeIngredients/>
  </div>
)
}
const ListItem = (props) => (
<li>{props.name}</li>
)
const ListDisplay = (props) => {
const items = props.items.map((item, i) => (
  <ListItem
    key={i}
    name={item}
  />
))
return (
  <ul>
    {items}
  </ul>
)
}


  


export default ShoppingList