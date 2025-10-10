'use client'
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

type Product = {
    name: string;
    price: number;
    rating: number;
    description: string;
    image: string;
    tag?: string;
}

type ProductCardProps = {
product: Product;
};

export default function ProductCard({ product } : ProductCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 w-full max-w-sm mx-auto"
        >
            {/* Product Image */}
            <div className="relative w-full h-64 overflow-hidden group">
                <Image height={100} width={100} src={product.image}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    alt={product.name}></Image>

                <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full shadow-md">
                    {product.tag || "New"}
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5 flex flex-col justify-between space-y-3">
                <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
                    {product.name}
                </h2>

                {/* Ratings */}
                <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            fill={i < product.rating ? "#facc15" : "none"}
                            strokeWidth={1.5}
                            className="w-5 h-5"
                        />
                    ))}
                </div>

                <p className="text-gray-600 text-sm line-clamp-2">
                    {product.description}
                </p>

                {/* Price and Button */}
                <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-indigo-600">
                        ${product.price}
                    </span>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-500 transition-all duration-200"
                    >
                        <ShoppingCart className="w-5 h-5" /> Add to Cart
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}

// Example usage:
