import AllSectionSale from "../../SalePage/AllSectionSale";

const Books = () => {
  return (
    <div className="bg-[#f9f9ff] text-gray-800 px-24 py-8">
      <header className="text-3xl font-bold ml-10 font-cherry mb-10 text-left ">
        <span className="text-primary">BOOKS</span>
      </header>

      <div className="flex mx-10 mt-5">
        <main className="flex-1 ml-6">
          <AllSectionSale />
        </main>
      </div>
    </div>
  );
};

export default Books;
