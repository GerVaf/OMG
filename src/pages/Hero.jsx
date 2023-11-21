import React from "react";
import Marque from "./Marque";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] absolute top-0">
      <img
        className="w-full h-full object-cover object-top"
        src="https://i.pinimg.com/564x/90/ec/2d/90ec2dfde875ef1fbf4d749bce6bb927.jpg"
        alt=""
      />
      <Marque />
    </div>
  );
};

export default Hero;
