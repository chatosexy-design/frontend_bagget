import React from 'react';
import { motion, AnimatePresence } from "motion/react";
import { navbarLinks } from "../data/navbar";
import { Link } from "react-router-dom";

const MenuResponsivo = ({ isOpen, setIsOpen }) => {
  const animacion = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.3 }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          {...animacion}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col items-center gap-10">
              {navbarLinks.map((link) => (
                <li key={link.id}>
                  <Link 
                    to={link.url} 
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuResponsivo;
