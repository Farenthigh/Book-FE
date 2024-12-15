import banner3 from "../../assets/banner3.png";
import Heart from '../Catagories/Heart';
import Book from "../Mockdata/Book.json";

const Discount = () => {
    
  return (
    <>
      <div className="bg-[#f9f9ff] items-center mb-5 px-24 py-8">
        <div className="w-full mx-auto">
          <div className="p-5 border border-gray-300 rounded-lg">
            <img
              src={banner3}
              alt="Sale Banner"
              className="w-full h-96 object-cover rounded-lg"
            />
        </div>

        <div className=" mb-4 mt-20">
            <h2 className="text-4xl font-cherry mr-4 ">สิ้นค้าลดสูงสุด 35%</h2>
        </div>

        <div className="flex flex-col items-center">
            <div className="flex items-start relative justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {Book.filter((book) => book.price === 100).map((book, index) => (
                <div
                    key={index}
                    className="border rounded-lg p-4 text-center relative w-80 shadow-md" 
                >
                    <img src={book.images[0]} alt={book.title} className=" w-full h-48 object-contain rounded-md mb-2" /> 
                    <h3 className="text-sm font-cherry font-bold">{book.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                    <p className="p-4 text-left text-lg text-gray-700 font-bold ">{book.price} THB</p>
                    <div className="absolute top-2 right-2 flex items-center justify-center bg-gray-300 rounded-full w-8 h-8">
                    <Heart />
                    </div>
                    <button className=" mb-2 px-4 py-1 bg-primary font-cherry text-white rounded-full hover:bg-purple-600 transition">
                    Show details
                    </button>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
      </div>
      

    </>
  );
};

export default Discount;
