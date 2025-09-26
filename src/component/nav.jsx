
import React from 'react'; // Make sure to import React
import "../sass/scss/nav.scss";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#p1">flouflou</a></li>
            <li className="nav-item separator">✦</li>
            <li className="nav-item"><a href="#p2">Beadery</a></li>
            <li className="nav-item separator">✦</li>
            <li className="nav-item"><a href="#p4">Our story</a></li>
            <li className="nav-item separator">✦</li>
            <li className="nav-item"><a href="#">Member</a></li>
          </ul>
        </nav>
    );
};

export default Nav;