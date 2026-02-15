"use client";
import { StarIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const router = useRouter();

  const rating =
    product.rating && product.rating.length > 0
      ? Math.round(
          product.rating.reduce((acc, curr) => acc + curr.rating, 0) /
            product.rating.length
        )
      : 0;

  const productId = product.id;

  const addToCartHandler = () => {
    dispatch(addToCart({ productId }));
  };

  return (
    <div className="relative group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden 
                    w-[150px] sm:w-[180px] md:w-[200px] lg:w-[250px]">

      {/* Product Image */}
      <div className="relative w-full h-36 sm:h-44 md:h-52 lg:h-64 bg-gray-100 overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        </Link>

        {/* ⭐ Mobile: Small Add-to-cart Icon (Always visible on mobile) */}
        <button
          onClick={() => (!cart[productId] ? addToCartHandler() : router.push("/cart"))}
          className="
            sm:hidden    /* Mobile only */
            absolute bottom-3 left-1/2 -translate-x-1/2 
            opacity-0 group-hover:opacity-100 group-hover:translate-y-0
            translate-y-4 transition-all duration-300 
            bg-green-600 hover:bg-green-700 
            text-white text-sm px-4 py-2 rounded-full 
            items-center gap-1 shadow-lg
          "
        >
          <ShoppingCartIcon size={18} />
        </button>

        {/* ⭐ Desktop: Full Add to Cart button (shows on hover) */}
        <button
          onClick={() => (!cart[productId] ? addToCartHandler() : router.push("/cart"))}
          className="
            hidden sm:flex   /* Desktop only */
            absolute bottom-3 left-1/2 -translate-x-1/2 
            opacity-0 group-hover:opacity-100 group-hover:translate-y-0
            translate-y-4 transition-all duration-300 
            bg-green-600 hover:bg-green-700 
            text-white text-sm px-4 py-2 rounded-full 
            items-center gap-1 shadow-lg
          "
        >
          <ShoppingCartIcon size={16} />
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="p-2 sm:p-3 flex flex-col flex-grow">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-[12px] sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 group-hover:text-green-600 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-1 sm:mt-2">
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

          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900">
            {currency}
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
