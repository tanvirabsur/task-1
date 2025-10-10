
import Hero from "./components/Hero";
import ProductsClient from "./components/ProductsClient";
// import ProductCard from "./components/ProductCard";

// type Product = {
//   name: string;
//   price: number;
//   rating: number;
//   description: string;
//   image: string;
//   tag?: string;
// }


export default function Home() {
  
  return (
    <>
      <Hero />
      <ProductsClient/>
      {/* <ProductCard product={product } /> */}
    </>
  );
}
