import React from "react";
import Actualite from "../components/Actualite";
import Agenda from "../components/Agenda";
import Discover from "../components/Discover";
import Focus from "../components/Focus";
import Fonctionalite from "../components/Fonctionalite";
import Header from "../components/Header";
import LogosPro from "../components/LogosPro";
import Presse from "../components/Presse";
import Testimonial from "../components/Testimonial";

const Acceuil = () => {
  return (
    <div>
      <Header />
      <LogosPro />
      <Discover />
      <Agenda />
      <Focus />
      <Testimonial />
      <Fonctionalite />
      <Presse />
      <Actualite />
    </div>
  );
};

export default Acceuil;
