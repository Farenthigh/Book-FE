import { useEffect, useState } from "react";
import { axiosInstance } from "../helper/axiosInstance";
import { Link } from "react-router-dom";

const Post = () => {
  const [myBook, setMyBook] = useState<Book[]>([]);
  const fetchAllBook = async () => {
    try {
      const response = await axiosInstance.get("/book/getallbook");
      console.log(response.data);
      if (response.status === 200) {
        setMyBook(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (bookId) => {
    // e.prevendefult ();
    try {
      const response = await axiosInstance.delete(`/book/deletebook/${bookId}`);
      {
        if (response.status === 200) {
          alert("Delete Success");
          window.location.href = "/allPost";
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllBook();
    console.log("my book ", myBook);
  }, []);
  return (
    <>
      <div className="bg-[#f9f9ff] px-32 py-10">
        {/* <div>
          {myBook.map((book, index) => {
            return (
              <div>
                <div>{book.book_title}</div>
                {book.salebook ? book.salebook.price : ""}
              </div>
            );
          })}
        </div> */}
        <div className="bg-white shadow-lg rounded-lg p-20">
          <h1 className="text-4xl font-cherry text-center mb-6">All Post</h1>
          <div className=" justify-center p-6">
            {myBook.map((book, index) => (
              <div
                key={index}
                className="flex items-start border border-gray-300 rounded-lg p-4 w-full shadow-md mb-6 bg-white"
              >
                {/* <img
                  src={book.images[0]}
                  alt={book.book_title}
                  className="w-28 h-28 object-cover rounded-md mr-4"
                /> */}
                <div className="flex w-full">
                  <div className="w-4/5">
                    <h3 className="text-lg font-bold text-gray-800">
                      {book.book_title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {book.book_author_name}
                    </p>
                    <p className="text-gray-900 font-bold text-lg">
                      {book.book_type}
                    </p>
                    <div className="flex mt-2 space-x-72">
                      <p className="text-sm text-gray-400 ">
                        {book.book_description
                          ? `${book.book_description}`
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      to={`/editPost/${book.book_id}`}
                      className=" px-4 h-10 bg-primary text-white rounded-full hover:bg-purple-700"
                    >
                      Edit Post
                    </Link>
                    <button
                      className=" px-4 h-10 bg-primary text-white rounded-full hover:bg-purple-700"
                      type="submit"
                      onClick={() => handleSubmit(book.book_id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
