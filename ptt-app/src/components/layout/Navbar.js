import React, { Component } from 'react';
import banner from '../../assets/banner-img.png'


class Navbar extends Component {
        render(){
        return (
            <div className="navbarComponent" width="100%">
                <nav className="navbar navbar-dark bg-dark">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.bastropfoodpantry.org/">BASTROP COUNTY FOOD PANTRY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">RECIPES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.bastropfoodpantry.org/contact/">CONTACT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login" tabindex="-1" aria-disabled="true">LOGIN</a>
                        </li>
                    </ul>
                </nav>
                <img src={banner} alt="Bastrop County Food Pantry Banner" width="100%" height="15%"/>
            </div>

            )    
    }
}

export default Navbar