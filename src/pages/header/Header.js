import './Header.css';
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="../services/Services.js">Services</Link>
            </li>
            <li>
              <a href="./pages/portfolio/Portfolio.js">Portfolio</a>
            </li>
            <li>
              <a href="../pages/about/About.js">About</a>
            </li>
            <li>
              <a href="../contact/Contact.js">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;