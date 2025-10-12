'use client'
import React from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import useFetch from "@/hooks/useFetch";

type productType = {
    id: number | string;
    name: string;
    price: number;
    rating: number;
    description: string;
    image: string;
    tag?: string;
    features: string[];
    reviews: { user: string; rating: number; comment: string }[];
}

export default function ProductDetails() {
    const {id} = useParams()
    const {data} = useFetch('/products.json')

    

    const product: productType = data?.find(p => p?.id.toString() === id)
    console.log(product);
//   const product = dummyProduct;
if (!product) return <div className="p-8 text-center">Loading product...</div>;
  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10 items-start">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden shadow-2xl"
      >
        <Image
          src={product?.image || 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80'}
          alt={product?.name}
          width={600}
          height={600}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
          {product.tag}
        </div>
      </motion.div>

      {/* Right: Details */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-5"
      >
        <h1 className="text-4xl font-extrabold text-gray-900">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill={i < product.rating ? '#facc15' : 'none'}
              strokeWidth={1.5}
              className="w-6 h-6 text-yellow-400"
            />
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed text-lg">
          {product.description}
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-6">
          <span className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            ${product.price}
          </span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
          >
            <ShoppingCart className="w-5 h-5" /> Add to Cart
          </motion.button>
        </div>

        {/* Reviews */}
        <div className="mt-8 border-t pt-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Customer Reviews</h2>
          <div className="space-y-3">
            {product.reviews.map((r, i) => (
              <div
                key={i}
                className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{r.user}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        fill={j < r.rating ? '#facc15' : 'none'}
                        strokeWidth={1.5}
                        className="w-4 h-4 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-2">{r.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
