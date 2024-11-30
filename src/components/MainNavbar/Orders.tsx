import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import data from "../Catagories/Book.json";

function Slidebar({ setSelectedCategory }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  // Group data by category
  const groupedData = data.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleItemCheckboxChange = (name) => {
    setSelectedItems((prevSelectedItems) => {
      const isAlreadySelected = prevSelectedItems.includes(name);
      const updatedSelectedItems = isAlreadySelected
        ? prevSelectedItems.filter((item) => item !== name)
        : [...prevSelectedItems, name];

      setSelectedCategory(updatedSelectedItems);
      return updatedSelectedItems;
    });
  };

  const handleAllCategoryCheckboxChange = (category, books) => {
    const allBookTitles = books.map((book) => book.title);
    const allSelected = allBookTitles.every((title) =>
      selectedItems.includes(title)
    );

    const updatedItems = allSelected
      ? selectedItems.filter((item) => !allBookTitles.includes(item)) // Uncheck all
      : [...new Set([...selectedItems, ...allBookTitles])]; // Check all

    setSelectedItems(updatedItems);
    setSelectedCategory(updatedItems);
  };

  const filteredGroupedData = Object.entries(groupedData).reduce(
    (acc, [category, books]) => {
      const filteredBooks = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filteredBooks.length > 0) {
        acc[category] = filteredBooks;
      }
      return acc;
    },
    {}
  );

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
      {/* Search Box */}
      <div className="mb-6 relative">
        <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search here"
          className="w-full p-2 pl-8 rounded-md bg-purple-100 text-gray-700 placeholder-gray-500 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {/* Grouped Checkbox List */}
        {Object.entries(filteredGroupedData).map(([category, books], index) => (
          <div key={index} className="mb-6">
            {/* Category Title */}
            <div className="text-lg font-bold text-gray-900 mb-2">
              {category}
            </div>

            {/* All Checkbox for Category */}
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`all-${category}`}
                className="mr-2"
                checked={books
                  .map((book) => book.title)
                  .every((title) => selectedItems.includes(title))}
                onChange={() =>
                  handleAllCategoryCheckboxChange(category, books)
                }
              />
              <label
                htmlFor={`all-${category}`}
                className="text-sm text-gray-800 cursor-pointer"
              >
                All {category}
              </label>
            </div>

            {/* Books in Category */}
            {books.map((book, bookIndex) => (
              <div key={bookIndex} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`book-${index}-${bookIndex}`}
                  className="mr-2"
                  checked={selectedItems.includes(book.title)}
                  onChange={() => handleItemCheckboxChange(book.title)}
                />
                <label
                  htmlFor={`book-${index}-${bookIndex}`}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {book.title}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slidebar;
