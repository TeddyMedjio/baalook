import React from "react";
import tuple from "../img/tuple-logo.svg";
import workation from "../img/Workstation_icon.svg";
import statickit from "../img/statickit-logo.png";

const Hero = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-hero-pattern h-screen bg-no-repeat bg-top bg-cover md:h-full">
        <div className="md:container mx-auto p-6 lg:px-20">
          <div className="space-y-6 lg:w-3/5">
            <h1 className="text-5xl md:text-7xl font-bold text-white pt-20">
              Faites entrer l’avenir dans{" "}
              <a className="text-brightBrown">votre salon</a>
            </h1>
            <p className="text-xl leading-7 text-colorGray md:w-3/4">
              Tout ce dont vous avez besoin pour fournir un service d’exception
              à vos clients grâce au logiciel de gestion le plus performant pour
              votre salon.
            </p>
            <div>
              <p className="text-base text-white uppercase mb-4 mt-14">
                Ils parlent de nous
              </p>
              <div className="flex items-center space-x-7 mb-12">
                <img src={tuple} className="w-24" alt="logo-tuple" />
                <img src={workation} className="w-36" alt="logo-workation" />
                <img src={statickit} className="w-24" alt="logo-statickit" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
