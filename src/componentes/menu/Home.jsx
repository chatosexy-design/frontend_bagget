import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "Pan Baguette Artesanal",
      description: "Recién horneado todos los días con los mejores ingredientes.",
      image: "https://images.unsplash.com/photo-1597079910443-60c43fc4f729?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Variedad de Cursos",
      description: "Aprende a preparar el mejor pan en nuestros talleres especializados.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Nuestra Historia",
      description: "Más de 20 años de tradición panadera en tu mesa.",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1000&auto=format&fit=crop",
    }
  ];

  return (
    <div className="container py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="rounded-3xl overflow-hidden h-[400px] md:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative text-center text-white p-6">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
