import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Book from "../Mockdata/Book.json";
import { axiosInstance } from "../../helper/axiosInstance";
import { useParams } from "react-router-dom";

const DetailSaleBook = () => {
  const { bookId } = useParams();
  const [bookData, setBookData] = useState(Book);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBookData = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(`/book/findbook/${bookId}`);
      console.log(response.data[0]);
      setIsLoading(false);

      if (response.status === 200) {
        setBookData(response.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    title,
    author,
    publisher,
    category,
    description,
    Condition,
    price,
    images,
  } = Book[0];
  // full text
  const [showFullText, setShowFullText] = useState(false);
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentModalSlide, setCurrentModalSlide] = useState(0);
  // See more
  // const displayedText = showFullText
  //   ? description
  //   : `${description.slice(0, 250)}...`;

  const [currentSlide, setCurrentSlide] = useState(0);

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
  if (isLoading) return <div>Loading...</div>;

  // const handleClick = async () => {
  //   try {
  //     const response = await axiosInstance.post("/book/addfavorite", {
  //       bookId: bookId,
  //     });
  //     console.log(response);
  //   }
  // }

  return (
    <div>
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
              src={bookData.image[0].image}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className=" absolute left-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === currentSlide ? "bg-OrangePrimary" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
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
          {/* <p className="text-3sm text-gray-600 font-serif mb-5 mt-5">
            {displayedText}
            {!showFullText && (
              <button
                onClick={() => setShowFullText(true)}
                className="text-lightPrimary ml-2 hover:underline"
              >
                See more
              </button>
            )}
          </p> */}

          <p className="text-lg font-cherry text-OrangePrimary">Condition :</p>
          <p className="text-lg text-gray-600 font-serif">
            {bookData.condition_level}
          </p>

          <div className="flex gap-2 mt-4">
            <p className="text-lg font-cherry text-OrangePrimary">Price :</p>
            <p className="text-lg text-gray-600 font-serif">
              {bookData.salebook_price}THB
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-5 py-2 text-xl bg-primary text-white rounded-full hover:bg-purple-700">
          Add to cart
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
  );
};

export default DetailSaleBook;
