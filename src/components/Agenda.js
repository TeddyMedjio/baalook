import React from "react";
import persons from "../img/persons.png";
import agenda from "../img/agenda.png";
import caisse from "../img/caisse.png";
import rapport from "../img/rapport.png";
import marketing from "../img/marketing.png";

const Agenda = () => {
  return (
    <div>
      <div className="container mx-auto p-6 lg:px-20 flex flex-col lg:flex-row items-center">
        <img src={persons} className="hidden lg:block pr-16" alt="" />
        <div className="lg:w-[45%]">
          <div className="space-y-4 mb-10">
            <p className="text-lightBlue text-base font-semibold">
              AGENDA ET LOGICIEL DE GESTION
            </p>
            <h3 className="text-4xl text-darkBlue font-bold">
              Gérez votre salon grâce à une solution logiciel tout-en-un
            </h3>
            <p className="text-lg text-gray-500">
              Grâce à un éventail complet de fonctionnalités, vous pouvez gérer
              votre salon facilement et améliorer l’expérience pour vos clients.
            </p>
          </div>
          <div className="flex mb-5">
            <img src={agenda} className="w-10 h-10 mr-4 pt-1" alt="" />
            <div>
              <p className="text-lg text-darkBlue font-medium">
                Agenda numérique
              </p>
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. egestas
                tempus tellus etiam sed. Quam a{" "}
              </p>
            </div>
          </div>
          <div className="flex mb-5">
            <img src={caisse} className="w-10 h-10 mr-4 pt-1" alt="" />
            <div>
              <p className="text-lg text-darkBlue font-medium">
                Caisse, factures et paiements
              </p>
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. egestas
                tempus tellus etiam sed. Quam a{" "}
              </p>
            </div>
          </div>
          <div className="flex mb-5">
            <img src={rapport} className="w-10 h-10 mr-4 pt-1" alt="" />
            <div>
              <p className="text-lg text-darkBlue font-medium">
                Rapports et statistiques
              </p>
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. egestas
                tempus tellus etiam sed. Quam a{" "}
              </p>
            </div>
          </div>
          <div className="flex">
            <img src={marketing} className="w-10 h-10 mr-4 pt-1" alt="" />
            <div>
              <p className="text-lg text-darkBlue font-medium">
                Marketing et promotions
              </p>
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. egestas
                tempus tellus etiam sed. Quam a{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
