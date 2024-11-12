import { useState } from "react";
import { TfiHeart } from "react-icons/tfi";

function AllSaleCategory({ selectedCategory }) {
  const booksByCategory = {
    Manga: [
      { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Manga Book 1" },
      { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Manga Book 2" },
      
    ],
    Psychology: [
      { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Psychology Book 1" },
      { src: "https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg", title: "Psychology Book 2" },
    ],
  };

  const booksPerPage = 18;
  const recommendedBooks = booksByCategory[selectedCategory] || [];
  const totalPages = Math.ceil(recommendedBooks.length / booksPerPage);

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

  const paginatedBooks = recommendedBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  
  const startItem = (currentPage - 1) * booksPerPage + 1;
  const endItem = Math.min(currentPage * booksPerPage, recommendedBooks.length);

  if (!recommendedBooks.length) return null;

  return (
    <div className="flex-grow p-6">
      <div className="flex items-center justify-between mt-8 mb-4">
        <div className="flex-grow border-t border-purple-200"></div>
        <h2 className="text-3xl font-cherry text-center mx-4">{selectedCategory.toUpperCase()}</h2>
        <div className="flex-grow border-t border-purple-200"></div>
        <p className="ml-4 text-gray-700 text-sm">
          Showing {startItem}-{endItem} of {recommendedBooks.length} results
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {paginatedBooks.map((book, index) => (
          <div key={index} className="border rounded-lg p-4 text-center relative">
            <img src={book.src} alt={book.title} className="w-full h-40 object-cover rounded-md mb-2" />
            <h3 className="text-lg font-cherry">{book.title}</h3>
            <div className="flex justify-between">
              <p className="p-2 text-left text-lg font-serif text-gray-700">$100</p>
            </div>
            <div className="absolute top-2 right-2 flex items-center justify-center bg-gray-300 rounded-full w-8 h-8">
              <TfiHeart size={20} color="gray" />
            </div>
            <button className="mt-2 px-5 py-2 bg-primary font-cherry text-white rounded-full hover:bg-purple-600 transition">
              Show details
            </button>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="text-gray-700 hover:bg-gray-300 rounded-full p-2 disabled:text-gray-400"
          >
            &laquo;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              className={`w-8 h-8 rounded-full ${
                currentPage === index + 1 ? "bg-gray-500 text-white" : "bg-white text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="text-gray-700 hover:bg-gray-300 rounded-full p-2 disabled:text-gray-400"
          >
            &raquo;
          </button>
        </div>
      )}
    </div>
  );
}

export default AllSaleCategory;
