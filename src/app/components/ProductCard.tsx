'use client'
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Product = {
    id: string | number;
    image: string;
    name: string;
    tag?: string;
    rating?: number;
    description?: string;
    price?: number | string;
};

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link className="w-full" href={`/${product.id}`}>
            <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 backdrop-blur-sm group max-w-sm mx-auto"
            >
                {/* Floating Tag */}
                {product.tag && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10"
                    >
                        {product.tag}
                    </motion.div>
                )}

                {/* Product Image */}
                <div className="relative w-full h-64 overflow-hidden">
                    <Image
                        height={400}
                        width={400}
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                        {product.name}
                    </h2>

                    {/* Rating Stars */}
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                fill={i < (product.rating || 0) ? "#facc15" : "none"}
                                strokeWidth={1.5}
                                className="w-5 h-5 text-yellow-400"
                            />
                        ))}
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between mt-3">
                        <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                            ${product.price}
                        </span>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
                        >
                            <ShoppingCart size={20} className="" /> Add to Cart
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
