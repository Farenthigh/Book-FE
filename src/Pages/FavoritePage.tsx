import SaleFav from "../components/Catagories/SaleFav";
import RentFav from "../components/Catagories/RentFav";

const FavoritePage = () => {


  return (
    <div className=" bg-[#f9f9ff] text-gray-800">
     <h3 className=" text-4xl font-cherry text-center ">My Favorite</h3>

      <div className="flex mx-10 mt-10 ">
        <main className="flex-1 ml-6 ">
          <SaleFav />
          <div className="my-20"></div>
          <RentFav  />

        </main>
      </div>
    </div>
  );
};

export default FavoritePage;
