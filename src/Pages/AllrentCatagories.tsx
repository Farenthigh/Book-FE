import Slidebar from "../components/Catagories/Dropdown";
import AllRentCategory from "../components/Catagories/AllRentCategory";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

const AllrentCatagories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="font-serif bg-[#f9f9ff] text-gray-800">
      <header className="flex items-center text-xl ml-10 font-cherry mb-10 text-left">
        <IoIosArrowBack />
        <span className="text-black">Rental Books</span>
      </header>

      <div className="flex mx-10 mt-5">
        <Slidebar  setSelectedCategory={setSelectedCategory} />

        <main className="flex-1 ml-6">
          <AllRentCategory selectedCategory={selectedCategory} />

        </main>
      </div>
    </div>
  );
};

export default AllrentCatagories;
