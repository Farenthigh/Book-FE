import { Link } from "react-router-dom";
import Rentbuttom from "../../assets/Rentbuttom.png";
import Salebuttom from "../../assets/Salebuttom.png";
import { RENT_ROUTE, SALE_ROUTE } from "../../context/Route";
import RecHome from "./RecHome";

const SaleRentButton = () => {
  return (
    <>
      <div className="flex justify-center gap-28 mb-20">
        <Link
          to={SALE_ROUTE}
          className="flex items-center justify-center w-96 p-6 border border-gray-300 rounded-lg text-4xl font-bold font-cherry  hover:bg-primarycontainer transition duration-300 shadow-md"
        >
          Sale
          <div className="p-10"></div>
          <img src={Salebuttom} alt="Sale Icon" className="w-28 h-24 mr-4" />
        </Link>

        <Link
          to={RENT_ROUTE}
          className="flex items-center justify-center w-96 p-6 border border-gray-300 rounded-lg text-4xl font-bold font-cherry  hover:bg-primarycontainer transition duration-300 shadow-md"
        >
          <img src={Rentbuttom} alt="Rent Icon" className="w-28 h-24 mr-4" />
          <div className=" p-8"></div>
          Rent
        </Link>
      </div>
      <RecHome />
    </>
  );
};

export default SaleRentButton;
