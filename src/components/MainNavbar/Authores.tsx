import { useState } from "react";
import SlideAuthor from "./SlideAuthor";
import AuthorBooks from "./AuthorBook";

function AuthorPage() {
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  return (
    
    <div className="bg-[#f9f9ff] text-gray-800 px-24 py-8">
      <header className="text-3xl font-bold ml-10 font-cherry mb-10 text-left ">
        <span className="text-primary">AUTHOR</span>
      </header>
      
      <div className="flex mx-10 mt-5">
        <SlideAuthor  setSelectedAuthor={setSelectedAuthors} />
      
        <main className="flex-1 ml-6">
          <AuthorBooks selectedAuthors={selectedAuthors} />
        </main>
      </div>
    </div>
  );
}

export default AuthorPage;
