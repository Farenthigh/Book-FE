import { IoIosArrowBack } from "react-icons/io";
import DetailSaleBook from "../components/Catagories/DetailSaleBook";
import RecDetailSale from "../components/Catagories/RecDetailSale";

const DetailSalePage = () => {
  
  return (
    <div className="bg-[#f9f9ff] text-gray-800 min-h-screen px-24 py-">
      {/* Header */}
      <header className="flex items-center text-xl font-cherry mb-16 text-left">
        <IoIosArrowBack className="mr-2 text-2xl text-gray-700" />
        <span className="text-black">Back</span>
      </header>

      <DetailSaleBook/>
      <div className="my-20"></div>
      <RecDetailSale/>

    </div>
  );
};

export default DetailSalePage;
