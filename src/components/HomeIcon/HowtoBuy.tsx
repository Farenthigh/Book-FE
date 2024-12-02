
import Salebutton from "../../assets/Salebutton.png";
import DetailSale from "../../assets/DetailSale.png";
import Salebook from "../../assets/Salebook.png";
import Checkout from "../../assets/Checkout.png";
import Payment from "../../assets/Payment.png";

const HowtoBuy = () => {
  const topHowtoBuys = [
    {
      src: Salebutton,
      label: "HOW TO BUY"
    },
    {
      src: Salebook,
      label: "HOW TO RENT",
    },
    {
      src: DetailSale,
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
      <h1 className="mb-10">HOW TO BUY</h1>
      <div className="flex justify-around gap-10">
        {topHowtoBuys.map((icon, index) => (
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

export default HowtoBuy;
