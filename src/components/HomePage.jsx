// import React, { useEffect } from "react";
// import Servier1 from "../assets/images/Scenography/Servier/Servier1.jpg";
// import GreenPepper from "../assets/images/Product Design/Green Pepper/1.jpg";
// import DigitalPainting from "../assets/images/Digital Painting/3.jpg";
// import CharacterDesign from "../assets/images/Character Design/1.jpg";
// import Character from "../assets/images/Character Design/0.jpg";
// import SITMT from "../assets/images/SITMT/ALEX_David_246D_Page_11.jpg";
// import WebDev from "../assets/images/Web Development/Peters/1.jpg";

// import "./style/HomePageStyle.css";

// const Homepage = () => {
//   useEffect(() => {
//     const handleLinkClick = (event) => {
//       event.preventDefault();

//       const sectionsToFade = document.querySelectorAll(
//         "section:not(:first-child)"
//       );
//       const header = document.querySelector("nav");
//       const name = document.querySelector(".name");

//       sectionsToFade.forEach((section) => {
//         section.classList.add("fade-to-black");
//       });

//       header.style.opacity = "0";
//       name.style.animation = "fade-out-name 1.5s forwards 1s";

//       setTimeout(() => {
//         window.location.href = event.target.href;
//       }, 1000);
//     };

//     const links = document.querySelectorAll("a");
//     links.forEach((link) => {
//       link.addEventListener("click", handleLinkClick);
//     });

//     return () => {
//       links.forEach((link) => {
//         link.removeEventListener("click", handleLinkClick);
//       });
//     };
//   }, []);

//   return (
//     <div className="body">
//       <header>
//         <nav>
//           <ul>
//             <li>
//               <a href="https://www.artstation.com/davidalex" className="link">
//                 {" "}
//                 My Artstation{" "}
//               </a>
//             </li>

//             <li>
//               <a href="https://www.linkedin.com/in/alexdavidr" className="link">
//                 {" "}
//                 My Linkdin{" "}
//               </a>
//             </li>
//           </ul>
//           <ul>
//             <li className="name">David Alex</li>
//           </ul>
//           <ul>
//             <li>
//               <a href="#" className="cta">
//                 {" "}
//                 Contact me{" "}
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <section>
//         <article className="hero">
//           <ul className="panels">
//             <li className="panel">
//               <a href="./set_design.html">
//                 <span> Sets </span>
//               </a>
//               <img src={Servier1} alt="Set Design" />
//             </li>
//             <li className="panel">
//               <a href="../product_design.html">
//                 <span> Designs </span>
//               </a>
//               <img src={GreenPepper} alt="Product Design" />
//             </li>
//             <li className="panel">
//               <a href="./Painting.html">
//                 <span> Paintings </span>
//               </a>
//               <img src={DigitalPainting} alt="Paintings" />
//             </li>
//             <li className="panel">
//               <a href="../persona_concept.html">
//                 <span> Concepts </span>
//               </a>
//               <img src={CharacterDesign} alt="Persona Concepts" />
//             </li>
//             <li className="panel">
//               <a href="./characters.html">
//                 <span> Persona </span>
//               </a>
//               <img src={Character} alt="Characters" />
//             </li>
//             <li className="panel">
//               <a href="./sitmt.html">
//                 <span> Refuge </span>
//               </a>
//               <img src={SITMT} alt="SITMT" />
//             </li>
//             <li class="panel">
//               <a href="./webdev.html">
//                 <span> WebDev </span>
//               </a>
//               <img src={WebDev} alt="webdevelopment" />
//             </li>
//           </ul>
//           <h1>
//             <span className="gradient-text letter">p</span>
//             <span className="gradient-text letter">o</span>
//             <span className="gradient-text letter">r</span>
//             <span className="gradient-text letter">t</span>
//             <span className="gradient-text letter">f</span>
//             <span className="gradient-text letter">o</span>
//             <span className="gradient-text letter">l</span>
//             <span className="gradient-text letter">i</span>
//             <span className="gradient-text letter">o</span>
//           </h1>
//         </article>
//       </section>
//     </div>
//   );
// };

// export default Homepage;
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Servier1 from "../assets/images/Scenography/Servier/Servier1.jpg";
import GreenPepper from "../assets/images/Product Design/Green Pepper/1.jpg";
import DigitalPainting from "../assets/images/Digital Painting/3.jpg";
import CharacterDesign from "../assets/images/Character Design/1.jpg";
import Character from "../assets/images/Character Design/0.jpg";
import SITMT from "../assets/images/SITMT/ALEX_David_246D_Page_11.jpg";
import WebDev from "../assets/images/Web Development/Peters/1.jpg";

import "./style/HomePageStyle.css";

const Homepage = () => {
  return (
    <div className="body">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/artstation" className="link">
                My Artstation
              </Link>
            </li>

            <li>
              <Link to="/linkedin" className="link">
                My Linkedin
              </Link>
            </li>
          </ul>
          <ul>
            <li className="name">David Alex</li>
          </ul>
          <ul>
            <li>
              <Link to="/contact" className="cta">
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <article className="hero">
          <ul className="panels">
            <li className="panel">
              <Link to="/sets">
                <span> Sets </span>
              </Link>
              <img src={Servier1} alt="Set Design" />
            </li>
            {/* Add similar Link components for other sections */}
          </ul>
          <h1>
            <span className="gradient-text letter">p</span>
            <span className="gradient-text letter">o</span>
            <span className="gradient-text letter">r</span>
            <span className="gradient-text letter">t</span>
            <span className="gradient-text letter">f</span>
            <span className="gradient-text letter">o</span>
            <span className="gradient-text letter">l</span>
            <span className="gradient-text letter">i</span>
            <span className="gradient-text letter">o</span>
          </h1>
        </article>
      </section>
    </div>
  );
};
export default Homepage;
