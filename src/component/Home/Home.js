import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Services from "../Service/Services";
import Footer from "../Footer/Footer";
import App from "../../App";

const Home = () => {
  return (
    <>
      <Navbar />
     
      <About />
      <Services />
     
      <Footer />
    </>
  );
};

export default Home;