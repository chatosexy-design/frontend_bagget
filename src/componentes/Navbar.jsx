import React, { useState } from 'react';
import { navbarLinks } from '../data/navbar';
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import { GiSlicedBread } from "react-icons/gi";
import MenuResponsivo from './MenuResponsivo';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="container flex justify-between items-center py-8 font-bold">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl uppercase">
          <GiSlicedBread className="text-primary text-4xl" />
          <p>el sitio de BARG CURSOS</p>
        </div>

        {/* Menú horizontal */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  to={link.url} 
                  className="hover:text-primary transition-all duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Iconos y Botón ingresar */}
        <div className="flex items-center gap-4">
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <CiSearch />
          </button>
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <PiShoppingCartLight />
          </button>
          <button className="hidden md:block border-2 border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white duration-200">
            Ingresar
          </button>
        </div>

        {/* Botón hamburguesa en móvil */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MdMenu className="text-4xl cursor-pointer" />
        </div>
      </nav>

      {/* Menu Responsivo */}
      <MenuResponsivo isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
