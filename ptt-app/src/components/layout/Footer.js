import React from 'react';
import banner from '../../assets/banner-img.png';
import logo from '../../assets/pantry-logo.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RecipeApp from '../pages/recipe-homepage/RecipeApp';
import './Footer.css'


function Footer () {
    return (
      <Router>
        <div className="footerComponent" width="100%">
            <nav id= "footer" className="navbar navbar-dark bg-dark text-light sticky-bottom">
                <ul id="footer-list" className="nav">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.bastropfoodpantry.org/services/">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.bastropfoodpantry.org/our-story/">Our Story</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.bastropfoodpantry.org/events/">Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.bastropfoodpantry.org/contact/">Contact & Location</a>
                    </li>
                </ul>
            </nav>
        </div>
      </Router>
        )    
}


export default Footer