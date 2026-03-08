import React from 'react';
import { motion } from 'motion/react';

const Cursos = () => {
  const listaCursos = [
    {
      id: 1,
      title: "Curso de React",
      description: "Domina la biblioteca más popular de JavaScript para crear interfaces de usuario dinámicas.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
      price: "$49.99"
    },
    {
      id: 2,
      title: "Curso de Tailwind",
      description: "Aprende a diseñar interfaces modernas y responsivas de forma rápida con CSS de utilidad.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop",
      price: "$39.99"
    },
    {
      id: 3,
      title: "Curso de Framer Motion",
      description: "Lleva tus aplicaciones al siguiente nivel con animaciones fluidas y profesionales.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      price: "$44.99"
    }
  ];

  return (
    <section id="#cursos" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nuestros Cursos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestra selección de cursos diseñados para convertirte en un desarrollador experto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listaCursos.map((curso, index) => (
            <motion.div
              key={curso.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={curso.image} 
                  alt={curso.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{curso.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {curso.description}
                </p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-primary font-bold text-2xl">{curso.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Saber más
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cursos;
