import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="#about" className="py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Imagen con animación */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop" 
                alt="Equipo BARG Cursos" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full z-0 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/30 rounded-lg z-0 hidden md:block"></div>
            </div>
          </motion.div>

          {/* Texto con animación */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              En <span className="text-primary font-bold">BARG Cursos</span>, creemos que la educación es la llave para transformar el futuro. Somos una plataforma dedicada a brindar capacitación de alta calidad en las tecnologías más innovadoras del mercado.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestro equipo está compuesto por profesionales apasionados que no solo enseñan teoría, sino que comparten su experiencia real en la industria para que tú puedas destacar desde el primer día.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-orange-50 rounded-xl">
                <h4 className="text-primary font-bold text-2xl mb-1">+500</h4>
                <p className="text-sm text-gray-500">Estudiantes Graduados</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl">
                <h4 className="text-primary font-bold text-2xl mb-1">15</h4>
                <p className="text-sm text-gray-500">Cursos Activos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
