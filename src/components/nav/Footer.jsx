import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { faArtstation, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../style/FooterStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
  render() {
    return (
      <footer className="foot">
        <div className="left">
          <Link to="https://www.artstation.com/davidalex" className="link">
          <FontAwesomeIcon icon={faArtstation} /> Artstation 
          </Link>
          <Link to="https://www.linkedin.com/in/alexdavidr" className="link">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn 
          </Link>{" "}
          <Link to="/Contact" className="link">
          <FontAwesomeIcon icon={faEnvelope} /> Contact 
          </Link>
        </div>{" "}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Sets">Set Design</Link>
          </li>
          <li>
            <Link to="/Designs">Product Design</Link>
          </li>
          <li>
            <Link to="/Paintings">Digital Painting</Link>
          </li>
          <li>
            <Link to="/Concepts">Persona Concept</Link>
          </li>
          <li>
            <Link to="/Characters">Characters</Link>
          </li>
          <li>
            <Link to="/Refuge">Mountain Shelter</Link>
          </li>
          <li>
            <Link to="/WebDev">Web Development</Link>
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
