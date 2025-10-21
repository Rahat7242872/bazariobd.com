'use client';
import { useState, useEffect } from "react";
import { CarouselBanner } from "../assets/assets";

export default function BannerCarousel() {
  const banners = CarouselBanner; // এখন banners array কাজ করবে
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full overflow-hidden h-48 sm:h-56 md:h-64 lg:h-100 px-1 py-1 sm:px-1 md:px-1">
      <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={banners[currentIndex].src} // `.src` লাগবে
          alt="Banner"
          className="w-full h-full object-cover transition-all duration-700"
        />

       

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
