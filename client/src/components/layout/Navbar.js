import React from 'react';
import banner from '../../assets/banner-img.png';
import logo from '../../assets/pantry-logo.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
                        <Link className="nav-link text-white" to="/recipes">RECIPES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/shoppinglist">SHOPPING LIST</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">CONTACT & LOCATION</a>
                        </li>
                    </ul>
                </nav>
                <img src={banner} alt="Bastrop County Food Pantry Banner" width="100%" height="15%"/>
            </div>
          </Router>
            )    
    }


export default Navbar
