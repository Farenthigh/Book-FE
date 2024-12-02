import { useState } from "react";
import SlidePub from "./SlidePub"; 
import PubBooks from "./PubBooks"; 

function Publishers() {
  const [, setSelectedPublisher] = useState([]); 
  const [filteredBooks, setFilteredBooks] = useState([]); 

  return (
    <div className="bg-[#f9f9ff] text-gray-800 px-24 py-8">
      <header className="text-3xl font-bold ml-10 font-cherry mb-10 text-left">
        <span className="text-primary">Publisher</span>
      </header>
      
      <div className="flex mx-10 mt-5">
        <SlidePub setSelectedPublisher={setSelectedPublisher} setFilteredBooks={setFilteredBooks} />
        
        <main className="flex-1 ml-6">
          <PubBooks filteredBooks={filteredBooks} />
        </main>
      </div>
    </div>
  );
}

export default Publishers;
