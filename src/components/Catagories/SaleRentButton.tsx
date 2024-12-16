import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Rentbuttom from "../../assets/Rentbuttom.png";
import Salebuttom from "../../assets/Salebuttom.png";
import { RENT_ROUTE, SALE_ROUTE, LOGIN_ROUTE } from "../../context/Route";
import RecHome from "./RecHome";
import { AuthContext } from "../../context/Auth";

const SaleRentButton = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProtectedAction = (route) => {
    if (auth?.auth.isAuth) {
      navigate(route);
    } else {
      navigate(LOGIN_ROUTE);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 lg:gap-28 mb-10 md:mb-20">
        <button
          onClick={() => handleProtectedAction(SALE_ROUTE)}
          className="flex flex-col md:flex-row items-center justify-center w-full max-w-md p-6 border border-gray-300 rounded-lg text-2xl md:text-3xl lg:text-4xl font-bold font-cherry hover:bg-primarycontainer transition duration-300 shadow-md"
        >
          <span>Sale</span>
          <div className=" p-8"></div>
          <img src={Salebuttom} alt="Sale Icon" className="w-20 h-20 md:w-28 md:h-24 mt-4 md:mt-0 md:ml-4" />
        </button>

        <button
          onClick={() => handleProtectedAction(RENT_ROUTE)}
          className="flex flex-col md:flex-row items-center justify-center w-full max-w-md p-6 border border-gray-300 rounded-lg text-2xl md:text-3xl lg:text-4xl font-bold font-cherry hover:bg-primarycontainer transition duration-300 shadow-md"
        >
          <img src={Rentbuttom} alt="Rent Icon" className="w-20 h-20 md:w-28 md:h-24 mb-4 md:mb-0 md:mr-4 " />
          <div className=" p-8"></div>
          <span>Rent</span>
        </button>
      </div>

      <RecHome />
    </>
  );
};

export default SaleRentButton;
