import { useState } from "react";
// <<<<<<< HEAD

import Footer from "../components/Footer/Footer";

// =======
import arrowleft from "../assets/arrowleft.png";  
import arrowright from "../assets/arrowright.png"; 
import Icon from "../components/Catagories/Icon";
import SaleRentButtom from "../components/Catagories/SaleRentButton";
// >>>>>>> dc0efd5ebcfa9b3c3a6ed3a52f8e7590565116ed

const Homepage = () => {
  const [slide, setSlide] = useState<number>(0);
  const books = [
    {
      name: "Book title 1",
      imgUrl: "https://picsum.photos/seed/picsum/1500/500", 
      about: "Lorem ipsum dolor sit amet.",
    },
    {
      name: "Book title 2",
      imgUrl: "https://picsum.photos/seed/picsum/1500/500", 
      about: "At vero eos et accusamus et iusto odio",
    },
    {
      name: "Book title 3",
      imgUrl: "https://picsum.photos/seed/picsum/1500/500", 
      about: "Sed ut perspiciatis unde omnis iste.",
    },
  ];

  const handleSlideClick = (e: any) => {
    if (e.target.id === "arrowleft")
      return setSlide(slide === 0 ? 2 : slide - 1);  
    setSlide(slide === 2 ? 0 : slide + 1);  
  };

  return (
    <>
      
      <div className="p-5 font-serif flex justify-center gap-10">
        <div>BOOKS</div>
        <div>AUTHORS</div>
        <div>CONTACTS</div>
      </div>

      <div className="bg-[#f9f9ff] px-24 py-8">
        <div
          className="w-full h-96 flex flex-row justify-between items-center p-5"
          style={{
            backgroundImage: `url('${books[slide].imgUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img
            src={arrowleft}
            id="arrowleft"
            onClick={handleSlideClick}
            alt="Left Arrow"  
          />
          <div className="flex flex-col justify-center text-white">
            <div>
              <div className="font-cherry text-5xl">{books[slide].name}</div>
              <div className="font-cherry text-lg">{books[slide].about}</div>
            </div>
            <div className="flex justify-center">
              <button className="rounded-full px-5 bg-primary text-white h-8 w-15 text-sm">
                Explore more
              </button>
            </div>
          </div>
          <img
            src={arrowright}
            id="arrowright"
            onClick={handleSlideClick}
            alt="Right Arrow"  
          />
        </div>
      </div>

      <div className="p-5 bg-[#f9f9ff] text-center text-gray-800 px-24 py-8">
        <div className="mb-10">
          <Icon />
        </div>
        <div className="mb-10">
          <SaleRentButtom /> 
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
