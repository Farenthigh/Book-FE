import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import data from "../Catagories/Book.json"; 

function SlideAuthor({ setSelectedAuthor }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const authors = Array.from(new Set(data.map((item) => item.author)));

  const filteredAuthors = authors.filter((author) =>
    author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckboxChange = (author) => {
    setSelectedItems((prevSelectedItems) => {
      const isAlreadySelected = prevSelectedItems.includes(author);
      const updatedSelectedItems = isAlreadySelected
        ? prevSelectedItems.filter((item) => item !== author)
        : [...prevSelectedItems, author];

      setSelectedAuthor(updatedSelectedItems); 
      return updatedSelectedItems;
    });
  };

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
      {/* ช่องค้นหา */}
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

      {filteredAuthors.map((author, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`author-${index}`}
              className="mr-2 accent-primary"
              checked={selectedItems.includes(author)}
              onChange={() => handleCheckboxChange(author)}
            />
            <label
              htmlFor={`author-${index}`}
              className="font-cherry text-lg text-gray-700 cursor-pointer"
            >
              {author}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SlideAuthor;
