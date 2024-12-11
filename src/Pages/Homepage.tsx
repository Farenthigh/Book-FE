
import banner4 from "../assets/banner4.png";
import SaleRentButtom from "../components/Catagories/SaleRentButton";
import Footer from "../components/Footer/Footer";


const Homepage = () => {
  

  return (
    <>
      <div className="bg-[#f9f9ff]">
        <div className="bg-[#f9f9ff] items-center mb-5 px-24 py-8">
          <div className="w-full mx-auto">
            <div className="p-5 border border-gray-300 rounded-lg">
              <img
                src={banner4}
                alt="Sale Banner"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>
            <div className="mt-10">
              <SaleRentButtom /> 
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
