"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {banners} from "../assets/assets"; // তোমার asset file

export default function BannerImage() {
  const [current, setCurrent] = useState(0);

  // Auto slide effect for large banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-8 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 🟢 Left side: Large Banner */}
        <div className="relative col-span-2 rounded-2xl overflow-hidden shadow-xl group">
          <Image
            src={banners[current].image}
            alt={banners[current].title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>

          <div className="absolute bottom-8 left-8 text-white z-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              {banners[current].title}
            </h2>
            <p className="text-lg mt-2">{banners[current].discount}</p>
            <button className="mt-4 bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all">
              Shop Now
            </button>
          </div>
        </div>

        {/* 🟠 Right side: Two Small Banners */}
        <div className="flex flex-col gap-6">
          {banners.slice(1, 3).map((item, i) => (
            <div
              key={i}
              className={`${item.color} relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-500`}
            >
              <div className="relative w-full h-40 md:h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/25"></div>
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm">{item.discount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
