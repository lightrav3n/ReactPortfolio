import React from "react";
import { Link } from "react-router-dom";

import "../style/NavigationStyle.css";
import HomeIcon from "../../assets/icons/home.png";


class Navigation extends React.Component {
  render() {
    return (
      <header>
        <div className="homeicon">
          <Link to="/">
            <img src={HomeIcon} width="40" alt="home" />
          </Link>
        </div>
        <div className="header">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" id="menu-toggle-label">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <nav id="menu" className="menu">
            <ul>
              <li>
                <Link to="./Sets">Sets</Link>
              </li>
              <li>
                <Link to="/Designs">Designs</Link>
              </li>
              <li>
                <Link to="/Paintings">Paintings</Link>
              </li>
              <li>
                <Link to="/Concepts">Concepts</Link>
              </li>
              <li>
                <Link to="/Persona">Persona</Link>
              </li>
              <li>
                <Link to="/Refuge">Refuge</Link>
              </li>
              <li>
                <Link to="/WebDev">WebDev</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-elements">
          <ul>
            <li>
              <a href="https://www.artstation.com/davidalex" className="link">
                Artstation
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alexdavidr" className="link">
                LinkedIn
              </a>
            </li>
            <li>
              <Link to="/Contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navigation;
