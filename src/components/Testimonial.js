import React from "react";
import Caroussel from "./Caroussel";

const Testimonial = () => {
  return (
    <div>
      <div className="container mx-auto px-6 py-28">
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-colorGreen text-base font-medium">TÉMOIGNAGES</p>
          <h3 className="text-4xl text-darkBlue font-bold lg:w-1/2">
            Les meilleurs professionnels de la beauté font confiance à Baalook
          </h3>
          <p className="text-lg text-gray-500 lg:w-2/5">
            10 000 salons de coiffure, instituts de beauté et spa nous font déjà
            confiance. Ils vous disent pourquoi😍
          </p>
        </div>

        <Caroussel />
      </div>
    </div>
  );
};

export default Testimonial;
