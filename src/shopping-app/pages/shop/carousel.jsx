import React, { useState, useEffect } from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';
import img1 from '../../assets/1st.jpg'
import img2 from '../../assets/2nd.jpg'
import img4 from '../../assets/4th.jpg'


export const Carousel = () => {
  // Images to display in the carousel
  const images = [
    img1,
    img2,
    img4,
    ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle moving to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  // Function to handle moving to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to automatically advance to the next image
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Auto slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className='flex flex-col items-center'>
    <div className="relative lg:w-10/12 border-full mt-4 ">
      <button
        className="absolute top-1/2 sm:hidden left-12 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-400 rounded-full p-2"
        onClick={prevImage}
      >
        <CaretLeft size={20} />
      </button>
      <button
        className="absolute top-1/2 sm:hidden right-12 transform -translate-y-1/2 bg-gray-100 text-gray-500 hover:bg-gray-400 rounded-full p-2"
        onClick={nextImage}
      >
        <CaretRight size={20} />
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className=" object-fill lg:w-9/12 sm:w-96 h-84 z-1 text-gray-500 transition-opacity duration-1000 ease-in-out md:w-1/2 sm:m-auto  "
      />
    </div>
    </div>
  );
};

