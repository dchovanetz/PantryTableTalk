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
<>
<nav className="navbar navbar-expand-md navbar-dark bg-dark text-light">
    <a className="navbar-brand" 
        onClick={() => {
          alert("You are leaving website.")
          }
        }
        href="https://www.bastropfoodpantry.org/">
          <img
            className="top_logo"
            src={logo}
            alt="Bastrop County Food Pantry Logo"
        />
      </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse navdiv" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-link text-white" to="/recipes">
              RECIPES
      </Link>
      <Link className="nav-link text-white" to="/shoppinglist">
              SHOPPING LIST
      </Link>
      <a
              className="nav-link text-white"
              onClick={() => {
                alert("You are leaving website.")
              }
              }
              href="https://www.bastropfoodpantry.org/contact/"
            >
              CONTACT & LOCATION
            </a>
    </div>
  </div>
</nav>

  <br />
  <br />
  <br />

  <Navbar2 bg="dark" variant="dark">
    <Navbar2.Brand href="https://www.bastropfoodpantry.org/">
    <img  onClick={() => {
                alert("You are leaving website.")
                }}
              
            className="top_logo"
            src={logo}
            alt="Bastrop County Food Pantry Logo"
        />
    </Navbar2.Brand>
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
  </Navbar2>
    </>
  );
}

export default Navbar;
