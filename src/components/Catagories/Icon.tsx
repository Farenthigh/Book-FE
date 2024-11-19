import Rent from "../../assets/Rent.png";
import Buy from "../../assets/Buy.png";
import Return from "../../assets/Return.png";
import Detail from "../../assets/Detail.png";

const Icon = () => {
  const topIcons = [
    {
      src: Buy,
      label: "HOW TO BUY"
    },
    {
      src: Rent,
      label: "HOW TO RENT",
    },
    {
      src: Return,
      label: "HOW TO RETURN",
    },
    {
      src: Detail,
      label: "ORDER DETAIL",
    },
  ];

  return (
    <div className="p-5 font-serif font-xl font-bold bg-[#f9f9ff] text-center text-gray-800 px-24 py-8">
      <div className="flex justify-around gap-10">
        {topIcons.map((icon, index) => (
          <div key={index} className="text-center text-sm">
            <div className="w-40 h-40 mx-auto rounded-full border shadow-md flex items-center justify-center hover:scale-110 hover:bg-primarycontainer">
              <img
                src={icon.src}
                alt={icon.label}
                className="w-28 h-28 object-contain transform transition-transform duration-200 "
              />
            </div>
            <p className="mt-2">{icon.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icon;
