import React from "react";
import Marque from "./Marque";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] absolute top-0">
      <img
        className="w-full h-full object-cover object-top"
        src="https://i.pinimg.com/564x/8a/4e/11/8a4e1194bef802829c5ba80823dca0d0.jpg"
        alt=""
      />
      <Marque />
    </div>
  );
};

export default Hero;
