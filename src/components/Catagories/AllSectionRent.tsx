import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaHeart } from "react-icons/fa";


function AllSectionRent() {

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
  ];

  const [visibleBooks, setVisibleBooks] = useState(3); 
  const [isExpanded, setIsExpanded] = useState(false); 

 
  const loadMoreBooks = () => {
    if (!isExpanded) {
      setVisibleBooks(recommendedBooks.length); 
    } else {
      setVisibleBooks(3); 
    }
    setIsExpanded(!isExpanded); 
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-cherry">All Book</h2>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            loadMoreBooks(); 
          }}
          className="flex items-center font-serif text-lg"
        >
          More 
          {isExpanded ? (
            <IoIosArrowUp className="ml-2 h-5 w-5" /> 
          ) : (
            <IoIosArrowDown className="ml-2 h-5 w-5" /> 
          )}
        </a>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {recommendedBooks.slice(0, visibleBooks).map((book, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 text-center relative"
          >
            <img src={book.src} alt={book.title} className="w-full h-40 object-cover rounded-md mb-2 " />
            <h3 className="text-lg font-cherry">{book.title}</h3>
            <div className='flex justify-between '>
                <p className="p-2 text-left text-lg font-serif text-gray-700">$100</p>
                <p className="p-2 text- text-lg font-serif text-red-800">Rented</p>
            </div>
            <div className="absolute top-2 right-2 flex items-center justify-center bg-gray-300 rounded-full w-8 h-8">
            < FaHeart size={20} color="gray" />
            </div>
            <button className="mt-2 px-5 py-2 bg-primary font-cherry text-white rounded-full hover:bg-purple-600 transition">
              Show details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllSectionRent;
