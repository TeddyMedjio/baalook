import React from "react";
import iconFocus from "../img/focus.png";
import arrow from "../img/Arrow_right.svg";
import dashboard from "../img/dashboard.png";

const Focus = () => {
  return (
    <div>
      <div className="relative container mx-auto p-6 lg:px-20 flex items-center mt-20 lg:my-28">
        <div className="space-y-10 lg:pr-16 lg:w-1/2">
          <img src={iconFocus} className="w-10 h-10" alt="icon building" />
          <h3 className="text-4xl text-darkBlue font-bold">
            Restez focus sur la gestion de vos salons et employés
          </h3>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Et, egestas tempus tellus etiam sed. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Et, egestas tempus
            tellus etiam sed. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Et, egestas tempus tellus etiam sed.
          </p>
          <div className="flex space-x-10">
            <button className="bg-gradient-to-r from-darkBlue to-brightBlue py-2 px-4 text-white rounded-md">
              Commencez maintenant
            </button>
            <div>
              <a
                href="#"
                className="text-darkBlue font-medium group relative hover:text-darkBlue border-darkBlue border-b-2 flex items-center pr-9 pt-1 "
              >
                Demandez une démo
                <span className="w-full absolute transition duration-700 ease-in-out hover:translate-x-1">
                  <img src={arrow} className=" ml-44" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 ">
          <img
            src={dashboard}
            className="hidden lg:block absolute -top-11 "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Focus;
