import banner1 from "../../assets/banner1.png";


const Salebanner = () => {

  return (
    <div className="w-full max-w-4xl mx-auto">
    <div>
        <img
          src={banner1}
          alt="Sale Banner"
          className="w-full h-72 object-cover rounded-lg"
        />
      </div>
  </div>
  );
};

export default Salebanner;
