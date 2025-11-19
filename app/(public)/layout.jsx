'use client'
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function PublicLayout({ children }) {

    return (
        <div className="min-h-screen relative pb-16">
            <Banner />
            <Navbar />
            {children}
            <BottomNav/>           
            <Footer />
        </div>
    );
}
