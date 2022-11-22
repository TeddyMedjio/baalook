import React from "react";
import play from "../img/Play.png";
import apple from "../img/apple.mp4";
import background from "../img/background.png";

const Discover = () => {
  return (
    <div className="mb-28">
      <div className="container mx-auto p-6 lg:px-20 flex flex-col items-center md:flex-row mt-20 md:mt-40">
        <div className="w-full md:basis-1/2 md:pr-20 mb-16">
          <img src={play} className="w-10 mb-3" alt="button-play" />
          <p className="text-xs uppercase text-brightBrown font-semibold mb-4">
            aperçu
          </p>
          <h2 className="text-4xl font-bold text-darkBlue mb-6">
            Découvrez la puissance de Baalok en quelques clics
          </h2>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue.
          </p>
        </div>
        <div className="md:basis-1/3 relative">
          <img
            src={background}
            className="hidden md:block absolute -right-56 -top-24 w-3/4"
            alt=""
          />
          <video
            src={apple}
            muted
            loop
            autoPlay
            className="rounded-xl drop-shadow-lg self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
