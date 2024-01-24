import React from "react";
import Navigation from "../nav/Navigation";
import Footer from "../nav/Footer";
import { Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="body" >
      <Navigation />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
