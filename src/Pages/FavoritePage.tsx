import SaleFav from "../components/Favorite/SaleFav";
import RentFav from "../components/Favorite/RentFav";
import Footer from "../components/Footer/Footer";


const FavoritePage = () => {
  return (
    <div>
    <div className=" bg-[#f9f9ff] text-gray-800 px-24 py-8">
     <h3 className=" text-4xl font-cherry text-center ">My Favorite</h3>
      <div className="flex mx-10 mt-10 ">
        <main className="flex-1 ml-6 ">
          <SaleFav />
          <div className="my-20"></div>
          <RentFav  />
        </main>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default FavoritePage;
