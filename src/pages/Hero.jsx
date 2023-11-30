import React from "react";
import logo from "../assets/whiteLogo.png";
import sign from "../assets/sign.png";
const Hero = () => {
  return (
    <div className="flex justify-around">
      {/* left information  */}
      <div className="w-3/6 flex flex-col items-center text-white">
        <h1 className="bla text-[150px]">Welcome</h1>
        <div className="flex flex-col gap-2">
          <p className="text-3xl">
            to <span className="text-6xl text-red-500">OPAQUE MUSIC GROUP</span>{" "}
            is
          </p>
          <p className="text-3xl">where music meets entrepreneurship.</p>
          <p className="text-lg">
            Join us on this journey as we revolutionize the creators' economy
            and
          </p>
          <p className="text-lg">
            help local music businesses reach unprecedented levels of success.
          </p>
        </div>

        <img className=" self-end w-96 h-36 object-cover object-center" src={sign} alt="" />
      </div>
      {/* right logo  */}
      <div className=" w-1/6 flex items-center">
        <img className=" w-full object-cover" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
