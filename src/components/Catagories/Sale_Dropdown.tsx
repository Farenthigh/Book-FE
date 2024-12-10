import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import {Link} from "react-router-dom";
import { S_DETAIL_ROUTE } from "../../context/Route";
import data from "../Mockdata/Book.json"; 
function Slidebar({ setSelectedCategory }) {
  const [openCategories, setOpenCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Group data by category
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Filter categories and items based on the search term
  const filteredCategories = Object.keys(groupedData).filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    groupedData[category].some((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleToggle = (category) => {
    if (openCategories.includes(category)) {
      setOpenCategories(openCategories.filter((c) => c !== category));
    } else {
      setOpenCategories([...openCategories, category]);
    }
  };

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
      {/* Search Input */}
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

      {/* Data Mapping */}
      {filteredCategories.map((category) => (
        <div key={category} className="mb-4">
          {/* Category Title */}
          <button
            onClick={() => handleToggle(category)}
            className="flex items-center justify-between w-full text-xl font-cherry text-gray-900"
          >
            {category}
            {openCategories.includes(category) ? (
              <IoIosArrowUp className="h-5 w-5 text-gray-700" />
            ) : (
              <IoIosArrowDown className="h-5 w-5 text-gray-700" />
            )}
          </button>

          {/* Subcategories and Items */}
          {openCategories.includes(category) && (
            <div className="border-t border-gray-300 mt-2 pt-2">
              {/* Display the "All" link for a category */}
              <div
                className="py-1 pl-2 font-serif text-sm hover:text-purple-600 cursor-pointer transition-colors duration-200"
                onClick={() => setSelectedCategory(category)}
              >
                All {category}
              </div>

              {/* Map through books in the category */}
              {groupedData[category].map((item) => (
                <div
                  key={item.id}
                  className="py-1 pl-8 font-serif text-sm text-gray-700 hover:text-purple-600"
                >
                  <Link to= { S_DETAIL_ROUTE } >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Slidebar;

