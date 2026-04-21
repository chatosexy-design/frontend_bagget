import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "Bienvenido a Leños",
      subtitle: "El auténtico sabor del pan artesanal.",
    },
    {
      id: 2,
      title: "Nuestros Leños",
      subtitle: "Descubre una variedad de panes con cortezas crujientes.",
    },
    {
      id: 3,
      title: "Tradición y Sabor",
      subtitle: "Ingredientes de la más alta calidad para un pan inolvidable.",
    }
  ];

  return (
    <section id="/" className="w-full h-[calc(100vh-120px)] bg-accent flex items-center justify-center">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-auto w-full max-w-4xl text-center"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="py-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-dark/80">
                {slide.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Home;
