'use client'
import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">ShopEase</h2>
          <p className="text-sm leading-6">
            Experience effortless shopping with ShopEase. We deliver top quality
            products at your doorstep with love and care.
          </p>
          <div className="flex space-x-4 mt-4">
            <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-sky-400 cursor-pointer" />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#shop" className="hover:text-blue-400">Shop</a></li>
            <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </motion.div>

        {/* Customer Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
            <li><a href="#shipping" className="hover:text-blue-400">Shipping & Returns</a></li>
            <li><a href="#privacy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-blue-400">Terms & Conditions</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>support@shopease.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+880 1234 567890</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </motion.div>
    </footer>
  );
}
