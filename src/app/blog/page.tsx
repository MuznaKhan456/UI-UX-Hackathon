
"use client"; 

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { allProducts } from "@/sanity/quries";
import Image from "next/image";

export default function Blog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts)
       
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mt-12 mb-6 text-center">Our Latest Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <Link href={`/product/${product.slug.current}`}>
              {product.productImage && (
                <Image
                  src={urlFor(product.productImage).url()}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
              <p className="text-gray-500 mt-2">
                {product.price ? `$${product.price}` : "Price not available"}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
