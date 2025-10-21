
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { categoryCarousel } from "../assets/assets";

export default function CategoryCarousel() {
    
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Explore Our Collections
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={2.5}
        loop={true}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {categoryCarousel.map((_,index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <img
                src={categoryCarousel}
                className="w-20 h-20 object-cover rounded-full mb-3"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}