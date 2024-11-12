import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import data from "./list.json";

function Slidebar({ setSelectedCategory }) {
  const [openIndices, setOpenIndices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggle = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.subNav.some((subItem) =>
      subItem.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md">
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

      {filteredData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => handleToggle(index)}
            className="flex items-center justify-between w-full text-xl font-cherry text-gray-900"
          >
            {item.title}
            {openIndices.includes(index) ? (
              <IoIosArrowUp className="h-5 w-5 text-gray-700" />
            ) : (
              <IoIosArrowDown className="h-5 w-5 text-gray-700" />
            )}
          </button>

          {openIndices.includes(index) && (
            <div className="border-t border-gray-300 mt-2 pt-2">
              <div
                className="py-1 pl-2 font-serif text-sm hover:text-purple-600 cursor-pointer transition-colors duration-200"
                onClick={() => setSelectedCategory(item.title)} 
              >
                {item.allSub}
              </div>
              {item.subNav.map((subItem, subIndex) => (
                <div key={subIndex} className="py-1 pl-8 font-serif text-sm text-gray-700">
                  {subItem.title} 
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
