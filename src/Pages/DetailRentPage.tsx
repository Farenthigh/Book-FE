import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import DetailRentBook from "../components/DatailBook/DetailRentBook";
// import RecDetailRent from "../components/DatailBook/RecDetailRent";
import Footer from "../components/Footer/Footer";

const DetailRentPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#f9f9ff] text-gray-800 min-h-screen px-24 py-">
        {/* Header */}
        <header className="flex items-center text-xl font-cherry mb-16 text-left">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-700 hover:text-black"
          >
            <IoIosArrowBack className="mr-2 text-2xl" />
            <span>Back</span>
          </button>
        </header>

        <DetailRentBook />
        {/* <div className="my-20"></div> */}
        {/* <RecDetailRent /> */}
      </div>
      {/* <div className="my-20"></div> */}
      <Footer />
    </div>
  );
};

export default DetailRentPage;
