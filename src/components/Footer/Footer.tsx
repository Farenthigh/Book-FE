import "./Footer.css";
import { FaPhoneAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const FooterSection = ({ title, items }) => (
  <div className="w-full md:w-[150px]">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    {items.map((item, index) => (
      <p key={index} className="cursor-pointer hover:underline text-sm md:text-base">
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-primarycontainer p-5">
      <div className="flex flex-col md:flex-row bg-white shadow-xl mx-auto max-w-7xl p-8 md:justify-around px-6 md:px-24 py-6 md:py-10 gap-8 md:gap-0">
        
        {/* Contact Section */}
        <div className="w-full md:w-[400px]">
          <div className="flex items-start pb-2">
            <TbWorld size={25} />
            <span className="pl-5 self-center text-sm md:text-base">www.booklover.com</span>
          </div>
          <div className="flex items-start pb-2">
            <FaPhoneAlt size={20} />
            <span className="pl-5 self-center text-sm md:text-base">094-7767288</span>
          </div>
          <div className="flex items-start pb-2">
            <a href="https://maps.app.goo.gl/xhXqoB74qPFSnu2G9" target="_blank" rel="noopener noreferrer">
              <FaLocationDot size={20} />
            </a>
            <span className="pl-5 self-center text-sm md:text-base">
              126 Pracha Uthit Rd., Bang Mod, Thung Khru, Bangkok 10140, Thailand
            </span>
          </div>
          <div className="flex mt-6 space-x-4">
            <a href="#" className="hover:scale-110 transition-transform">
              <FaInstagram size={30} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <FaFacebook size={30} />
            </a>
          </div>
        </div>

        {/* Shortcut Section */}
        <FooterSection title="Shortcut" items={["Publishers", "Authors"]} />

        {/* About Us Section */}
        <FooterSection title="About Us" items={["About us", "Careers"]} />

        {/* Product Section */}
        <FooterSection title="Product" items={["Books", "Magazines"]} />

        {/* Quick Help Section */}
        <FooterSection
          title="Quick Help"
          items={["How to buy", "Order Status", "Shipping & Return"]}
        />
      </div>
    </footer>
  );
};

export default Footer;
