import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
//CSR - Client Side Rendering

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);

  //console.log(products);
  return (
    <main>
      <header className="min-h-[150px] bg-black text-white w-full flex justify-center items-center text-4xl font-bold ">
        <h1>Mi Tiendita</h1>
      </header>
      <section className=" flex flex-wrap justify-center">
        {products.map((product) => {
          return (
            <ProductCard key={product?.id} product={product}></ProductCard>
          );
        })}
      </section>
    </main>
  );
}
