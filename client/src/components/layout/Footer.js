import React from 'react';
import './Footer.css'


function Footer () {
    return (
        <div className="footerComponent" width="100%">
        <div class="row">
            <div id="greenLine" class="col-sm"></div>
            <div id="blueLine" class="col-sm"></div>
            <div id="goldLine" class="col-sm"></div>
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