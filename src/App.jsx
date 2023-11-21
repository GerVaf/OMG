import React from "react";
import Hero from "./pages/Hero";
import Navbar from "./components/Foot&Nav/Navbar";
import Marque from "./pages/Marque";

const App = () => {
  return (
    <div className="h-[600vh]">
      <Navbar/>
      <Hero />
      {/* <Marque/> */}
    </div>
  );
};

export default App;
