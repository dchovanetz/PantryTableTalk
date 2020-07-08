import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import './RecipeCard.css'
import macaroni from '../../../assets/macaroni_cheese2.jpg'
// import chicken_tortilla from '../../../assets/chicken_tortilla.jpg'
// import kimchi from '../../../assets/kimchi_grilled_cheese.jpg'
// import fish from '../../../assets/grilled_fish_tacos.jpg'
// // import chili from '../../../assets/chili.jpg'
// import caesar from '../../../assets/caesar_salad.jpg'

//axios call

//Title, img
class RecipeCard extends Component {    
    render() {
        return(
/*{ <div className='card-deck'>
<CardDeck  className='card-deck' style={{ width: '90rem',}}>

  <Card className='test' style={{margin:'2rem'}}>
    <Card.Img className = 'macaroni' variant="top" src={macaroni} />
    <Card.Body className = 'link'>
    <Card.Link className='link' href="/recipes/recipe-result">Macaroni and Cheese Recipe</Card.Link>
    </Card.Body>
  </Card>

  <Card style={{margin:'2rem'}}>
  <Card.Img className = 'macaroni' variant="top" src={chicken_tortilla} />
    <Card.Body className = 'link'>
    <Card.Link className='link' href="/recipes/recipe-result">Chicken Tortilla Soup Recipe</Card.Link>
    </Card.Body>
  </Card>

  <Card style={{margin:'2rem'}}>
  <Card.Img className = 'macaroni' variant="top" src={kimchi} />
    <Card.Body className = 'link'>
    <Card.Link className='link' href="/recipes/recipe-result">Kimchi Grilled Cheese Recipe</Card.Link>
    </Card.Body>
  </Card>
</CardDeck>

<CardDeck  className='card-deck2' style={{ width: '90rem',}}>
  <Card style={{margin:'2rem'}}>
    <Card.Img className = 'macaroni' variant="top" src={fish} />
    <Card.Body className = 'link'>
    <Card.Link className='link' href="/recipes/recipe-result">Fish Tacos Recipe</Card.Link>
    </Card.Body>
  </Card> }*/

  /* {<Card className='test1' style={{margin:'2rem'}}>
  <Card.Img className = 'macaroni' variant="top" src={chili} />
    <Card.Body className = 'link'>
    <Card.Link className='link' href="/recipes/recipe-result">Chili Recipe</Card.Link>
    </Card.Body>
  </Card> }*/

//   <Card style={{margin:'2rem'}}>
//   <Card.Img className = 'macaroni' variant="top" src={caesar} />
//     <Card.Body className = 'link'>
//     <Card.Link className='link' href="/recipes/recipe-result">Grilled Chicken Caesar Salad Recipe</Card.Link>
//     </Card.Body>
//   </Card>
// </CardDeck>

// </div>
<div>
  <form action='/'>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={macaroni} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</form>

</div>
        )
    }
}

export default RecipeCard;










