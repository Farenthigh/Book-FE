import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../helper/axiosInstance";
import Book from "../Mockdata/Book.json";

const DetailRentBook = () => {
  const { bookId } = useParams();
  const [bookData, setBookData] = useState(Book);
  const fetchBookData = async () => {
    try {
      const response = await axiosInstance.get(`/book/findbook/${bookId}`);
      console.log(response.data[0]);
      if (response.status === 200) {
        setBookData(response.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { title, author, publisher, category, description, status, images } =
    Book[0];
  // full text
  const [showFullText, setShowFullText] = useState(false);
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentModalSlide, setCurrentModalSlide] = useState(0);
  // See more
  // const displayedText = showFullText
  //   ? bookData
  //   : `${description.slice(0, 250)}...`;

  const [price, setPrice] = useState(0);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [selectedPeriod, setSelectedPeriod] = useState("");

  //switch slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    fetchBookData();
  }, [bookId]);

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
    setCurrentModalSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const goToNextSlide = () => {
    setCurrentModalSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const updatePrice = (days) => {
    if (days === 5) {
      setPrice(bookData.rentbook_fivedayprice);
    } else if (days === 7) {
      setPrice(bookData.rentbook_sevendayprice);
    } else if (days === 14) {
      setPrice(bookData.rentbook_fourteendayprice);
    }
  };

  return (
    <div>
      <div>
        <div className="flex gap-10 mb-8">
          {" "}
          {/* Book Image with Slider */}
          <div
            className="relative w-1/3 h-96 flex items-center cursor-pointer"
            onClick={() => openModal(currentSlide)}
          >
            {/* Image Slider */}
            {/* {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))} */}

            {/* <div className=" absolute left-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-3 w-3 rounded-full ${
                      index === currentSlide
                        ? "bg-OrangePrimary"
                        : "bg-gray-400"
                    }`}
                  ></span>
                ))}
              </div> */}
          </div>
          <div className="flex-1 pt-10">
            <h1 className="text-3xl font-cherry mb-2">{bookData.book_title}</h1>
            <div className="flex items-center mb-1">
              <h2>Author : </h2>
              <h2 className="text-sm font-serif text-gray-700 ml-2 hover:underline">
                {bookData.author_name}
              </h2>
            </div>
            <div className="flex items-center mb-4 ">
              <h2>Publisher : </h2>
              <h2 className="text-sm font-serif text-gray-700 ml-2 hover:underline">
                {bookData.publisher_name}
              </h2>
            </div>
            <div className="flex items-center ">
              <h2 className="text-lg font-cherry text-lightPrimary mb-4">
                Category :{" "}
              </h2>
              <h2 className="text-lg font-cherry text-lightPrimary mb-4 ml-2 hover:underline">
                {bookData.book_category}
              </h2>
            </div>

            <p className="text-3sm text-gray-600 font-serif mb-5 mt-5 w-3/4 h-40">
              {showFullText
                ? bookData.book_description
                : bookData.book_description}

              <button
                onClick={() => setShowFullText(!showFullText)}
                className="text-lightPrimary ml-2 hover:underline"
              >
                {!showFullText ? "See more" : "See less"}
              </button>
            </p>

            <div className="flex text-lg font-cherry gap-2">
              <p className="text-OrangePrimary">
                Status :{" "}
                <span
                  className={` ${
                    status === "Available" ? "text-available" : "text-rented"
                  }`}
                >
                  {bookData.rentbook_status}
                </span>
              </p>
            </div>
            {bookData.rentbook_status === "available" && selectedPeriod && (
              <div className="flex gap-2 mt-4">
                <p className="text-lg font-cherry text-OrangePrimary">
                  Price :
                </p>
                <p className="text-lg text-gray-600 font-serif">{price}</p>
              </div>
            )}
          </div>
        </div>

        {/* Rent Options */}
        {bookData.rentbook_status === "available" && (
          <div className="flex justify-end mb-6 text-xs">
            <div className="flex border border-gray-400 rounded-full overflow-hidden">
              <button
                onClick={() => {
                  updatePrice(5);
                  setSelectedPeriod("5Day");
                }}
                className={`px-6 py-2 flex items-center ${
                  selectedPeriod === "5Day"
                    ? "bg-purple-100 text-purple-700 font-bold"
                    : "bg-white"
                }`}
              >
                {selectedPeriod === "5Day" && (
                  <FaCheck className="mr-1 text-purple-700" />
                )}{" "}
                5Day
              </button>
              <button
                onClick={() => {
                  updatePrice(7);
                  setSelectedPeriod("7Day");
                }}
                className={`px-6 py-2 flex items-center border-l border-gray-300 ${
                  selectedPeriod === "7Day"
                    ? "bg-purple-100 text-purple-700 font-bold"
                    : "bg-white"
                }`}
              >
                {selectedPeriod === "7Day" && (
                  <FaCheck className="mr-1 text-purple-700" />
                )}{" "}
                7Day
              </button>

              <button
                onClick={() => {
                  updatePrice(14);
                  setSelectedPeriod("14Day");
                }}
                className={`px-6 py-2 flex items-center border-l border-gray-300 ${
                  selectedPeriod === "14Day"
                    ? "bg-purple-100 text-purple-700 font-bold"
                    : "bg-white"
                }`}
              >
                {selectedPeriod === "14Day" && (
                  <FaCheck className="mr-1 text-purple-700" />
                )}{" "}
                14Day
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-end pr-12">
          <button className="px-5 py-2 text-xl bg-primary text-white rounded-full hover:bg-purple-700">
            Rent Now!
          </button>
        </div>

        {/*image view */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              <AiOutlineClose />
            </button>

            <button
              onClick={goToPreviousSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            >
              <AiOutlineLeft />
            </button>

            <img
              src={images[currentModalSlide]}
              alt="Full view"
              className="w-[500px] h-[600px] object-cover rounded-md"
            />

            <button
              onClick={goToNextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            >
              <AiOutlineRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailRentBook;
