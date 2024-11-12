import Sidebar from "../components/Catagories/Dropdown";
import RecommededSectionRent from "../../../RecommededSectionRent";
import AllSectionRent from "../components/Catagories/AllSectionRent";


const RentPage = () => {
 
 
  return (
    <div className="p-5 font-serif bg-[#f9f9ff] text-gray-800">
      <header className="text-xl ml-10 font-cherry mb-10 text-left">
        <span className="text-gray-400">Sale Books</span>{" "}
        <span className="text-black">/ Rental Books</span>
      </header>

      <div className="flex">
        
        <Sidebar /> 

        {/* Main Content */}
        <main className="flex-1 ml-6">
          {/* Sale Banner */}
          <div className="p-10 border rounded-lg mb-10 flex justify-between items-center">
            <div className="relative bg-gray-200 w-40 h-40 flex items-center justify-center">
              <img src="https://m.media-amazon.com/images/I/A19IrG90hBL._AC_UF1000,1000_QL80_.jpg" alt="Sale Banner" className="rounded-md"/>
            </div>
            <div className="text-3xl font-cherry">Sale 20%</div>
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
