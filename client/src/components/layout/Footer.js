import React from 'react';
import './Footer.css'


function Footer () {
    return (
        <div className="footerComponent" width="100%">
        <div className="row" >
            <div id="greenLine" className="col-sm"></div>
            <div id="blueLine" className="col-sm"></div>
            <div id="goldLine" className="col-sm"></div>
        </div>
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
        )    
}


export default Footer