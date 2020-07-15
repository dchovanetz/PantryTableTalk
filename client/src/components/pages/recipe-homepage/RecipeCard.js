import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import "./RecipeCard.css";
import macaroni from "../../../assets/macaroni_cheese2.jpg";

//Title, img
function RecipeCard(props) {
  return (
    <div>
      <CardGroup>
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
      </CardGroup>
    </div>
  );
}

export default RecipeCard;
