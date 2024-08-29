import React, { useEffect, useState } from "react";
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.webp";

function BannerSlider() {
  const images = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full flex border overflow-hidden">
      <div
        className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="w-full flex-shrink-0"
            src={image}
            alt={`Banner ${index}`}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded"
        onClick={prevSlide}
        disabled={currentIndex === 0} // Disable the button if at the first image
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
}

export default BannerSlider;
