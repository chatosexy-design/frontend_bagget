import React from 'react';

const About = () => {
  return (
    <section id="#about" className="py-20 bg-white">
      <div className="container text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-primary">Nuestra Historia</h2>
        <p className="text-lg text-dark/80 mb-6 leading-relaxed">
          En <span className="font-bold">Leños</span>, creemos que el pan es más que un alimento, es una experiencia. Somos una panadería familiar dedicada a rescatar las recetas tradicionales y el sabor auténtico del pan artesanal.
        </p>
        <p className="text-lg text-dark/80 leading-relaxed">
          Nuestro equipo está compuesto por maestros panaderos que amasan con pasión y hornean con dedicación, para que cada leño que llegue a tu mesa sea una obra de arte.
        </p>
      </div>
    </section>
  );
};

export default About;
