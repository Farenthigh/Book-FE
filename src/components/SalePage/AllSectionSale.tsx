import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../helper/axiosInstance";
import Heart from "../Catagories/Heart";

function AllSectionSale() {
  const [visibleBooks, setVisibleBooks] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const [salebook, setSalebooks] = useState<[]>([]);
  const fetchsalebooks = async () => {
    try {
      const response = await axiosInstance.get("/book/getsalebook");
      if (response.status === 200) {
        setSalebooks(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchsalebooks();
    console.log("sale book ", salebook);
  }, []);

  const loadMoreBooks = () => {
    setIsExpanded(!isExpanded);

    if (!isExpanded) {
      setVisibleBooks(salebook.length);
    } else {
      setVisibleBooks(6);
    }
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-cherry">All Book</h2>
        <button
          onClick={() => {
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
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {salebook.slice(0, visibleBooks).map((book, index) => (
          <div
            key={index}
            className="border rounded-lg p-2 text-center relative w-72 shadow-md"
          >
            <img
              src={book.image[0].image}
              alt={book.title}
              className="w-full h-48 object-contain rounded-md mb-2"
            />
            <h3 className="text-sm font-cherry">{book.book_title}</h3>
            <p className="text-sm text-gray-500 mb-2">{book.author_name}</p>
            <p className="p-4 text-left text-lg text-gray-700 font-bold ">
              {book.salebook_price} THB
            </p>
            <div className="absolute top-2 right-2 flex items-center justify-center bg-gray-300 rounded-full w-8 h-8">
              <Heart bookid={book.book_id} />
            </div>
            <Link
              to={`/Sdetail/${book.book_id}`}
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

export default AllSectionSale;
