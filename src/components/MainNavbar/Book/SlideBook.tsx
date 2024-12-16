import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import data from "../../Mockdata/Book.json";

function SlideBook({ setSelectedBooks }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

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

      setSelectedBooks(updatedSelectedItems);
      return updatedSelectedItems;
    });
  };

  const handleAllCategorySelection = (category, books) => {
    const allBookTitles = books.map((book) => book.title);
    const allSelected = allBookTitles.every((title) =>
      selectedItems.includes(title)
    );

    const updatedItems = allSelected
      ? selectedItems.filter((item) => !allBookTitles.includes(item))
      : [...new Set([...selectedItems, ...allBookTitles])];

    setSelectedItems(updatedItems);
    setSelectedBooks(updatedItems);
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
    <div className="w-full sm:w-64 p-4 bg-white rounded-lg shadow-md">
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

      {Object.entries(filteredGroupedData).map(([category, books], index) => (
        <div key={index} className="mb-6">
          <div className="text-xl font-cherry text-gray-900 cursor-pointer mb-2">{category}</div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`all-${category}`}
              className="mr-2 accent-primary"
              checked={books
                .map((book) => book.title)
                .every((title) => selectedItems.includes(title))}
              onChange={() => handleAllCategorySelection(category, books)}
            />
            <label
              htmlFor={`all-${category}`}
              className="font-serif text-base cursor-pointer text-gray-800"
            >
              All {category}
            </label>
          </div>

          <div className="ml-6 mt-2">
            {books.map((book, bookIndex) => (
              <div key={bookIndex} className="flex items-center mt-1">
                <input
                  type="checkbox"
                  id={`book-${index}-${bookIndex}`}
                  className="mr-2 accent-primary"
                  checked={selectedItems.includes(book.title)}
                  onChange={() => handleItemCheckboxChange(book.title)}
                />
                <label
                  htmlFor={`book-${index}-${bookIndex}`}
                  className="font-serif text-sm cursor-pointer text-gray-700"
                >
                  {book.title}
                </label>
              </div>
            ))}
          </div>
          <div className="h-0.5 bg-purple-200 mt-5"></div>
        </div>
      ))}
    </div>
  );
}

export default SlideBook;