import React from "react";
import Navigation from "../nav/Navigation";
import Footer from "../nav/Footer";
import { Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Portfolio;
