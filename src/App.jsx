import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Foot&Nav/Navbar";
import Marque from "./pages/Marque";
import Footer from "./components/Foot&Nav/Footer";

const App = () => {
  return (
    <>
      <div className="h-[400vh]">
        <Navbar />
        <Hero />
        {/* <Marque/> */}
      </div>
      <Footer />
    </>
  );
};

export default App;
