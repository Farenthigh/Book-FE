import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Salebanner from "../components/Banner/Salebanner";
import Slidebar from "../components/Catagories/Rent_Dropdown";
import Footer from "../components/Footer/Footer";
import AllRentCategory from "../components/RentPage/AllRentCategory";
import AllSectionRent from "../components/RentPage/AllSectionRent";
import RecommededSectionRent from "../components/RentPage/RecommededSectionRent";
import { SALE_ROUTE } from "../context/Route";
import { axiosInstance } from "../helper/axiosInstance";

const RentPage = () => {
  const [rentbook, setRentbooks] = useState<Allrentbooks[]>([]);
  const fetchrentbooks = async () => {
    try {
      const response = await axiosInstance.get("/book/getrentbooks");
      console.log(response.data);
      if (response.status === 200) {
        setRentbooks(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchrentbooks();
    console.log("rent book ", rentbook);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setIsCategorySelected(true);
  };

  useEffect(() => {
    fetchrentbooks();
    console.log("rent book ", rentbook);
  }, []);

  useEffect(() => {
    console.log("Selected category: ", selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <div className="bg-[#f9f9ff] text-gray-800 px-24 py-8">
        <header className="text-xl ml-10 font-cherry mb-10 text-left">
          <Link to={SALE_ROUTE} className="text-gray-400">
            Sale Books
          </Link>{" "}
          <span className="text-black">/ Rental Books</span>
        </header>

        <div className="flex mx-10 mt-5">
          <Slidebar setSelectedCategory={handleCategorySelection} />

          <main className="flex-1 ml-6">
            {!isCategorySelected ? (
              <main className="flex-1 ml-6">
                <div className="p-3 border rounded-lg mb-10 items-center">
                  <Salebanner />
                </div>
                {/* <RecommededSectionRent /> */}
                {/* <div className="my-20"></div> */}
                <AllSectionRent />
              </main>
            ) : (
              <AllRentCategory selectedCategory={selectedCategory} />
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default RentPage;
