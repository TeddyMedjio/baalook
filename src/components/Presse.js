import React from "react";
import tuple from "../img/Tuple_icon.png";
import mirage from "../img/Mirage_icon.png";
import statickit from "../img/Statickit_icon.png";
import transistor from "../img/Transistor_icon.png";
import workstation from "../img/Workstation_icon.png";
import statamic from "../img/Statamic_icon.png";

const Presse = () => {
  return (
    <div className=" relative md:container mx-auto p-6 lg:px-20 lg:mt-28 mb-20">
      <div className="bg-gradient-to-r from-veryLightBlue via-brightBlue to-veryLightBlue py-44 lg:py-32 rounded-3xl rotate-[3.5deg]"></div>
      <div className="absolute bg-white w-full top-16 right-0 pl-24 p-5">
        <p className="pt-5 text-sm font-bold text-gray-500 text-center lg:text-left">
          LA PRESSE PARLENT DE NOUS
        </p>
        <div className="mt-5 mb-5 flex items-center flex-wrap justify-center lg:justify-between pr-16">
          <img src={tuple} alt="tuple icon" />
          <img src={mirage} alt="mirage icon" />
          <img src={statickit} alt="statickit icon" />
          <img src={transistor} alt="transistor icon" />
          <img src={workstation} alt="workstation icon" />
          <img src={statamic} alt="statamic icon" />
        </div>
      </div>
    </div>
  );
};

export default Presse;
