import HowToRent1 from "../../assets/HowToRent1.png";
import HowToRent2 from "../../assets/HowToRent2.png";

function HowtoRent() {
  
  return (
    <div className="flex justify-center items-center bg-[#f9f9ff] px-32 py-10">
      <div className="w-full bg-white shadow-lg rounded-lg p-5">
        <div className="flex items-center justify-between mt-8 mb-10">
          <div className="flex-grow border-t-2 h-0.5 border-purple-200"></div>
          <h2 className="text-3xl font-cherry text-center mx-4">วิธีการเช่าหนังสือ</h2>
          <div className="flex-grow border-t-2 h-0.5 border-purple-200"></div>
        </div>
        <div className="w-full h-full ">
          <img src={HowToRent1} className="rounded-t-3xl" /> 
          <img src={HowToRent2} className="rounded-b-3xl" /> 
        </div>
      </div>
    </div>
  );
}

export default HowtoRent;
