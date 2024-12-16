import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import data from "../../Mockdata/Book.json";

function SlidePub({ setSelectedPublisher, setFilteredBooks }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const groupedData = data.reduce((acc, item) => {
    const publisher = item.publisher.toLowerCase();
    if (!acc[publisher]) {
      acc[publisher] = {
        publisher: item.publisher,
        books: [],
      };
    }
    acc[publisher].books.push(item);
    return acc;
  }, {});

  const publishers = Object.values(groupedData);

  const filteredPublishers = publishers.filter((group) =>
    group.publisher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePublisherChange = (publisher, groupBooks) => {
    setSelectedItems((prevSelectedItems) => {
      const isAlreadySelected = prevSelectedItems.includes(publisher);
      const updatedSelectedItems = isAlreadySelected
        ? prevSelectedItems.filter((item) => item !== publisher)
        : [...prevSelectedItems, publisher];

      setSelectedPublisher(updatedSelectedItems);
      setFilteredBooks(
        updatedSelectedItems.length === 0
          ? []
          : Object.values(groupedData)
              .filter((group) => updatedSelectedItems.includes(group.publisher))
              .flatMap((group) => group.books)
      );
      return updatedSelectedItems;
    });
  };

  return (
    <div className="w-full sm:w-64 p-4 bg-white rounded-lg shadow-md">
      <div className="mb-6 relative">
        <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search publishers"
          className="w-full p-2 pl-8 rounded-md bg-purple-100 text-gray-700 placeholder-gray-500 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredPublishers.map((group, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`publisher-${index}`}
              className="mr-2 accent-primary"
              checked={selectedItems.includes(group.publisher)}
              onChange={() => handlePublisherChange(group.publisher, group.books)}
            />
            <label
              htmlFor={`publisher-${index}`}
              className="font-cherry text-lg text-gray-700 cursor-pointer"
            >
              {group.publisher}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SlidePub;
