import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io'; 
import { FaHeart } from "react-icons/fa";

function SaleFav() {
  const recommendedBooks = [
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 1" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 2" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 3" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 4" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 5" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 6" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 7" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 8" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 9" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 10" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 11" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 12" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 13" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 14" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 15" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 16" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 17" },
    { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Book 18" },
  ];

  const itemsPerPage = 4; 
  const totalPages = Math.ceil(recommendedBooks.length / itemsPerPage); 
  const [currentPage, setCurrentPage] = useState(0); 

  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const visibleBooks = recommendedBooks.slice(startIdx, endIdx); 

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1); 
    } else {
      setCurrentPage(0); 
    }
  };

  return (
    <section>
      <div className="flex items-center mb-4">
        <h2 className="text-3xl font-cherry mr-4 whitespace-nowrap">Sale Books</h2>
        <div className="flex-grow h-0.5 bg-purple-200"></div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-start relative justify-center w-full mr-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {visibleBooks.map((book, index) => (
              <div
                key={index}
                className="border rounded-lg p-2 text-center relative w-80"
              >
                <img src={book.src} alt={book.title} className="w-full h-32 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-cherry">{book.title}</h3>
                <div className="flex justify-between">
                  <p className="p-1 text-left text-lg font-serif text-gray-700">$100</p>
                </div>
                <div className="absolute top-2 right-2 flex items-center justify-center bg-gray-300 rounded-full w-8 h-8">
                  <FaHeart size={18} color="red" />
                </div>
                <button className="mt-2 px-4 py-1 bg-primary font-cherry text-white rounded-full hover:bg-purple-600 transition">
                  Show details
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SaleFav;
