import React, { useState } from 'react';
import { navbarLinks } from '../data/navbar';
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { GiSlicedBread } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import MenuResponsivo from './MenuResponsivo';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="container flex justify-between items-center py-6 font-bold bg-white sticky top-0 z-50 shadow-sm border-b border-accent/20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl uppercase text-primary">
          <GiSlicedBread className="text-4xl" />
          <p>Leños</p>
        </Link>

        {/* Menú horizontal */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  to={link.url} 
                  className="text-dark hover:text-primary transition-colors duration-300 text-lg"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Iconos y Botón ingresar */}
        <div className="flex items-center gap-5">
          <button className="text-2xl text-dark/70 hover:text-primary transition-colors">
            <CiSearch />
          </button>
          <button className="text-2xl text-dark/70 hover:text-primary transition-colors">
            <PiShoppingCartLight />
          </button>
          <button className="hidden md:block border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white transition-colors">
            Ingresar
          </button>
        </div>

        {/* Botón hamburguesa en móvil */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="p-2 bg-accent/20 rounded-lg text-primary">
            <MdMenu className="text-4xl cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Menu Responsivo */}
      <MenuResponsivo isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
