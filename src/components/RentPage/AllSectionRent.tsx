import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { R_DETAIL_ROUTE } from "../../context/Route";
import { axiosInstance } from "../../helper/axiosInstance";
import Heart from "../Catagories/Heart";

function AllSectionRent() {
  const [visibleBooks, setVisibleBooks] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const [rentbook, setRentbooks] = useState<[]>([]);
  const fetchrentbooks = async () => {
    try {
      const response = await axiosInstance.get("/book/getrentbook");
      console.log(response.data);
      if (response.status === 200) {
        setRentbooks(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchrentbooks();
    console.log("rent book ", rentbook);
  }, []);

  const loadMoreBooks = () => {
    if (!isExpanded) {
      setVisibleBooks(rentbook.length);
    } else {
      setVisibleBooks(6);
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {rentbook.slice(0, visibleBooks).map((book, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 text-center relative w-72 shadow-md"
          >
            {/* <img
              src={book.images[0]}
              alt={book.title}
              className="w-full h-48 object-contain rounded-md mb-2"
            /> */}
            <h3 className="text-sm font-cherry">{book.book_title}</h3>
            <p className="text-sm text-gray-500 mb-2">{book.book_author}</p>
            <p
              className={`p-4 text-right text-lg font-bold ${
                book.status === "Rented" ? "text-rented" : "text-available"
              }`}
            >
              {book.rentbook_status}
            </p>
            <div className="absolute top-2 right-2 flex items-center justify-center bg-gray-300 rounded-full w-8 h-8">
              <Heart />
            </div>
            <Link
              to={R_DETAIL_ROUTE}
              className="mt-2 mb-2 px-4 py-1 bg-primary font-cherry text-white rounded-full hover:bg-purple-600 transition"
            >
              Show details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllSectionRent;
