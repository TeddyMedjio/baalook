import React, { useState } from "react";
import logo from "../img/logo.svg";

const Nav = () => {
  let [open, setOpen] = useState(false);

  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className=" bg-white sticky md:container mx-auto p-6 lg:px-20">
        {/* <!-- Flex container --> */}
        <div className=" flex items-center justify-between">
          {/* <!-- logo --> */}
          <div>
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>

          {/* <!-- Menu Items --> */}
          <div className="hidden space-x-6 md:flex">
            <a
              href="#"
              className="font-medium uppercase text-colorNav hover:text-darkBlue"
            >
              solutions
            </a>
            <a
              href="#"
              className="font-medium uppercase text-colorNav hover:text-darkBlue"
            >
              fonctionnalités
            </a>
            <a
              href="#"
              className="font-medium uppercase text-colorNav hover:text-darkBlue"
            >
              tarifs
            </a>
            <a
              href="#"
              className="font-medium uppercase text-colorNav hover:text-darkBlue"
            >
              contact
            </a>
          </div>

          {/* <!-- Button --> */}
          <a
            href="#"
            className="hidden px-6 py-2 text-white font-medium uppercase bg-darkBlue hover:bg-brightBrown transition-all duration-200 ease-in rounded-md lg:block"
          >
            Ajouter mon établissement
          </a>

          {/* <!-- Hamburger Icon --> */}
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer"
          >
            <button className=" text-3xl">
              <ion-icon
                name={open ? "close-outline" : "menu-outline"}
              ></ion-icon>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu --> */}

        <div
          className={`md:hidden absolute flex flex-col items-center py-20 my-6 space-y-8  bg-darkBlue left-0 right-0 drop-shadow-md transition-all duration-500 ease-in ${
            open ? "top-30" : "top-[-680px]"
          } `}
        >
          <a
            href="#"
            className="font-medium uppercase text-white hover:text-gray-200"
          >
            solutions
          </a>
          <a
            href="#"
            className="font-medium uppercase text-white hover:text-gray-200"
          >
            Fonctionnalités
          </a>
          <a
            href="#"
            className="font-medium uppercase text-white hover:text-gray-200"
          >
            tarifs
          </a>
          <a
            href="#"
            className="font-medium uppercase text-white hover:text-gray-200"
          >
            contact
          </a>
          <a
            href="#"
            className="px-6 py-2 text-white font-medium uppercase bg-brightBrown hover:bg-white hover:text-darkBlue transition-all duration-200 ease-in rounded-md "
          >
            Ajouter mon établissement
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
