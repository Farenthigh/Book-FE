import { useState } from "react";
import data from "../../Mockdata/Book.json";
import Heart from "../../Catagories/Heart";

function AllBooks({ selectedBooks }) {
  const [activeTab, setActiveTab] = useState("SALE");

  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2">
        <button
          onClick={() => setActiveTab("SALE")}
          className={`text-lg font-cherry ${
            activeTab === "SALE" ? "text-primary" : "text-gray-500"
          }`}
        >
          SALE
        </button>
        <button
          onClick={() => setActiveTab("RENT")}
          className={`text-lg font-cherry ${
            activeTab === "RENT" ? "text-primary" : "text-gray-500"
          }`}
        >
          RENT
        </button>
      </div>
      <div className="border-b-2 border-primary w-full my-2"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data
          .filter((book) => selectedBooks.includes(book.title))
          .map((book) => (
            <div
              key={book.id}
              className="border rounded-lg p-4 text-center relative shadow-md"
            >
              <img
                src={book.images[0]}
                alt={book.title}
                className="w-full h-48 object-contain rounded-md mb-2"
              />
              <h3 className="text-sm font-cherry">{book.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{book.author}</p>
              {activeTab === "RENT" ? (
                <p
                  className={`p-4 text-right text-lg font-bold ${
                    book.status === "Rented" ? "text-rented" : "text-available"
                  }`}
                >
                  {book.status}
                </p>
              ) : (
                <p className="p-4 text-left text-lg text-gray-700 font-bold">{book.price} THB</p>
              )}
              <div className="absolute top-2 right-2 flex items-center justify-center bg-gray-300 rounded-full w-8 h-8">
                <Heart />
              </div>
              <button className="mt-2 mb-2 px-4 py-1 bg-primary font-cherry text-white rounded-full hover:bg-purple-600 transition">
                Show details
              </button>
            </div>
          ))}
        {selectedBooks.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No books selected.
          </p>
        )}
      </div>
    </div>
  );
}

export default AllBooks;