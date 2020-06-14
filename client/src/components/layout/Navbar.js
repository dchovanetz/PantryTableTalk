<<<<<<< HEAD
import React from 'react';
import banner from '../../assets/banner-img.png';
import logo from '../../assets/pantry-logo.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RecipeApp from '../pages/recipe-homepage/RecipeApp';
import './Navbar.css'

function Navbar () {
        return (
          <Router>
            <div className="navbarComponent" width="100%">
                <nav className="navbar navbar-dark bg-dark text-light">
                    <a className="navbar-brand" href="https://www.bastropfoodpantry.org/">
                    <img id="navbar-logo" src={logo} alt="Bastrop County Food Pantry Logo" />
                    </a>
                    <ul className="nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="https://www.bastropfoodpantry.org/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to ="/recipe">RECIPES</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="https://www.bastropfoodpantry.org/contact/">CONTACT & LOCATION</a>
                        </li>
                    </ul>
                </nav>
                <img src={banner} alt="Bastrop County Food Pantry Banner" width="100%" height="15%"/>
            </div>
            <Route path="/recipe" component= { RecipeApp } />
          </Router>
            )    
    }


export default Navbar
=======
import React, { Component } from "react";
import banner from "../../assets/banner-img.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeApp from "../pages/recipe-homepage/RecipeApp";
// import LoginApp from '../pages/login-page/LoginApp';

function Navbar() {
  return (
    <Router>
      <div className="navbarComponent" width="100%">
        <nav className="navbar navbar-dark bg-dark">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="https://www.bastropfoodpantry.org/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipe">
                RECIPES
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.bastropfoodpantry.org/contact/"
              >
                CONTACT & LOCATION
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        </nav>
        <img
          src={banner}
          alt="Bastrop County Food Pantry Banner"
          width="100%"
          height="15%"
        />
      </div>
      <Route path="/recipe" component={RecipeApp} />
      {/* <Route path="/login" component= { LoginApp } /> */}
    </Router>
  );
}

export default Navbar;
>>>>>>> jesus_recipesBE