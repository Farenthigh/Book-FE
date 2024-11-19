import Slidebar from "../components/Catagories/Dropdown";
import RecommededSectionSale from "../components/Catagories/RecommededSectionSale";
import AllSectionSale from "../components/Catagories/AllSectionSale";
import Salebanner from "../components/Catagories/Salebanner";


const SalePage = () => {
 
 
  return (
    <div className="bg-[#f9f9ff] text-gray-800 px-24 py-8">
      <header className="text-xl ml-10 font-cherry mb-10 text-left">
        <span className="text-black">Sale Books</span>{" "}
        <span className="text-gray-400">/ Rental Books</span>
      </header>

      <div className="flex mx-10">
        
        <Slidebar setSelectedCategory={undefined} /> 

        {/* Main Content */}
        <main className="flex-1 ml-6">
          {/* Sale Banner */}
          <div className="p-3 border rounded-lg mb-10 items-center">
            <Salebanner />
          </div>

          
          <RecommededSectionSale />
          <div className="my-20"></div>
          <AllSectionSale />
         
      
        </main>
      </div>
    </div>
  );
};

export default SalePage;
