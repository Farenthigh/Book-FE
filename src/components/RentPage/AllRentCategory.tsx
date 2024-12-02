import { useState } from "react";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Book from "../Mockdata/Book.json";
import Heart from "../Catagories/Heart";

function AllRentCategory({ selectedCategory }) {
  const booksPerPage = 12;
  const filteredBooks = Book.filter(book => book.category === selectedCategory); // Filter books by selected category
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const startItem = (currentPage - 1) * booksPerPage + 1;
  const endItem = Math.min(currentPage * booksPerPage, filteredBooks.length);

  if (!filteredBooks.length) return null;

  return (
    <div className="flex-grow p-2">
      <div className="flex items-center justify-between mt-8 mb-4">
        <div className="flex-grow border-t-2 h-0.5 border-purple-200"></div>
        <h2 className="text-3xl font-cherry text-center mx-4">{selectedCategory.toUpperCase()}</h2>
        <div className="flex-grow border-t-2 h-0.5 border-purple-200"></div>
        <p className="ml-4 text-gray-700 text-sm">
          Showing {startItem}-{endItem} of {filteredBooks.length} results
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {paginatedBooks.map((book, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 text-center relative w-72 shadow-md"
          >
            <img src={book.images[0]} alt={book.title} className="w-full h-48 object-contain rounded-md mb-2" />
            <h3 className="text-sm font-cherry">{book.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{book.author}</p>
            <p className={`p-4 text-right text-lg font-bold ${book.status === 'Rented' ? 'text-rented' : 'text-available'}`}>
              {book.status}
            </p>
            <div className="absolute top-2 right-2 flex items-center justify-center bg-gray-300 rounded-full w-8 h-8">
              < Heart/>
            </div>
            <button className="mt-2 mb-2 px-4 py-1 bg-primary font-cherry text-white rounded-full hover:bg-purple-600 transition">
              Show details
            </button>
          </div>
        ))}
      </div>

    

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="text-gray-700 hover:bg-gray-200 rounded-full p-3 disabled:text-gray-400"
          >
            <MdKeyboardDoubleArrowLeft size={24} />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              className={`w-8 h-8 rounded-full ${
                currentPage === index + 1 ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="text-gray-700 hover:bg-gray-200 rounded-full p-3 disabled:text-gray-400"
          >
            <MdKeyboardDoubleArrowRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}

export default AllRentCategory;
