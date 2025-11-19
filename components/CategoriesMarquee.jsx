"use client";
import React from "react";
import { motion } from "framer-motion";
import { categoryList } from "../assets/assets"; // ✅ সঠিক import

export default function CategoryCarousel() {
  return (
    <div className="relative overflow-hidden py-6 bg-gradient-to-b from-white to-gray-50">
      {/* 🔹 Section Title */}

      <motion.div
        className="flex gap-6 md:gap-12"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...categoryList, ...categoryList].map((cat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center min-w-[80px] md:min-w-[150px]"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-25 md:h-25 rounded-full shadow-md bg-white flex items-center justify-center overflow-hidden border border-gray-100 hover:shadow-2xl transition-all">
              <img
                src={cat.img.src}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700 font-medium text-center">
              {cat.name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient fade sides */}
      <div className="absolute top-0 left-0 h-full w-10 sm:w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-10 sm:w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
}
