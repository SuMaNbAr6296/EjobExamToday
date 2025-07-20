// 5. Create a search bar component that filters a list of items as the user types.

import React, { useState } from "react";

const SearchBarFilter = () => {
  const [search, setSearch] = useState("");
  const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Pineapple",
    "Watermelon",
    "Strawberry",
    "Grapes",
    "Papaya",
    "Litchi"
  ];

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">🍓 Fruit Search</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
      />
      {filteredFruits.length > 0 ? (
        <ul className="space-y-2">
          {filteredFruits.map((fruit, index) => (
            <li
              key={index}
              className="bg-gray-100 p-2 rounded text-center font-medium"
            >
              {fruit}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No matching items found.</p>
      )}
    </div>
  );
};

export default SearchBarFilter;
