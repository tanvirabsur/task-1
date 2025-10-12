"use client"
import React from "react";
import useFetch from "@/hooks/useFetch";
import ProductCard from "./ProductCard";



export default function ProductsClient() {
  const { data } = useFetch('/products.json');

  if (!data) return <div className="p-8 text-center">Loading products...</div>;

  // The JSON file may be an array or an object with a `products` array.
 

  return (
    <section className="py-12">
      <div className="mx-auto px-6 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </section>
  );
}
