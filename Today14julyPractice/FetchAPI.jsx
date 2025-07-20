// 4. Create a component fetching data from an API and displaying it in a list.

import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products.slice(0, 12))) // first 10 products
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Product Catalog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-2 mb-2">
                {product.description}
              </p>
              <div className="text-blue-600 font-bold">${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchAPI;
