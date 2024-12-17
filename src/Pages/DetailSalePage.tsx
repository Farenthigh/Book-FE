import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DetailSaleBook from "../components/DatailBook/DetailSaleBook";
import RecDetailSale from "../components/DatailBook/RecDetailSale";
import Footer from "../components/Footer/Footer";

const DetailSalePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-[#f9f9ff] text-gray-800 min-h-screen px-24 py-">
        {/* Header */}
        <header className="flex items-center text-xl font-cherry mb-16 text-left">
          <IoIosArrowBack
            className="mr-2 text-2xl text-gray-700 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <span
            className="text-black cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Back
          </span>
        </header>

        <DetailSaleBook />
        {/* <div className="my-20"></div>
        <RecDetailSale /> */}
      </div>
      {/* <div className="my-20"></div> */}
      <Footer />
    </div>
  );
};

export default DetailSalePage;
