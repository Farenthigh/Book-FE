import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const FooterSection = ({ title, items }) => (
    <div className="w-[150px]">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {items.map((item, index) => (
        <p key={index} className="cursor-pointer hover:underline">{item}</p>
      ))}
    </div>
  );

const Footer = () => {
    return (
        <footer className="flex h-[300px] w-full bg-primarycontainer relative">
            <div className="flex bg-white border shadow-xl mx-auto h-[250px] p-8 justify-around self-center px-24 py-10">

                {/* Contact Section */}
                <div className="mr-20 w-[400px]">
                    <div className="flex items-start pb-2">
                        <TbWorld size={25}/>
                        <span className="pl-5 self-center">www.booklover.com</span>
                    </div>
                    <div className="flex items-start pb-2">
                        <FaPhoneAlt size={20}/>
                        <span className="pl-5 self-center">094-7767288</span>
                    </div>
                    <div className="flex items-start pb-2">
                        <a href="https://maps.app.goo.gl/xhXqoB74qPFSnu2G9" target="_blank" rel="noopener noreferrer">
                            < FaLocationDot size={20}/>
                        </a>
                        <span className="pl-5 self-center">
                            126 Pracha Uthit Rd., Bang Mod, Thung Khru, Bangkok 10140, Thailand
                        </span>
                    </div>
                    <div className="flex mt-10 space-x-4">
                        <FaInstagram size={30}/>
                        <FaFacebook size={30}/>
                        
                    </div>
                </div>

                {/* Shortcut Section */}
                <FooterSection title="Shortcut" items={['Publishers', 'Authors']} />

                {/* About Us Section */}
                <FooterSection title="About Us" items={['About us', 'Careers']} />

                {/* Product Section */}
                <FooterSection title="Product" items={['Books', 'Magazines']} />

                {/* Quick Help Section */}
                <FooterSection title="Quick Help" items={['How to buy', 'Order Status', 'Shipping & Return']} />
            </div>
        </footer>
    );
};

export default Footer;
