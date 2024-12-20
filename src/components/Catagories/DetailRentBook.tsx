import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import Book from "./Book.json"; 
import { FaPhone } from "react-icons/fa6";
import { FaLine } from "react-icons/fa6";

const DetailRentBook = () => {
  
  const { title, author, publisher, category, description, status, images } = Book[0];
  // full text 
  const [showFullText, setShowFullText] = useState(false);
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentModalSlide, setCurrentModalSlide] = useState(0);
  // See more
  const displayedText = showFullText ? description : `${description.slice(0, 250)}...`;

  const [price, setPrice] = useState(0);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [selectedPeriod, setSelectedPeriod] = useState("");

  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const openPhoneModal = () => setIsPhoneModalOpen(true);
  const closePhoneModal = () => setIsPhoneModalOpen(false);

  const [isLineModalOpen, setIsLineModalOpen] = useState(false);
  const openLineModal = () => setIsLineModalOpen(true);
  const closeLineModal = () => setIsLineModalOpen(false);


  //switch slides 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Open and close 
  const openModal = (index) => {
    setCurrentModalSlide(index);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navigate modal images
  const goToPreviousSlide = () => {
    setCurrentModalSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentModalSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const updatePrice = (days) => {
    if (days === 5) {
      setPrice(20);
    } else if (days === 7) {
      setPrice(30);
    } else if (days === 14) {
      setPrice(50);
    }
  };

  return (
    <div >
      <div className="flex gap-10 mb-8">
        {/* Book Image with Slider */}
        <div
          className="relative w-1/3 h-96 flex items-center cursor-pointer"
          onClick={() => openModal(currentSlide)}
        >
          {/* Image Slider */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}

          
          <div className=" absolute left-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-OrangePrimary' : 'bg-gray-400'}`}
              ></span>
            ))}
          </div>
        </div>

        
        <div className="flex-1 pt-10">
          <h1 className="text-3xl font-cherry mb-2">{title}</h1>
          <div className="flex items-center mb-1">
            <h2>Author : </h2>
            <h2 className="text-sm font-serif text-gray-700 ml-2 hover:underline">{author}</h2>
          </div>
          <div className="flex items-center mb-4 ">
            <h2>Publisher : </h2>
            <h2 className="text-sm font-serif text-gray-700 ml-2 hover:underline">{publisher}</h2>
          </div >
          <div className="flex items-center ">
            <h2 className="text-lg font-cherry text-lightPrimary mb-4">Category : </h2>
            <h2 className="text-lg font-cherry text-lightPrimary mb-4 ml-2 hover:underline">{category}</h2>
          </div>
          
          <p className="text-3sm text-gray-600 font-serif mb-5 mt-5">
            {displayedText}
            {!showFullText && (
              <button
                onClick={() => setShowFullText(true)}
                className="text-lightPrimary ml-2 hover:underline"
              >
                See more
              </button>
            )}
          </p>
          
          <div className="flex text-lg font-cherry gap-2">
            <p className="text-OrangePrimary">
              Status :{" "}
              <span
                className={` ${
                  status === "Available" ? "text-available" : "text-rented"
                }`}
              >
                {status}
              </span>
            </p>
          </div>
          {status === "Available" && selectedPeriod && (
            <div className="flex gap-2 mt-4">
              <p className="text-lg font-cherry text-OrangePrimary">Price :</p>
              <p className="text-lg text-gray-600 font-serif">{price}</p>
            </div>
          )}
        </div>
      </div>

      {/* Rent Options */}
      {status === "Available" && (
        <div className="flex justify-end mb-6 text-xs">
          <div className="flex border border-gray-400 rounded-full overflow-hidden">
            <button
              onClick={() => {
                updatePrice(5);
                setSelectedPeriod("5Day");
              }}
              className={`px-6 py-2 flex items-center ${
                selectedPeriod === "5Day" ? "bg-purple-100 text-purple-700 font-bold" : "bg-white"
              }`}
            >
              {selectedPeriod === "5Day" && <FaCheck className="mr-1 text-purple-700" />} 5Day
            </button>
            <button
              onClick={() => {
                updatePrice(7);
                setSelectedPeriod("7Day");
              }}
              className={`px-6 py-2 flex items-center border-l border-gray-300 ${
                selectedPeriod === "7Day" ? "bg-purple-100 text-purple-700 font-bold" : "bg-white"
              }`}
            >
              {selectedPeriod === "7Day" && <FaCheck className="mr-1 text-purple-700" />} 7Day
            </button>

            <button
              onClick={() => {
                updatePrice(14);
                setSelectedPeriod("14Day");
              }}
              className={`px-6 py-2 flex items-center border-l border-gray-300 ${
                selectedPeriod === "14Day" ? "bg-purple-100 text-purple-700 font-bold" : "bg-white"
              }`}
            >
              {selectedPeriod === "14Day" && <FaCheck className="mr-1 text-purple-700" />} 14Day
            </button>

          </div>
        </div>
      )}


      <div className="flex justify-end gap-5">
        <button 
          onClick={openLineModal}
          className="flex justify-between gap-3 items-center px-5 py-2 text-xl bg-primary text-white rounded-full hover:bg-purple-700">
          <FaLine size={24}/>Line
        </button>
        
        <button
          onClick={openPhoneModal}
          className="flex justify-between gap-3 items-center px-5 py-2 text-xl bg-primary text-white rounded-full hover:bg-purple-700">
          <FaPhone size={20}/>เบอร์โทร
        </button>
      </div>

      {isPhoneModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-5 relative">
            <button
              onClick={closePhoneModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <AiOutlineClose size={24} />
            </button>

            <h2 className="text-lg font-bold text-center mb-5">ติดต่อผู้ขาย</h2>
            <div className="flex items-center mb-4">
              <img
                src={images[0]}
                alt="Book"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4">
                <p className="text-gray-800 font-cherry">{title}</p>
                <p className="text-lg text-OrangePrimary font-semibold">{price || "0"} THB</p>
              </div>
            </div>
            <button className="flex items-center justify-center w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-purple-700">
              <FaPhone size={20} className="mr-2" />
              020-000-0000
            </button>
          </div>
        </div>
      )}

      {isLineModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-5 relative">
            <button
              onClick={closeLineModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <AiOutlineClose size={24} />
            </button>

            <h2 className="text-lg font-bold text-center mb-5">ติดต่อผู้ขาย</h2>
            <div className="flex items-center mb-4">
              <img
                src={images[0]}
                alt="Book"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4">
                <p className="text-gray-800 font-cherry">{title}</p>
                <p className="text-lg text-OrangePrimary font-semibold">{price || "0"} THB</p>
              </div>
            </div>
            <button className="flex items-center justify-center w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-purple-700">
              <FaLine size={24} className="mr-2" />
              ID:0000
            </button>
          </div>
        </div>
      )}

      {/*image view */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl">
            <AiOutlineClose />
          </button>

          <button onClick={goToPreviousSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl">
            <AiOutlineLeft />
          </button>

          <img src={images[currentModalSlide]} alt="Full view" className="w-[500px] h-[600px] object-cover rounded-md" />

          <button onClick={goToNextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl">
            <AiOutlineRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailRentBook;