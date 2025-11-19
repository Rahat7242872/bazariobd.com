'use client'

import { addToCart } from "@/lib/features/cart/cartSlice";
import { StarIcon, TagIcon, EarthIcon, CreditCardIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

const ProductDetails = ({ product }) => {
  const productId = product.id;
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$';

  const cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const router = useRouter();

  const [mainImage, setMainImage] = useState(product.images[0]);

  const addToCartHandler = () => {
      dispatch(addToCart({ productId }))
  }

  const averageRating = product.rating.reduce((acc, item) => acc + item.rating, 0) / product.rating.length;

  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Images Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-1/2">
        {/* Thumbnails */}
        <div className="flex sm:flex-col gap-2 sm:gap-3">
          {product.images.map((image, index) => (
            <motion.div
              key={index}
              onClick={() => setMainImage(product.images[index])}
              className="bg-slate-100 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg cursor-pointer overflow-hidden shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image src={image} alt="" width={50} height={50} className="object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Main Image */}
        <motion.div
          key={mainImage}
          className="flex justify-center items-center w-full h-64 sm:h-72 md:h-96 bg-slate-100 rounded-lg overflow-hidden shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image src={mainImage} alt={product.name} width={350} height={350} className="object-cover" />
        </motion.div>
      </div>

      {/* Product Info */}
      <motion.div
        className="flex-1 flex flex-col gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Product Name */}
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">{product.name}</h1>

        {/* Rating */}
        <motion.div className='flex items-center mt-2 sm:mt-3' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }}>
          {Array(5).fill('').map((_, index) => (
            <StarIcon
              key={index}
              size={14}
              className='text-transparent mt-0.5'
              fill={averageRating >= index + 1 ? "#00C950" : "#D1D5DB"}
            />
          ))}
          <p className="text-xs sm:text-sm ml-2 sm:ml-3 text-slate-500">{product.rating.length} Reviews</p>
        </motion.div>

        {/* Price */}
        <motion.div className="flex flex-wrap items-start my-4 sm:my-6 gap-3 text-xl sm:text-2xl font-semibold text-slate-800"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>{currency}{product.price}</p>
          <p className="text-base sm:text-xl text-slate-500 line-through">{currency}{product.mrp}</p>
        </motion.div>

        {/* Discount */}
        <motion.div className="flex items-center gap-2 text-sm sm:text-base text-slate-500"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <TagIcon size={14} />
          <p>Save {((product.mrp - product.price) / product.mrp * 100).toFixed(0)}% right now</p>
        </motion.div>

        {/* Add to Cart / Counter */}
        <motion.div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-5 mt-6 sm:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {cart[productId] && (
            <div className="flex flex-row sm:flex-col gap-3">
              <p className="text-lg text-slate-800 font-semibold">Quantity</p>
              <Counter productId={productId} />
            </div>
          )}
          <motion.button
            onClick={() => !cart[productId] ? addToCartHandler() : router.push('/cart')}
            className="bg-slate-800 text-white px-8 sm:px-10 py-2 sm:py-3 text-sm sm:text-base font-medium rounded hover:bg-slate-900 active:scale-95 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {!cart[productId] ? 'Add to Cart' : 'View Cart'}
          </motion.button>
        </motion.div>

        <hr className="border-gray-300 my-4 sm:my-5" />

        {/* Features */}
        <motion.div className="flex flex-col gap-3 sm:gap-4 text-sm sm:text-base text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="flex gap-2 sm:gap-3"><EarthIcon className="text-slate-400" /> Free shipping worldwide</p>
          <p className="flex gap-2 sm:gap-3"><CreditCardIcon className="text-slate-400" /> 100% Secured Payment</p>
          <p className="flex gap-2 sm:gap-3"><UserIcon className="text-slate-400" /> Trusted by top brands</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProductDetails;
