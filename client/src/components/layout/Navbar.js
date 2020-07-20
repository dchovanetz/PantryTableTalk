import React from "react";
import banner from "../../assets/heading.png";
import logo from "../../assets/pantry-logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbarComponent" width="100%">
      <nav className="navbar navbar-dark bg-dark text-light">
        <a className="navbar-brand" href="https://www.bastropfoodpantry.org/">
          <img
            className="top_logo"
            src={logo}
            alt="Bastrop County Food Pantry Logo"
          />
        </a>

        <ul className="nav mr-auto">
          {/* <li className="nav-item">
                            <a className="nav-link text-white" href="https://www.bastropfoodpantry.org/">HOME</a>
                        </li> */}
          <li className="nav-item">
            <Link className="nav-link text-white" to="/recipes">
              RECIPES
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/shoppinglist">
              SHOPPING LIST
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-white"
              href="https://www.bastropfoodpantry.org/contact/"
            >
              CONTACT & LOCATION
            </a>
          </li>
        </ul>
      </nav>
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
