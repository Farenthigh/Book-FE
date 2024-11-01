import { useState } from "react";
import arrowleft from "../assets/arrowleft.png";
import arrowright from "../assets/arrowright.png";

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
        <div>BOOK</div>
        <div>AUTHORS</div>
        <div>CONTACTS</div>
      </div>
      <div
        className={`w-full h-96 flex flex-row justify-between items-center -z-10 bg-cover bg-[url('${books[slide].imgUrl}')] p-5`}
      >
        <img src={arrowleft} id="arrowleft" onClick={handleSlideClick} />
        <div className="flex flex-col justify-center">
          <div>
            <div className="font-cherry text-5xl">{books[slide].name}</div>
            <div className="font-cherry text-lg">{books[slide].about}</div>
          </div>
          <div className="flex justify-center">
            <button className="rounded-full  px-5 bg-primary text-white h-10 w-15 text-sm">
              Explore more
            </button>
          </div>
        </div>
        <img src={arrowright} onClick={handleSlideClick} id="arrowright" />{" "}
      </div>
    </>
  );
};

export default Homepage;
