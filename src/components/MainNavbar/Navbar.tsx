import { Link } from "react-router-dom"; 
import logo from "../../assets/Component 12.png"; 
import { MdMenu } from "react-icons/md";
import { NavbarMenu } from "../Mockdata/data";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import React, { useRef, useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [opens, setOpens] = useState(false);
  const [open, setOpen] = React.useState(false);
  const Menus = ['Profile', 'Logout'];
  const menuRef = useRef();
  const buttRef = useRef();
  
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && buttRef.current) {
        if (!menuRef.current.contains(e.target) && !buttRef.current.contains(e.target)) {
          setOpens(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="px-24 py-8">
        <div className="mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-5 font-serif">
            <img src={logo} alt="logo" />
            {/* Menu Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-5 text-600">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <Link to={item.link} className="inline-block py-1 px-3">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Icon Section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl">
              <FaRegHeart  />
            </button>
            <button className="text-2xl">
              <FiShoppingCart />
            </button>
            <div className="relative">
              <button
                ref={buttRef}
                onClick={() => setOpens(!opens)}
                className="rounded-full px-5 bg-primary text-white h-10"
              >
                My Account
              </button>
              {opens && (
                <div
                  ref={menuRef}
                  className="bg-primarycontainer border border-primary p-4 w-32 shadow-lg absolute top-full mt-2 rounded-lg z-50"
                  style={{ left: '50%', transform: 'translateX(-50%)' }}
                >
                  <div
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primarycontainer border-t border-l border-primary rotate-45"
                  ></div>

                  <ul>
                    {Menus.map((menu) => (
                      <li
                        onClick={() => setOpens(false)}
                        className="p-2 text-lg cursor-pointer hover:bg-gray-100 rounded"
                        key={menu}
                      >
                        {menu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger Menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile slidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
