"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const Client = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-300 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        CLIENT SIDE
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow-md rounded-lg hover:scale-[1.05] transition"
          >
          <div className="relative w-full h-64">
              <Image
                src={product.image} 
                alt={product.title}
                layout="fill"
                objectFit="contain" 
              />
            </div>
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600 text-sm">
              {product.description.slice(0, 50)}...
            </p>
            <p className="font-bold text-blue-600 mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;