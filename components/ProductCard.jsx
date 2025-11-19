"use client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  // Safely calculate rating
  const rating =
    product.rating && product.rating.length > 0
      ? Math.round(
          product.rating.reduce((acc, curr) => acc + curr.rating, 0) /
            product.rating.length
        )
      : 0;

  return (
    <Link
      href={`/product/${product.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between 
                 w-[150px] sm:w-[180px] md:w-[200px] lg:w-[250px]"
    >
      {/* Product Image */}
      <div className="relative w-full h-36 sm:h-44 md:h-52 lg:h-64 bg-gray-100 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 150px,
                 (max-width: 768px) 180px,
                 (max-width: 1024px) 200px,
                 250px"
        />
      </div>

      {/* Product Info */}
      <div className="p-2 sm:p-3 flex flex-col justify-between flex-grow">
        {/* Product Name */}
        <h3 className="text-[12px] sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 group-hover:text-green-600 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating + Price */}
        <div className="flex items-center justify-between mt-1 sm:mt-2">
          {/* Rating */}
          <div className="flex items-center gap-[2px] sm:gap-1">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <StarIcon
                  key={index}
                  size={12}
                  className={`${
                    rating >= index + 1 ? "text-green-500" : "text-gray-300"
                  }`}
                  fill={rating >= index + 1 ? "#22c55e" : "none"}
                />
              ))}
          </div>

          {/* Price */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900">
            {currency}
            {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
