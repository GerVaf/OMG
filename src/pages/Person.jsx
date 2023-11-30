import React from "react";
import Marquee from "react-fast-marquee";

const Person = () => {
  return (
    <div className=" bg-black">
      <Marquee
        autoFill={true}
        direction="right"
      >
        <div className="w-20 h-20 mx-20 bg-red-500"></div>
        <div className="w-20 h-20 mx-20 bg-blue-500"></div>
        <div className="w-20 h-20 mx-20 bg-green-500"></div>
        <div className="w-20 h-20 mx-20 bg-orange-500"></div>
        <div className="w-20 h-20 mx-20 bg-violet-500"></div>
      </Marquee>
    </div>
  );
};

export default Person;
