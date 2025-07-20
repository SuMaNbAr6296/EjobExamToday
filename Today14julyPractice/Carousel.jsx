// 6. Create a carousel component that cycles through a set of images.

import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const fetchedImages = data.products.slice(0, 30).map((p) => ({
          src: p.thumbnail,
          title: p.title,
        }));
        setImages(fetchedImages);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return <p className="text-center p-6">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-center">☄️ Set Of Images </h2>
      <img
        src={images[index].src}
        alt={images[index].title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{images[index].title}</h3>
      <div className="flex justify-center space-x-4">
        <button onClick={prevSlide} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
          ⬅ Prev
        </button>
        <button onClick={nextSlide} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
          Next ➡
        </button>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Slide {index + 1} of {images.length}
      </p>
    </div>
  );
};

export default Carousel;
