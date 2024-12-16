import { Link } from "react-router-dom";
import Rent from "../../assets/Rent.png";
import Buy from "../../assets/Buy.png";
import Return from "../../assets/Return.png";
import PaymentMet from "../../assets/PaymentMet.png";

const Icon = () => {
  const topIcons = [
    {
      src: Buy,
      label: "HOW TO BUY",
      link: "/how-to-buy",
    },
    {
      src: Rent,
      label: "HOW TO RENT",
      link: "/how-to-rent",
    },
    {
      src: Return,
      label: "HOW TO RETURN",
      link: "/how-to-return",
    },
    {
      src: PaymentMet,
      label: "PAYMENT METHOD",
      link: "/payment-method",
    },
  ];

  return (
    <div className="p-5 bg-[#f9f9ff] text-center text-gray-800 px-4 md:px-24 py-8 font-serif font-bold">
      <div className="flex flex-wrap justify-center gap-10 md:gap-32">  
        {topIcons.map((icon, index) => (
          <Link to={icon.link} key={index} className="text-center text-sm">
            <div className="w-40 h-40 md:w-40 md:h-40 mx-auto rounded-full border shadow-md flex items-center justify-center hover:scale-110 hover:bg-primarycontainer transition-transform duration-300">
              <img
                src={icon.src}
                alt={icon.label}
                className="w-28 h-28 md:w-28 md:h-28 object-contain"
              />
            </div>
            <p className="mt-4 text-base">{icon.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Icon;
