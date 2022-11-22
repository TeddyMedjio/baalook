import React from "react";
import tuple from "../img/logos/Tuple.png";
import mirage from "../img/logos/Mirage.png";
import statickit from "../img/logos/Statickit.png";
import transistor from "../img/logos/Transistor.png";
import workstation from "../img/logos/Workstation.png";
import statamic from "../img/logos/Statamic.png";
import blade from "../img/logos/blade.png";
import tailwind from "../img/logos/tailwind.png";
import live from "../img/logos/live.png";
import laravel from "../img/logos/laravel.png";
import shopify from "../img/logos/shopify.png";

const LogosPro = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h3 className="text-3xl text-darkBlue font-bold text-center pt-12 pb-10">
          Plus de <a className="text-brightBrown">3000</a> professionnels ont
          rejoint Baalook
        </h3>
        <div className=" mx-auto w-full lg:w-4/5 flex items-center justify-center flex-wrap ">
          <img src={tuple} className="w-36" alt="logo-tuple" />
          <img src={mirage} className="w-36" alt="logo-mirage" />
          <img src={statickit} className="w-36" alt="logo-statickit" />
          <img src={transistor} className="w-36" alt="logo-transistor" />
          <img src={workstation} className="w-36 mx-2" alt="logo-workstation" />
          <img src={statamic} className="w-36" alt="logo-statamic" />
          <img src={blade} className="w-36 pt-4 md:pt-0" alt="logo-blade" />
          <img src={tailwind} className="w-36 pt-4" alt="logo-tailwind" />
          <img src={live} className="w-36 pt-4 mx-4" alt="logo-live" />
          <img src={laravel} className="w-36 pt-4" alt="logo-laravel" />
          <img src={shopify} className="w-36 pt-4" alt="logo-shopify" />
        </div>
      </div>
    </div>
  );
};

export default LogosPro;
