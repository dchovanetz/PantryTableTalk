import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import './RecipeCard.css'
import macaroni from '../../../assets/macaroni_cheese2.jpg'
import chicken_tortilla from '../../../assets/chicken_tortilla.jpg'
import kimchi from '../../../assets/kimchi_grilled_cheese.jpg'
import fish from '../../../assets/grilled_fish_tacos.jpg'
// import chili from '../../../assets/chili 2.jpg'
import caesar from '../../../assets/caesar_salad.jpg'

//Title, img
class RecipeCard extends Component {    
    render() {
        return(
<div class='card-deck'>
<CardDeck  className='card-deck' style={{ width: '90rem',}}>

  <Card className='test' style={{margin:'2rem'}}>
    <Card.Img className = 'macaroni' variant="top" src={macaroni} />
    <Card.Body className = 'link'>
    <Card.Link class='link' href="/recipes/recipe-result">Macaroni and Cheese Recipe</Card.Link>
    </Card.Body>
  </Card>

  <Card style={{margin:'2rem'}}>
  <Card.Img className = 'macaroni' variant="top" src={chicken_tortilla} />
    <Card.Body className = 'link'>
    <Card.Link class='link' href="/recipes/recipe-result">Chicken Tortilla Soup Recipe</Card.Link>
    </Card.Body>
  </Card>

  <Card style={{margin:'2rem'}}>
  <Card.Img className = 'macaroni' variant="top" src={kimchi} />
    <Card.Body className = 'link'>
    <Card.Link class='link' href="/recipes/recipe-result">Kimchi Grilled Cheese Recipe</Card.Link>
    </Card.Body>
  </Card>
</CardDeck>

<CardDeck  className='card-deck2' style={{ width: '90rem',}}>
  <Card style={{margin:'2rem'}}>
    <Card.Img className = 'macaroni' variant="top" src={fish} />
    <Card.Body className = 'link'>
    <Card.Link class='link' href="/recipes/recipe-result">Fish Tacos Recipe</Card.Link>
    </Card.Body>
  </Card>

  <Card class='test1' style={{margin:'2rem'}}>
  <Card.Img className = 'macaroni' variant="top" src={fish} />
    <Card.Body className = 'link'>
    <Card.Link class='link' href="/recipes/recipe-result">Chili Recipe</Card.Link>
    </Card.Body>
  </Card>

  <Card style={{margin:'2rem'}}>
  <Card.Img className = 'macaroni' variant="top" src={caesar} />
    <Card.Body className = 'link'>
    <Card.Link class='link' href="/recipes/recipe-result">Grilled Chicken Caesar Salad Recipe</Card.Link>
    </Card.Body>
  </Card>
</CardDeck>

</div>




        )
    }
}

export default RecipeCard;










