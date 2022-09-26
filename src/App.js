import React from "react";
import Featured from "./components/Featured";
import Mining from "./components/Mining";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AppDown from "./components/AppDown";
import Footer from "./components/Footer";
import Explorer from "./components/Explorer";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Hero />
        <Explorer />
        <Mining />
        <Featured />
        <AppDown />
        <Footer />
      </div>
    </>
  );
}

export default App;
