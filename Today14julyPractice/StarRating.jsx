// 7. Create a star rating component where users can rate something from 1 to 5 stars.

import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-xl text-center">
      <h2 className="text-xl font-bold mb-4">⭐ Rate Us</h2>
      <div className="flex justify-center space-x-2 text-3xl cursor-pointer">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className={`transition duration-200 ${
              star <= (hovered || rating) ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <p className="mt-4 text-lg">
        You rated:{" "}
        <span className="font-semibold text-blue-600">
          {rating ? `${rating} / 5` : "Not rated yet"}
        </span>
      </p>
    </div>
  );
};

export default StarRating;
