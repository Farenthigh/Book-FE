import React, { useContext, useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/Component 12.png";
import { AuthContext } from "../../context/Auth";
import { NavItem } from "../../context/nav-item";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../../context/Route";
import { axiosInstance } from "../../helper/axiosInstance";
import ResponsiveMenu from "./ResponsiveMenu";
import { FAV_ROUTE } from "../../context/Route";
import { CART_ROUTE } from "../../context/Route";
const Navbar = () => {
  const auth = useContext(AuthContext);
  const [opens, setOpens] = useState(false);
  const [open, setOpen] = React.useState(false);
  const Menus = ["Profile", "Allpost", "Addpost", "Logout"];
  const menuRef = useRef();
  const buttRef = useRef();

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post("/user/logout");
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePopupItemClicked = (item) => {
    setOpens(false);
    switch (item) {
      case "Profile":
        window.location.href = "/profile";
        break;
      case "Allpose":
        window.location.href = "/allpost";
        break;
      case "Addpost":
        window.location.href = "/addpost";
        break;
      case "Logout":
        handleLogout();
        break;
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && buttRef.current) {
        if (
          !menuRef.current.contains(e.target) &&
          !buttRef.current.contains(e.target)
        ) {
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
                {NavItem.map((item) => (
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
            <Link to={FAV_ROUTE}>
              <button className="text-2xl">
                <FaRegHeart />
              </button>
            </Link>
            <Link to={CART_ROUTE}>
              <button className="text-2xl">
                <FiShoppingCart />
              </button>
            </Link>
            {auth?.auth.isAuth ? (
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
                    style={{ left: "50%", transform: "translateX(-50%)" }}
                  >
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primarycontainer border-t border-l border-primary rotate-45"></div>

                    <ul>
                      {Menus.map((menu) => (
                        <li
                          onClick={() => handlePopupItemClicked(menu)}
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
            ) : (
              <div className="flex justify-end gap-4">
                <Link to={SIGNUP_ROUTE}>
                  <button className="rounded-full  px-5 bg-primary text-white h-10 py w-15">
                    Register
                  </button>
                </Link>

                <Link to={LOGIN_ROUTE}>
                  <button className="rounded-full  px-8 bg-primary text-white h-10">
                    Login
                  </button>
                </Link>
              </div>
            )}
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
