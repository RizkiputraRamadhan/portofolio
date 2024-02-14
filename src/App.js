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
      <div className="mb-10">
        <Cv />
      </div>
      <GitHub />
      <Qoutes />
     
      <Banner />
      <Whatsapp />
      <script type='text/javascript' src='//pl22497948.profitablegatecpm.com/01/e8/9e/01e89ec3b8f81c15396e60b8b1230c0b.js'></script>
    </div>
  );
}

export default App;
