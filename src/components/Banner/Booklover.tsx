import banner1 from "../../assets/banner1.png";

const Booklover = () => {
    
  return (
    <>
      <div className="bg-[#f9f9ff] items-center mb-5 px-24 py-8">
        <div className="w-full mx-auto">
          <div className="p-5 border border-gray-300 rounded-lg">
            <img
              src={banner1}
              alt="Sale Banner"
              className="w-full h-full object-cover rounded-lg"
            />
            </div>
        </div>
      </div>
    </>
  );
};

export default Booklover;
