import HowToBuy from "../../assets/HowToBuy.png";


function HowtoBuy() {
  

  return (
    <div className="flex justify-center items-center bg-[#f9f9ff] px-32 py-10">
      <div className="w-full bg-white shadow-lg rounded-lg p-5 mb-20">
        <div className="flex items-center justify-between mt-8 mb-10">
          <div className="flex-grow border-t-2 h-0.5 border-purple-200"></div>
          <h2 className="text-3xl font-cherry text-center mx-4">วิธีการสั่งซื้อหนังสือ</h2>
          <div className="flex-grow border-t-2 h-0.5 border-purple-200"></div>
        </div>
        <img src={HowToBuy} className=" w-full h-full mb-2 rounded-3xl" /> 
      </div>
    </div>
  );
}

export default HowtoBuy;
