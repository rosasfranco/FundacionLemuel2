import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants/index.js';
import logo from '../assets/logo.png';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-6 bg-white text-[#F27B35]">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-600 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="col-span-full md:col-span-6">
            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
              <div className="flex items-center justify-center w-24 h-24 rounded-full">
                <img src={logo} alt="" />
              </div>
              <span className="self-center text-2xl font-semibold">Fundacion Lemuel</span>
            </a>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium">Navegación</p>
            <ul>
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <NavLink
                    to={`/${nav.id}`}
                    className="text-[18px] font-medium  hover:text-orange-700"
                  >
                    {nav.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium">Dirección</p>
            <ul>
              <li>Caleta Olivia - Santa Cruz</li>
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>© 2024 Fundacion Lemuel. All rights reserved</span>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100081438307111&locale=az_AZ" target='_blanck' title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
              <FaFacebook className='w-7 h-7'/>
            </a>

            <a rel="noopener noreferrer" href="https://www.instagram.com/fundacion_lemuel_co/" target='_blanck' title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
              <FaInstagram className='w-7 h-7' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
