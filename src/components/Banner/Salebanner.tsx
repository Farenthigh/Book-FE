import { Link } from "react-router-dom";
import { Booklover_ROUTE, PROMOTION_ROUTE, DISCOUNT_ROUTE } from '../../context/Route'; 
import Slider from "react-slick";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Salebanner = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const sliderImages = [
    { image: banner1, link: Booklover_ROUTE },
    { image: banner2, link: PROMOTION_ROUTE },
    { image: banner3, link: DISCOUNT_ROUTE },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...sliderSettings}>
        {sliderImages.map((item, index) => (
          <div key={index}>
            <Link to={item.link}>
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-72 object-cover rounded-lg"
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Salebanner;
