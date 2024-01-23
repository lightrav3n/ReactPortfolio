import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

import "../style/FooterStyle.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="foot">
        <ul>
          <li>
            <a href="https://www.artstation.com/davidalex" className="link">
              <i className="fa-brands fa-artstation"></i> Artstation
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexdavidr" className="link">
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <Link to="/contact.html" className="cta">
              <i className="fa-solid fa-address-book"></i> Contact
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/set_design.html">Set Design</Link>
          </li>
          <li>
            <Link to="/product_design.html">Product Design</Link>
          </li>
          <li>
            <Link to="/painting.html">Digital Painting</Link>
          </li>
          <li>
            <Link to="/persona_concept.html">Persona Concept</Link>
          </li>
          <li>
            <Link to="/characters.html">Characters</Link>
          </li>
          <li>
            <Link to="/sitmt.html">Mountain Shelter</Link>
          </li>
          <li>
            <Link to="/webdev.html">Web Development</Link>
          </li>
        </ul>
        <div className="right">
          <ul>
            <ul>
              <li>
                <b>© David Alex 2023</b>
              </li>
              <li>All rights reserved</li>
            </ul>
          </ul>
          <ul>
            <li>
              <img src={logo} alt="logo" />
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
