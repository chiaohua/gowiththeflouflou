import React from 'react';
import { Link } from 'react-router-dom'; 
// 👇 1. 引入 HashLink
import { HashLink } from 'react-router-hash-link'; 
import "../sass/scss/nav.scss";

const Nav = () => {
    return (
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
                <Link to="/">flouflou</Link>
            </li>
            <li className="nav-item separator">✦</li>
            
            <li className="nav-item">
                <Link to="/item">Beadery</Link>
            </li>
            
            <li className="nav-item separator">✦</li>
            
            {/* 👇 2. 修改這裡 */}
            <li className="nav-item">
                <HashLink smooth to="/#p4">Our story</HashLink>
            </li>
            
            <li className="nav-item separator">✦</li>
            <li className="nav-item"><Link to="/member">Member</Link></li>
          </ul>
        </nav>
    );
};

export default Nav;