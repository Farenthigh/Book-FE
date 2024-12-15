import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; 
import book1 from "../../assets/Book1.png";
import book2 from "../../assets/Book2.png";
import book3 from "../../assets/Book3.png";
import { Link } from "react-router-dom";
import { S_DETAIL_ROUTE} from "../../context/Route";


const images = [book1, book2, book3]; 

const Bookslide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w mx-auto overflow-hidden rounded-lg shadow-lg ">
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 -translate-y-1/2 left-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50"
      >
        <IoIosArrowBack size={25} />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 -translate-y-1/2 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50"
      >
        <IoIosArrowForward size={25} />
      </button>

      <Link to={ S_DETAIL_ROUTE} className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 transition-transform duration-700  ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </Link>


      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Bookslide;
