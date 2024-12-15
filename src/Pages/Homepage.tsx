import Icon from "../components/HomeIcon/Icon";
import SaleRentButtom from "../components/Catagories/SaleRentButton";
import Footer from "../components/Footer/Footer";
import Bookslide from "../components/Catagories/Bookslide";



const Homepage = () => {
  

  return (
    <>
      <div className="bg-[#f9f9ff]">
      <Bookslide/>
        <div className="bg-[#f9f9ff] items-center mb-5 px-24 py-8">
          <div className="w-full mx-auto">
            <div className="mt-5">
              <Icon />
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
