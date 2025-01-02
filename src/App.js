import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // New footer component
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      {/* Global Background */}
      <div className="background"></div>

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div className="sections">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
