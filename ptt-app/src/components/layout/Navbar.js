import React, { Component } from 'react';
import banner from '../../assets/banner-img.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RecipeApp from '../pages/recipe-homepage/RecipeApp';
import LoginApp from '../pages/login-page/LoginApp';


class Navbar extends Component {
        render(){
        return (
          <Router>
            <div className="navbarComponent" width="100%">
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.bastropfoodpantry.org/">BASTROP COUNTY FOOD PANTRY</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="/">RECIPES</Link>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="https://www.bastropfoodpantry.org/contact/">CONTACT US</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="/login">LOGIN</Link>
                        </li>
                    </ul>
                </nav>
                <img src={banner} alt="Bastrop County Food Pantry Banner" width="100%" height="15%"/>
            </div>
            <Route path="/" component= { RecipeApp } />
            <Route path="/login" component= { LoginApp } />
          </Router>
            )    
    }
}

export default Navbar