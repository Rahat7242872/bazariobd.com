"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Title from "./Title";
import ProductCard from "./ProductCard";

const LatestProducts = () => {
  const displayQuantity = 8;
  const products = useSelector((state) => state.product.list);

  const latest = products
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, displayQuantity);

  return (
    <section className="py-6 sm:py-10 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Section Title */}
      <div className="px-4 max-w-2xl mx-auto">
        <Title
          title="🆕 Latest Products"
          description={`Showing ${
            latest.length < displayQuantity ? latest.length : displayQuantity
          } of ${products.length} products`}
          href="/shop"
          className="text-sm sm:text-base md:text-lg" // Title size responsive
        />
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative w-full mt-6 sm:mt-10 overflow-x-hidden">
        <motion.div
          className="flex gap-3 sm:gap-6 md:gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...latest, ...latest].map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 min-w-[140px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Fade effect for smooth edges */}
        <div className="absolute top-0 left-0 h-full w-12 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-12 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default LatestProducts;
