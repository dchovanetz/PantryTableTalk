import React from 'react';
import './Footer.css'


function Footer() {
    return (
        <div className="footerComponent">
            <div className="row line" >
                <div id="greenLine" className="col-md-4"></div>
                <div id="blueLine" className="col-md-4"></div>
                <div id="goldLine" className="col-md-4"></div>
            </div>
            <nav id="footer" className="navbar navbar-dark bg-dark text-light sticky-bottom">
                <ul id="footer-list" className="nav">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.bastropfoodpantry.org/services/" onClick={() => {
                            alert("You are leaving website.")
                        }}
                        >Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.bastropfoodpantry.org/our-story/" onClick={() => {
                            alert("You are leaving website.")
                        }}
                        >Our Story</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.bastropfoodpantry.org/events/" onClick={() => {
                            alert("You are leaving website.")
                        }}
                        >Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://www.bastropfoodpantry.org/contact/" onClick={() => {
                            alert("You are leaving website.")
                        }}
                        >Contact & Location</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default Footer