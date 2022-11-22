import React, { useState } from "react";
import gitup from "../img/gitup.svg";
import twitter from "../img/twitter.svg";
import discord from "../img/discord.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const regEx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\@\"]+)*)|(\".+\"))@(([^<>([\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const checkEmail = (e) => {
    setEmail(e.target.value);
    if (regEx.test(email) === false) {
      setError("Email invalide");
    } else {
      setError("");
      return true;
    }
  };

  const submit = () => {
    if (email != "") {
      setMsg("Merci pour votre E-mail 📧");
    } else {
      setError("SVP entrez votre adresse Email!");
    }
  };

  return (
    <div className="bg-gray-700">
      <div className="md:container mx-auto p-6 lg:px-20 pt-14 ">
        <div className="grid grid-cols-2 md:grid-cols-none gap-y-8 md:grid-flow-col gap-x-7 ">
          {/* block1 */}
          <div className="flex flex-col space-y-3">
            <p className="text-gray-400 text-lg font-medium w-10/12 lg:w-full">
              BAALOOK, POUR LA GESTION
            </p>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Salon de coiffure
            </a>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Institut de beauté
            </a>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Barbershop
            </a>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Manicure & Pédicure
            </a>
          </div>

          {/* block2 */}
          <div className="flex flex-col space-y-3">
            <p className="text-gray-400 text-lg font-medium">FONCTIONNALITÉS</p>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Agenda numérique
            </a>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Visibilité en ligne
            </a>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Caisse, factures et paiements
            </a>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Rapports et statistiques
            </a>
          </div>

          {/* block3 */}
          <div className="flex flex-col space-y-3">
            <p className="text-gray-400 text-lg font-medium">RESSOURCES</p>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Tarifs
            </a>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Guides pour les pros
            </a>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Blog
            </a>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Confidentialité
            </a>
          </div>

          {/* block4 */}
          <div className="flex flex-col space-y-3">
            <p className="text-gray-400 text-lg font-medium">
              ASSISTANCE CLIENT
            </p>
            <a href="#" className="text-gray-100 text-lg font-medium">
              Contact
            </a>
            <a href="#" className="text-gray-100 text-lg font-medium">
              contact@baalook.com
            </a>
            <a href="#" className="text-gray-100 text-lg font-medium">
              (+33) 01 88 90 10
            </a>
          </div>
        </div>

        {/* souscrire */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-14 py-6 border-y-[1px] border-gray-400">
          <div className="mb-7 lg:mb-0">
            <p className="text-gray-400 text-lg font-medium mb-2">
              SOUSCRIRE À LA NEWSLETTER
            </p>
            <p className="text-gray-400 text-base">
              Recevez Les derniers articles, dernières prestations et services
              disponibles sur la plateforme.
            </p>
          </div>

          <div>
            <input
              type="email"
              placeholder="Entrer votre email"
              value={email}
              onChange={checkEmail}
              className="py-2 pl-3 focus:outline-none rounded-[6px]"
            />{" "}
            <p className="absolute text-red-500">{error}</p>
            <p className="absolute bg-gray-700 text-green-500">{msg}</p>
            <button
              type="submit"
              onClick={submit}
              className="text-lg ml-5 bg-brightBrown text-white px-4 py-2 rounded-[6px] cursor-pointer transition-all duration-200 ease-in hover:bg-brightBrownSupLight hover:text-gray-700"
            >
              S'inscrire
            </button>
          </div>
        </div>

        {/* signature */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-7 mb-14">
          <p className="text-gray-400 text-base">
            © 2022 NJC-Teddy Medjio. All rights reserved.
          </p>
          <div className="flex flex-row space-x-6 mt-5 lg:mt-0">
            <img src={gitup} alt="logo gitup" />
            <img src={twitter} alt="logo twitter" />
            <img src={discord} alt="logo discord" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
