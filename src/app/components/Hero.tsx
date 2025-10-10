'use client'
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-teal-500 to-indigo-600 overflow-hidden">
      <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Elevate Your <span className="text-yellow-300">Shopping Experience</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Discover top-quality products, exclusive deals, and effortless shopping all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Shop Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Gradient Box with Floating Shapes and Sparkles */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center mb-10 md:mb-0 relative"
        >
          <div className="w-full max-w-md md:max-w-lg h-80 md:h-96 rounded-xl shadow-2xl bg-gradient-to-br from-pink-400 via-orange-400 to-red-500 animate-pulse-slow relative overflow-hidden">

            {/* Floating Product Circles */}
            <div className="absolute top-4 left-6 w-12 h-12 bg-white rounded-full shadow-lg animate-bounce-slow"></div>
            <div className="absolute bottom-8 right-10 w-16 h-16 bg-white rounded-full shadow-lg animate-bounce-slow delay-200"></div>
            <div className="absolute top-20 right-16 w-10 h-10 bg-white rounded-full shadow-lg animate-bounce-slow delay-400"></div>

            {/* Sparkles */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                className={`absolute w-2 h-2 bg-white rounded-full top-${Math.floor(Math.random() * 80)} left-${Math.floor(Math.random() * 80)} opacity-75`}
              />
            ))}

          </div>
        </motion.div>

      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
    </section>
  );
}