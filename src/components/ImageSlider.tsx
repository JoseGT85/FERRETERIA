import React, { useState, useEffect } from 'react';

const images = [
  '/images/slider/keys-1582335_1920.jpg',
  '/images/slider/tools-4128591_1920.jpg',
  '/images/slider/hardware-7381713_1920.jpg',
  '/images/slider/ring-key-4631368_1920.jpg',
  '/images/slider/wheelbarrow-3109759_1920.jpg',
  '/images/slider/wrench-4631364_1920.jpg',
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;