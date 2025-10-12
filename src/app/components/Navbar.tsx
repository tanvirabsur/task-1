'use client'
import React, { useState, useEffect } from "react";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname()



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.includes("dashboard")) return null;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ${scrolled ? "bg-white/80 shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-extrabold text-blue-600 drop-shadow-sm cursor-pointer"
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            ShopVerse
          </span>
        </motion.h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-semibold">
          {['Home', 'Shop', 'Categories', 'dashboard', 'About', 'Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
            >
              <a href={`${item.toLowerCase()}`} className="hover:text-blue-600">
                {item}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <Search className="w-6 h-6 text-gray-600 hover:text-blue-500 cursor-pointer" />
          <Link href="/login">
            <User className="w-6 h-6 text-gray-600 hover:text-blue-500 cursor-pointer" /></Link>
          <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-blue-500 cursor-pointer" />
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg border-t"
        >
          <ul className="flex flex-col items-center py-6 space-y-4 font-semibold text-gray-700">
            {['Home', 'Shop', 'dashboard', 'Categories', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`${item.toLowerCase()}`}
                  className="hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <div className="flex space-x-6 pt-3">
              <Search className="w-6 h-6 text-gray-600 hover:text-blue-500 cursor-pointer" />
              <User className="w-6 h-6 text-gray-600 hover:text-blue-500 cursor-pointer" />
              <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-blue-500 cursor-pointer" />
            </div>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}