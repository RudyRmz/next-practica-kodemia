import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
//SSG - STATIC SITE GENERATION

export default function Home(props) {
  return (
    <main>
      <header className="min-h-[150px] bg-black text-white w-full flex justify-center items-center text-4xl font-bold ">
        <h1>Mi Tiendita</h1>
      </header>
      <section className=" flex flex-wrap justify-center">
        {props.products.map((product) => {
          return (
            <ProductCard key={product?.id} product={product}></ProductCard>
          );
        })}
      </section>
    </main>
  );
}

// export async function getServerSideProps() {
//   //console.log("hola desde el server");
//   const response = await fetch("https://dummyjson.com/products");
//   const json = await response.json();
//   //console.log("json:", json);
//   return {
//     props: {
//       products: json.products,
//     },
//   };
// }

export async function getStaticProps() {
  console.log("hola desde el server SSG");
  const response = await fetch("https://dummyjson.com/products");
  const json = await response.json();
  return {
    props: {
      products: json.products,
    },
  };
}
