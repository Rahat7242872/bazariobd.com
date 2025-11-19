"use client";
import { Menu, X, ShoppingCart, Heart, User, Camera, Search, PackageIcon } from "lucide-react";
import Link from "next/link";
import { useUser, useClerk, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const router = useRouter();
  const cartCount = useSelector((state) => state.cart.total);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/shop?search=${search}`);
  };

  return (
    <>
      {/* ✅ MOBILE NAVBAR */}
      <div className="md:hidden bg-indigo-50 text-white w-full sticky top-0 z-50 shadow-md">
        {/* 🔹 Top Row */}
        <div className="flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link href="/" className="relative text-4xl font-semibold text-slate-700">
            <span className="text-red-600">Baza</span>rio
            <span className="text-green-600 text-5xl leading-0">.</span>
            <p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500">
              BD
            </p>
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart size={22} className="text-green-600"/>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-[10px] px-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link href="/wishlist">
              <Heart size={22} className="text-green-600" />
            </Link>

            {!user ? (
             <button
                onClick={openSignIn}
                className="px-2 py-1 bg-green-500 hover:bg-slate-600 transition text-white rounded-full"
              >
                Login
              </button>
            ) : (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    labelIcon={<PackageIcon size={16} />}
                    label="My Orders"
                    onClick={() => router.push("/orders")}
                  />
                </UserButton.MenuItems>
              </UserButton>
            )}
          </div>
        </div>

        {/* 🔹 Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-white rounded-md mx-3 mb-3 overflow-hidden"
        >
          <div className="p-2 text-green-600">
            <Camera size={20} />
          </div>
           <input
              className="w-full bg-transparent outline-none placeholder-green-600"
              type="text"
              placeholder="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
          <button
            type="submit"
            className="bg-green-600 px-3 py-2 flex items-center justify-center"
          >
            <Search size={18} className="text-white" />
          </button>
        </form>
      </div>

      {/* ✅ DESKTOP NAVBAR */}
      <div className="hidden md:block bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative text-4xl font-semibold text-slate-700">
            <span className="text-red-600">Baza</span>rio
            <span className="text-green-600 text-5xl leading-0">.</span>
            <p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500">
              BD
            </p>
          </Link>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full"
          >
            <Search size={18} className="text-green-600" />
            <input
              className="w-full bg-transparent outline-none placeholder-green-600"
              type="text"
              placeholder="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
          </form>

          {/* Links + User */}
          <div className="flex items-center gap-6 font-bold text-slate-600">
            <Link className="hover:text-green-500" href="/">Home</Link>
            <Link className="hover:text-green-500" href="/shop">Shop</Link>
            <Link className="hover:text-green-500" href="/">About</Link>
            <Link className="hover:text-green-500" href="/">Contact</Link>

            <Link href="/cart" className="relative flex items-center gap-2 text-green-600">
              <ShoppingCart size={18} />
              <span>Cart</span>
              <span className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </Link>

            {!user ? (
              <button
                onClick={openSignIn}
                className="px-8 py-2 bg-green-500 hover:bg-slate-600 transition text-white rounded-full"
              >
                Login
              </button>
            ) : (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    labelIcon={<PackageIcon size={16} />}
                    label="My Orders"
                    onClick={() => router.push("/orders")}
                  />
                </UserButton.MenuItems>
              </UserButton>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
