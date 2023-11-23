import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Foot&Nav/Navbar";
import Marque from "./pages/Marque";
import Footer from "./components/Foot&Nav/Footer";
import About from "./pages/About";
import Release from "./pages/Release";
import Artist from "./pages/Artist";

const App = () => {
  return (
    <>
      <div className="h-[400vh]">
        <Hero />
        <About/>
        <Release/>
        <Artist/>
      </div>
      <Footer />
    </>
  );
};

export default App;
