import SlideBook from "./SlideBook"
import { useState } from "react";
import AllBooks from "./AllBooks";

const Books = () => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  return (
    <div className="bg-[#f9f9ff] text-gray-800 px-24 py-8">
      <header className="text-3xl font-bold ml-10 font-cherry mb-10 text-left ">
        <span className="text-primary">BOOKS</span>
      </header>

      <div className="flex mx-10 mt-5">
         <SlideBook setSelectedBooks={setSelectedBooks} />

        <main className="flex-1 ml-6">
          <AllBooks selectedBooks={selectedBooks} />

        </main>
      </div>
    </div>
    
  );
};

export default Books;

