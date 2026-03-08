import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'motion/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "Bienvenido a BARG Cursos",
      subtitle: "Aprende las tecnologías más demandadas con expertos en la industria.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
      color: "from-orange-500/80 to-transparent"
    },
    {
      id: 2,
      title: "Domina el Frontend",
      subtitle: "Cursos de React, Tailwind y animaciones con Framer Motion.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
      color: "from-blue-600/80 to-transparent"
    },
    {
      id: 3,
      title: "Tu Futuro es Hoy",
      subtitle: "Certifícate y da el siguiente paso en tu carrera profesional.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
      color: "from-purple-600/80 to-transparent"
    }
  ];

  return (
    <section id="/" className="w-full h-[calc(100vh-80px)] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`}></div>
              <div className="container relative z-10 px-6 md:px-12 text-white">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                    {slide.title.includes("BARG") ? (
                      <>
                        Bienvenido a <span className="text-primary">BARG Cursos</span>
                      </>
                    ) : slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-100">
                    {slide.subtitle}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-secondary transition-colors"
                  >
                    Ver Cursos
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Home;
