import React, { useState } from 'react';
import { navbarLinks } from '../data/navbar';
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import { GiSlicedBread } from "react-icons/gi";
import MenuResponsivo from './MenuResponsivo';
import { Link } from "react-router-dom";
import { motion } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container flex justify-between items-center py-6 font-bold bg-white sticky top-0 z-50 shadow-sm"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl uppercase group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <GiSlicedBread className="text-primary text-4xl" />
          </motion.div>
          <p className="group-hover:text-primary transition-colors duration-300">
            el sitio de <span className="text-primary">BARG CURSOS</span>
          </p>
        </Link>

        {/* Menú horizontal */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  to={link.url} 
                  className="relative group hover:text-primary transition-all duration-300"
                >
                  {link.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Iconos y Botón ingresar */}
        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 137, 1, 0.1)' }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl rounded-full p-2 duration-200"
          >
            <CiSearch />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 137, 1, 0.1)' }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl rounded-full p-2 duration-200"
          >
            <PiShoppingCartLight />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block border-2 border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white duration-200"
          >
            Ingresar
          </motion.button>
        </div>

        {/* Botón hamburguesa en móvil */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <motion.div
            whileTap={{ scale: 0.8 }}
          >
            <MdMenu className="text-4xl cursor-pointer" />
          </motion.div>
        </div>
      </motion.nav>

      {/* Menu Responsivo */}
      <MenuResponsivo isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
