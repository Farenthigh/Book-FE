import "./Footer.css";

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
        <footer className="flex h-[300px] w-full bg-purple-200 relative">
            <div className="flex bg-purple-100 border shadow-lg mx-auto h-[250px] w-4/5 p-8 justify-around self-center">

                {/* Contact Section */}
                <div className="mr-20 w-[400px]">
                    <div className="flex items-start pb-2">
                        <img
                            className="w-5 cursor-pointer"
                            src="https://static-00.iconduck.com/assets.00/website-icon-2048x2048-ax2y60lj.png"
                            alt="Website Icon"
                        />
                        <span className="pl-5 self-center">www.booklover.com</span>
                    </div>
                    <div className="flex items-start pb-2">
                        <img
                            className="w-5 cursor-pointer"
                            src="https://brandeps.com/icon-download/T/Telephone-icon-04.png"
                            alt="Phone Icon"
                        />
                        <span className="pl-5 self-center">094-7767288</span>
                    </div>
                    <div className="flex items-start pb-2">
                        <a href="https://maps.app.goo.gl/xhXqoB74qPFSnu2G9" target="_blank" rel="noopener noreferrer">
                            <img
                                className="w-7 cursor-pointer"
                                src="https://icons.iconarchive.com/icons/steve/zondicons/512/Location-icon.png"
                                alt="Location Icon"
                            />
                        </a>
                        <span className="pl-5 self-center">
                            126 Pracha Uthit Rd., Bang Mod, Thung Khru, Bangkok 10140, Thailand
                        </span>
                    </div>
                    <div className="flex mt-10 space-x-4">
                        <img
                            className="w-8 cursor-pointer"
                            src="https://cdn-icons-png.flaticon.com/512/717/717392.png"
                            alt="Instagram Icon"
                        />
                        <img
                            className="w-8 cursor-pointer"
                            src="https://icons.veryicon.com/png/o/brands/3vjia-icon-surface/facebook-160.png"
                            alt="Facebook Icon"
                        />
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
