import Rentbutton from "../../assets/Rentbutton.png";
import Rentbook from "../../assets/Rentbooke.png";
import DetailRent1 from "../../assets/DetailRent1.png";
import DetailRent2 from "../../assets/DetailRent2.png";
import Checkout from "../../assets/Checkout.png";
import Payment from "../../assets/Payment.png";

const HowtoReturn = () => {
  const topHowtoReturns = [
    {
      src: Rentbutton,
      label: "HOW TO BUY"
    },
    {
      src: Rentbook,
      label: "HOW TO RENT",
    },
    {
      src: DetailRent1,
      label: "HOW TO RETURN",
    },
    {
      src: DetailRent2,
      label: "HOW TO RETURN",
    },
    {
      src: Checkout,
      label: "ORDER DETAIL",
    },
    {
      src: Payment,
      label: "ORDER DETAIL",
    },
  ];

  return (
    <div className="p-5 font-serif font-xl font-bold bg-[#f9f9ff] text-center text-gray-800 px-24 py-8">
      <h1 className="mb-10">HOW TO RETURN</h1>
      <div className="flex justify-around gap-10">
        {topHowtoReturns.map((icon, index) => (
          <div key={index} className="text-center text-sm">
            <div className="w-60 h-60 mx-auto rounded-full bg-primarycontainer border shadow-md flex items-center justify-center ">
              <img
                src={icon.src}
                alt={icon.label}
                className="w-20 h-20 object-contain transform transition-transform duration-200 "
              />
            </div>
            <p className="mt-2">{icon.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowtoReturn;
