import Heart from "./Heart";
import Book from "./Book.json";

function RecDetailSale() {
 
  return (
    <section>
      <div className="flex items-center mb-4">
        <h2 className="text-3xl font-cherry mr-4 whitespace-nowrap">Recommended</h2>
        <div className="flex-grow h-0.5 bg-purple-200"></div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-start relative justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {Book.slice(0, 4).map((book, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 text-center relative w-80 shadow-md" 
              >
                <img src={book.images[0]} alt={book.title} className=" w-full h-48 object-contain rounded-md mb-2" /> 
                <h3 className="text-sm font-cherry font-bold">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                <p className="p-4 text-left text-lg text-gray-700 font-bold ">{book.price} THB</p>
                
                <div className="absolute top-2 right-2 flex items-center justify-center bg-gray-300 rounded-full w-8 h-8">
                  <Heart/>
                </div>
                <button className="mt-2 mb-2 px-4 py-1 bg-primary font-cherry text-white rounded-full hover:bg-purple-600 transition">
                  Show details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecDetailSale;
