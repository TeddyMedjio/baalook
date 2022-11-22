import React from "react";
import actualite from "../img/actualite_icon.svg";
import marketing from "../img/marketing_picture.png";
import entrepreuneriat from "../img/entrepreunariat.png";
import dollar from "../img/dollar.png";

const Actualite = () => {
  return (
    <div>
      <div className="md:container mx-auto p-6 lg:px-20">
        <div className="space-y-5 mb-16 border-b-2 border-gray-100 pb-10">
          <img src={actualite} className="w-10 h-10" alt="" />
          <h3 className="text-3xl font-bold text-darkBlue">
            Toute l’actualité de nos professionnels
          </h3>
          <p className="text-lg text-gray-500 lg:w-[47%]">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </div>

        {/* blocs */}
        <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:items-center mb-28">
          <div className="space-y-5 lg:w-1/3">
            <img
              src={marketing}
              className="rounded-[12px]"
              alt="image main et laptop"
            />
            <p className="font-medium py-1 bg-orange-100 text-orange-800 rounded-full w-1/4 text-center">
              Marketing
            </p>
            <p className="font-medium text-xl text-darkBlue w-3/4">
              5 raisons de choisir un logiciel de gestion pour salon de beauté
            </p>
            <p className="text-lg text-gray-500 w-9/12 lg:w-4/5">
              Nullam risus blandit ac aliquam justo ipsum. Quam ...
            </p>
          </div>

          <div className="space-y-5 lg:w-1/3">
            <img
              src={entrepreuneriat}
              className="rounded-[12px]"
              alt="image main et laptop"
            />
            <p className="font-medium py-1 bg-teal-100 text-teal-800 rounded-full w-[35%] text-center">
              Entrepreuneriat
            </p>
            <p className="font-medium text-xl text-darkBlue w-9/12 lg:w-11/12">
              À partir d’aujourd’hui, le logiciel Baalook a également le
              e-commerce
            </p>
            <p className="text-lg text-gray-500 w-9/12 lg:w-4/5">
              Nullam risus blandit ac aliquam justo ipsum. Quam ...
            </p>
          </div>

          <div className="space-y-5 lg:w-1/3">
            <img
              src={dollar}
              className="rounded-[12px]"
              alt="image main et laptop"
            />
            <p className="font-medium py-1 bg-orange-100 text-orange-800 rounded-full w-1/4 text-center">
              Marketing
            </p>
            <p className="font-medium text-xl text-darkBlue w-3/4">
              7 conseils pour développer le chiffre d’affaires de votre salon
            </p>
            <p className="text-lg text-gray-500 w-9/12 lg:w-4/5">
              Nullam risus blandit ac aliquam justo ipsum. Quam ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actualite;
