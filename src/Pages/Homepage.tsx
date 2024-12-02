import SaleRentButtom from "../components/Catagories/SaleRentButton";
import banner4 from "../assets/banner4.png";
import Footer from "../components/Footer/Footer";






const Homepage = () => {
  
  return (
    <>
      <div className="bg-[#f9f9ff]">
        <div className="p-5 font-serif flex justify-center gap-10">
          <div>BOOK</div>
          <div>AUTHOR</div>
          <div>PUBLISHER</div>
        </div>

      
        <div className=" items-center mb-5 px-24 py-8">
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
