import React, { useEffect, useState } from "react";
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.webp";

function BannerSlider() {
  const images = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length) {
        return 1; // Jump to the first real slide (index 1)
      } else {
        return prevIndex + 1;
      }
    });
    setIsTransitioning(true)
  };

  const handleTransitionEnd = () => {
    if (currentIndex === images.length) {
      setIsTransitioning(false);
      setCurrentIndex(0); // Instantly jump back to the first slide
    } 
  };

  const nextSlide = () => {
    handleNextSlide();
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative w-full flex overflow-hidden">
      <div
        className={`relative w-full h-full flex ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="w-full flex-shrink-0"
            src={image}
            alt={`Banner ${index}`}
          />
        ))}
        {/* Add a duplicate of the first slide at the end */}
        <img
          className="w-full flex-shrink-0"
          src={images[0]}
          alt="Banner 0"
        />
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded"
        onClick={prevSlide}
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
