import React from "react";
import "./App.css";
import About from "./Components/About";
import GitHub from "./Components/Github";
import Hero from "./Components/Hero";
import Lecturer from "./Components/Lecturer";
import Navbar from "./Components/Navbar";
import Qoutes from "./Components/Qoutes";
import LogosSkills from "./Components/LogosSkills";
import Banner from "./Components/Banner";
import Whatsapp from "./Components/WhatsApp";
import Cv from "./Components/Cv";
function App() {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Lecturer />
      <LogosSkills />
      <div className="mb-10"><Cv /></div>
      <GitHub />
      <Qoutes />
      <Banner />
      <Whatsapp />
    </div>
  );
}

export default App;
