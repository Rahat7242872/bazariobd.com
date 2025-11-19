'use client';
import Title from "./Title";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const JustForYou = () => {
  const displayQuantity = 12;
  const products = useSelector((state) => state.product.list);
  const featuredProducts = products.slice(0, displayQuantity);

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      {/* Section Title */}
      <div className="px-4 max-w-6xl mx-auto text-center">
        <Title
          title="💖 Just For You"
          description={`Handpicked ${featuredProducts.length} products just for you`}
          href="/shop"
        />
      </div>

      {/* Product Grid */}
      <motion.div
        className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 xl:gap-5 sm:gap-6 md:gap-8 px-6 sm:px-6 md:px-10 max-w-7xl mx-auto justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, duration: 0.6 },
          },
        }}
      >
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.id || index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-xs"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default JustForYou;
