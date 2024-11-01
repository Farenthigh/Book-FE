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

  const topIcons = [
    {
      src: "https://cdn-icons-png.flaticon.com/512/478/478096.png",
      label: "HOW TO BUY",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBe4QNyaLp7tVX01qQ2UmLroFWRpVx2C3wVQ&s",
      label: "HOW TO RENT",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmIhLmF4HMyD-hmRU3Fn3WXwkhOnpORXFiQ&s",
      label: "HOW TO RETURN",
    },
    {
      src: "https://static.thenounproject.com/png/5422159-200.png",
      label: "ORDER DETAIL",
    },
  ];

  const recommendedBooks = [
    {
      src: "https://mp-static.se-ed.com/physical/cover/wcubtiofyaw78fbnsn95/image/bgzu6g7l",
      title: "ปรมาจารย์ลัทธิมาร ฉบับการ์ตูน เล่ม 1",
    },
    {
      src: "https://mp-static.se-ed.com/physical/cover/t3kgrccba1ute7xxwy7s/image/4khlmw3w",
      title: "บ้านวิกล เล่ม 1",
    },
    {
      src: "https://mp-static.se-ed.com/physical/cover/nb5f1f65cinrjc9x3z20/image/rtk24mmk",
      title: "การ์ตูน Day off รักเธอไม่มีวันหยุด",
    },
    {
      src: "https://mp-static.se-ed.com/physical/cover/hgha1l0fa7m3icgqw1h8/image/8qkc5tm7",
      title: "ปาฏิหาริย์ร้านชำของคุณนามิยะ",
    },
    {
      src: "https://mp-static.se-ed.com/physical/cover/ark0xy4qxp3fbr5ep9u5/image/wgj5jz7a",
      title: "อิคิไก THE LITTLE BOOK IKIGAI",
    },
  ];


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

      <div className="p-5 font-serif bg-[#f9f9ff] text-center text-gray-800">
        <div className="flex justify-around mt-30 mb-20">
          {topIcons.map((icon, index) => (
            <div key={index} className="text-center text-sm">
              <img
                src={icon.src}
                alt={icon.label}
                className="w-20 h-20 mx-auto mb-2 transform transition-transform duration-200 hover:scale-110"
              />
              <p>{icon.label}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-40 mb-20">
          <a
            href="#"
            className="flex items-center justify-between w-80 p-8 border border-gray-400 rounded-lg text-3xl font-cherry bg-[#f5f5ff] hover:bg-purple-100 transition-transform duration-300 shadow-md transform hover:-translate-y-1"
          >
            Sale
            <img
              src="https://clipart-library.com/images_k/book-transparent-background/book-transparent-background-13.jpg"
              alt="Sale Icon"
              className="w-20 h-20"
            />
          </a>
          <a
            href="#"
            className="flex items-center justify-between w-80 p-8 border border-gray-400 rounded-lg text-3xl font-cherry bg-[#f5f5ff] hover:bg-purple-100 transition-transform duration-300 shadow-md transform hover:-translate-y-1"
          >
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtNjAzLWVsZW1lbnQtMTg2LnBuZw.png"
              alt="Rent Icon"
              className="w-20 h-20"
            />
            Rent
          </a>
        </div>

        <div className="text-left px-10">
          <div className="flex items-center text-3xl font-cherry ">
            <span>Recommend</span>
            <span className="flex-grow ml-4 border-b-2 border-purple-300"></span>
          </div>
          <div className="flex justify-between mt-5 ">
            {recommendedBooks.map((book, index) => (
              <div
                key={index}
                className="text-center text-sm text-gray-700 transform transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={book.src}
                  alt={book.title}
                  className="w-20 h-20 mx-auto mb-2 rounded shadow-md"
                />
                <p>{book.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-right pr-5 ">
          <a
            href="#"
            className="text-purple-400 hover:underline transition-colors duration-200"
          >
            See All
          </a>
        </div>
      </div>
    </>
  );
};

export default Homepage;
