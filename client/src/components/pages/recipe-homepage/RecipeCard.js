import React from "react";
import { Link } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
// import CardGroup from "react-bootstrap/CardGroup";
import "./RecipeCard.css";
// import {Row, Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'


//axios call

//Title, img
function RecipeCard(props) {
  return (
    <div className='column'>
    

  {/* <Row> */}
    <div className='size'>
          <Link to={`/recipes/${props.id}`}>
            <img className='imgClass' src={props.image} alt = 'recipe images'
            />
         
          <h3 className='text'>
            {props.title}
          </h3>
          </Link>
    </div>
  {/* </Row> */}


    </div>
  );
}

export default RecipeCard;