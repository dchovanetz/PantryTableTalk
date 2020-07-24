import React from "react";
import banner from "../../assets/heading.png";
import logo from "../../assets/pantry-logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar2 from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
<div>
  <Navbar2 collapseOnSelect expand="md" bg="dark" variant="dark">
    <Navbar2.Brand href="https://www.bastropfoodpantry.org/">
      <img  onClick={() => {
                  alert("You are leaving website.")
                  }}
                
              className="top_logo"
              src={logo}
              alt="Bastrop County Food Pantry Logo"
          />
      </Navbar2.Brand>
      <Navbar2.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar2.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto navdiv">
          <Nav.Link href="/">RECIPES</Nav.Link>
          <Nav.Link href="/shoppinglist">SHOPPING LIST</Nav.Link>
          <Nav.Link href="https://www.bastropfoodpantry.org/contact/" 
            onClick={() => {
              alert("You are leaving website.")
            }
            }
          >CONTACT & LOCATION</Nav.Link>
        </Nav>
      </Navbar2.Collapse>
  </Navbar2>

  <img className = 'imgbanner'
        src={banner}
        alt="Bastrop County Food Pantry Banner"
        width="100%"
        height="15%"
      />
  </div>

  );
}

export default Navbar;
