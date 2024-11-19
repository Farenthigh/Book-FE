import Salebuttom from "../../assets/Salebuttom.png";
import Rentbuttom from "../../assets/Rentbuttom.png";
import RecHome from "./RecHome";

const SaleRentButton = () => {
  return (
    <>
        <div className="flex justify-center gap-28 mb-20">
        
        <a
            href="#"
            className="flex items-center justify-center w-96 p-6 border border-gray-300 rounded-lg text-4xl font-bold font-cherry  hover:bg-primarycontainer transition duration-300 shadow-md"
        >

            Sale
            <div className="p-10"></div>
            <img
            src={Salebuttom}
            alt="Sale Icon"
            className="w-28 h-24 mr-4"
            />
            
        </a>

        <a
            href="#"
            className="flex items-center justify-center w-96 p-6 border border-gray-300 rounded-lg text-4xl font-bold font-cherry  hover:bg-primarycontainer transition duration-300 shadow-md"
        >
            <img
            src={Rentbuttom}
            alt="Rent Icon"
            className="w-28 h-24 mr-4"
            />
            <div className=" p-8"></div>
            Rent
            
        </a>
        </div>
        <RecHome/>
    </>
  );
};

export default SaleRentButton;
