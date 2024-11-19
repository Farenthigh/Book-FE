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

 
  const sliderImages = [banner1, banner2, banner3];

  return (
    <div className="w-full max-w-4xl mx-auto">
    <Slider {...sliderSettings}>
      {sliderImages.map((image, index) => (
        <div key={index}>
          <img
            src={image} 
            alt={`Slide ${index + 1}`}
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default Salebanner;
