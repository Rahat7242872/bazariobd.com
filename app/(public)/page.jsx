'use client'
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import OurSpecs from "@/components/OurSpec";
import LatestProducts from "@/components/LatestProducts";
import CategoriesMarquee from "@/components/CategoriesMarquee";
import ImageBanner from "@/components/Banners"
import ProductShowcase from "@/components/ProductShowcase"
export default function Home() {
    return (
        <div>
            <Hero />
            <CategoriesMarquee/>
            <LatestProducts />
            <BestSelling />
            <ImageBanner/>
            <ProductShowcase/>
            <OurSpecs />
            <Newsletter />
        </div>
    );
}
