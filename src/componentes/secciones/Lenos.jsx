import React from 'react';

const Lenos = () => {
  const listaLenos = [
    {
      id: 1,
      title: "Leño Tradicional",
      description: "Nuestra receta clásica, con una corteza crujiente y una miga suave y aireada.",
      price: "$5.99"
    },
    {
      id: 2,
      title: "Leño de Centeno",
      description: "Un pan con carácter, de sabor intenso y perfecto para acompañar quesos y embutidos.",
      price: "$6.99"
    },
    {
      id: 3,
      title: "Leño Multigrano",
      description: "Una opción saludable y deliciosa, con una mezcla de semillas y granos enteros.",
      price: "$7.99"
    }
  ];

  return (
    <section id="#lenos" className="py-20 bg-accent">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Nuestros Leños</h2>
          <p className="text-dark/70 max-w-2xl mx-auto text-lg">
            Descubre nuestra selección de panes artesanales, horneados cada día con los mejores ingredientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listaLenos.map((leno) => (
            <div
              key={leno.id}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-3 text-primary">{leno.title}</h3>
              <p className="text-dark/60 mb-4">
                {leno.description}
              </p>
              <div className="flex justify-between items-center mt-6">
                <span className="text-secondary font-bold text-2xl">{leno.price}</span>
                <button
                  className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-secondary transition-colors"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lenos;
