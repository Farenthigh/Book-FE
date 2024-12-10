import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io'; 
import { FaHeart } from "react-icons/fa";
import {Link} from "react-router-dom";
import { R_DETAIL_ROUTE } from "../../context/Route";
import Book from "../Mockdata/Book.json";

function RentFav() {


  const itemsPerPage = 4; 
  const totalPages = Math.ceil(Book.length / itemsPerPage); 
  const [currentPage, setCurrentPage] = useState(0); 

  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const visibleBooks = Book.slice(startIdx, endIdx); 

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
        <h2 className="text-3xl font-cherry mr-4 whitespace-nowrap">Rent Books</h2>
        <div className="flex-grow h-0.5 bg-purple-200"></div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-start relative justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {visibleBooks.map((book, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 text-center relative w-72 shadow-md"
              >
                <img src={book.images[0]} alt={book.title} className=" w-full h-48 object-contain rounded-md mb-2" /> 
                <h3 className="text-sm font-cherry font-bold">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                <p className={`p-4 text-right text-lg font-bold ${book.status === 'Rented' ? 'text-rented' : 'text-available'}`}>
                  {book.status}
                </p>
                <div className="absolute top-2 right-2 flex items-center justify-center bg-gray-300 rounded-full w-8 h-8">
                  <FaHeart size={20} color="red" />
                </div>
                <Link to={ R_DETAIL_ROUTE } className="mt-2 mb-2 px-4 py-1 bg-primary font-cherry text-white rounded-full hover:bg-purple-600 transition">
                  Show details
                </Link>
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

export default RentFav;
