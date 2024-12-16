import Slidebar from "../components/Catagories/Sale_Dropdown";
import AllSaleCategory from "../components/SalePage/AllSaleCategory";
import RecommededSectionSale from "../components/SalePage/RecommededSectionSale";
import AllSectionSale from "../components/SalePage/AllSectionSale";
import Salebanner from "../components/Banner/Salebanner";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RENT_ROUTE } from "../context/Route";
import Footer from "../components/Footer/Footer";
import { div } from "framer-motion/client";

const SalePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setIsCategorySelected(true);
  };

  return (
    <div>
      <div className="bg-[#f9f9ff] text-gray-800 px-24 py-8">
        <header className="text-xl ml-10 font-cherry mb-10 text-left">
          <span className="text-black">Sale Books</span>{" "}
          <Link to={RENT_ROUTE} className="text-gray-400">
            / Rental Books
          </Link>
        </header>

        <div className="flex mx-10 mt-5">
          <Slidebar setSelectedCategory={handleCategorySelection} />

          <main className="flex-1 ml-6">
            {!isCategorySelected ? (
              <main className="flex-1 ml-6">
                <div className="p-3 border rounded-lg mb-10 items-center">
                  <Salebanner />
                </div>
                {/* <RecommededSectionSale /> */}
                {/* <div className="my-20"></div> */}
                <AllSectionSale />
              </main>
            ) : (
              <AllSaleCategory selectedCategory={selectedCategory} />
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SalePage;
