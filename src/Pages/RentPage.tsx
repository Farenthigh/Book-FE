import Slidebar from "../components/Catagories/Dropdown";
import RecommededSectionRent from "../components/Catagories/RecommededSectionRent";
import AllSectionRent from "../components/Catagories/AllSectionRent";
import Salebanner from "../components/Catagories/Salebanner";

const RentPage = () => {
 
 
  return (
    <div className="bg-[#f9f9ff] text-gray-800 px-24 py-8">
      <header className="text-xl ml-10 font-cherry mb-10 text-left">
        <span className="text-gray-400">Sale Books</span>{" "}
        <span className="text-black">/ Rental Books</span>
      </header>

      <div className="flex mx-10">
        
        <Slidebar setSelectedCategory={undefined} /> 

        {/* Main Content */}
        <main className="flex-1 ml-6">
          {/* Sale Banner */}
          <div className="p-3 border rounded-lg mb-10 items-center">
            <Salebanner />
          </div>
          
          <RecommededSectionRent />
          <div className="my-20"></div>
          <AllSectionRent />
         
      
        </main>
      </div>
    </div>
  );
};

export default RentPage;
