import { IoIosArrowBack } from "react-icons/io";
import DetailRentBook from "../components/DatailBook/DetailRentBook";
import RecDetailRent from "../components/DatailBook/RecDetailRent";

const DetailRentPage = () => {
  
  return (
    <div className="bg-[#f9f9ff] text-gray-800 min-h-screen px-24 py-">
      {/* Header */}
      <header className="flex items-center text-xl font-cherry mb-16 text-left">
        <IoIosArrowBack className="mr-2 text-2xl text-gray-700" />
        <span className="text-black">Back</span>
      </header>

      <DetailRentBook/>
      <div className="my-20"></div>
      <RecDetailRent/>

    </div>
  );
};

export default DetailRentPage;
