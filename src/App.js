import React from "react";
import "./App.css";
import About from "./Components/About";
import GitHub from "./Components/Github";
import Hero from "./Components/Hero";
import Lecturer from "./Components/Lecturer";
import Navbar from "./Components/Navbar";
import Qoutes from "./Components/Qoutes";
import Skils from "./Components/Skils";
import Banner from "./Components/Banner";
import Whatsapp from "./Components/WhatsApp";
function App() {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Lecturer />
      <Skils />
      <GitHub />
      <Qoutes />
      <Banner />
      <Whatsapp />
    </div>
  );
}

export default App;
