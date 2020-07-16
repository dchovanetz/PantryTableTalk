import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import "./RecipeCard.css";
import macaroni from "../../../assets/macaroni_cheese2.jpg";
import {Row, Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'


//axios call

//Title, img
function RecipeCard(props) {
  return (
    <div className='column'>
      {/* <Container className='grid'>
        <Row>
          
        <Card>
       
           
          <Link to={`/recipes/${props.id}`}>
            <Card.Img variant="top" src={props.image} />
          </Link>
          
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Added on {props.dateAdded}</small>
          </Card.Footer>
         
        </Card>
 
       
        </Row>
        </Container> */}

{/* <Container> */}
  {/* <Row> */}
    <Card>
          <Link to={`/recipes/${props.id}`}>
            <img src={props.image} />
         
          <h3>
            {props.title}
          </h3>
          </Link>
    </Card>
  {/* </Row> */}
{/* </Container> */}

    </div>
  );
}

export default RecipeCard;