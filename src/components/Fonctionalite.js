import React from "react";
import fonction from "../img/fonction.png";

const Fonctionalite = () => {
  return (
    <div>
      <div className="container mx-auto p-6 lg:px-20">
        {/* header */}
        <div className="space-y-7 mb-20">
          <div className="bg-gradient-to-r from-green-200 to-blue-500 p-[1px] rounded-full w-44">
            <div className="bg-white rounded-full p-1">
              <p className="pl-2 font-medium bg-gradient-to-r from-green-200 to-blue-500 bg-clip-text text-transparent">
                FONCTIONNALITÉS
              </p>
            </div>
          </div>
          <h3 className="lg:w-2/5 text-4xl font-bold text-darkBlue">
            Pourquoi{" "}
            <span className="bg-gradient-to-r from-green-200 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Baalook{" "}
            </span>
            est fait pour votre salon
          </h3>
          <p className="lg:w-3/5 text-lg text-gray-500">
            Baalook possède toutes les fonctionnalités dont vous avez besoin
            pour vous assurer de passer moins de temps sur la paperasse et de
            vous concentrer sur ce qui compte le plus pour vos clients.
          </p>
        </div>

        {/* fonctionalités détaillées */}

        <div className="bg-none lg:bg-bg-fonction bg-contain bg-no-repeat bg-center flex flex-col lg:flex-row items-center justify-between">
          {/* détailés gauche */}
          <div className="lg:w-1/4 space-y-10 mb-20 lg:mb-0 border-l-2 border-dashed pt-5">
            <div>
              <h4 className="border-l-4 border-brightGreen pl-7 text-gray-800 text-lg font-semibold mb-4">
                Gagner du temps
              </h4>
              <p className="text-base pl-7 text-gray-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit
              </p>
            </div>

            <div>
              <h4 className="border-l-4 border-brightGreen pl-7 text-gray-800 text-lg font-semibold mb-4">
                Agenda numérique
              </h4>
              <p className="text-base pl-7 text-gray-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit
              </p>
            </div>

            <div>
              <h4 className="border-l-4 border-brightGreen pl-7 text-gray-800 text-lg font-semibold mb-4">
                Manager vos employés
              </h4>
              <p className="text-base pl-7 text-gray-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit
              </p>
            </div>
            <div>
              <h4 className="border-l-4 border-brightGreen pl-7 text-gray-800 text-lg font-semibold mb-4">
                Stocks et commandes
              </h4>
              <p className="text-base pl-7 text-gray-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit
              </p>
            </div>
          </div>

          {/* détailés droite */}
          <div className="lg:w-1/4 space-y-10 mb-20 lg:mb-0 border-r-2 border-dashed pt-5 text-right">
            <div>
              <h4 className="border-r-4 border-brightGreen pr-7 text-gray-800 text-lg font-semibold mb-4">
                E-commerce
              </h4>
              <p className="text-base pr-7 text-gray-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit
              </p>
            </div>

            <div>
              <h4 className="border-r-4 border-brightGreen pr-7 text-gray-800 text-lg font-semibold mb-4">
                Rapports & stats
              </h4>
              <p className="text-base pr-7 text-gray-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit
              </p>
            </div>

            <div>
              <h4 className="border-r-4 border-brightGreen pr-7 text-gray-800 text-lg font-semibold mb-4">
                Caisses et factures
              </h4>
              <p className="text-base pr-7 text-gray-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit
              </p>
            </div>

            <div>
              <h4 className="border-r-4 border-brightGreen pr-7 text-gray-800 text-lg font-semibold mb-4">
                Gagner du temps
              </h4>
              <p className="text-base pr-7 text-gray-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fonctionalite;
