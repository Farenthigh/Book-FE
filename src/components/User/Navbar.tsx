import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Component 12.png";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { AuthContext } from "../../context/Auth";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../../context/Route";

const Navbar = () => {
  const auth = useContext(AuthContext)?.auth;
  const [searchTerm, setSearchTerm] = useState("");
  console.log(auth);
  return (
    <>
      <nav className="px-24 py-8">
        <div className="mx-auto flex justify-between items-center">
          <img src={logo} alt="logo" />

          <div className="mb-6 relative w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by Book, Author, Publisher"
                className="w-full pl-10 pr-3 p-3 rounded-full bg-purple-100 text-gray-700 placeholder-gray-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <CiSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button className="rounded-full px-5 bg-primary text-white h-10">
              Register
            </button>
            <button className="rounded-full px-8 bg-primary text-white h-10">
              Login
            </button>
          </div>
          <input
            type="text"
            className="rounded-full bg-primarycontainer w-2/5 border-none"
          />
          {auth?.isAuth ? (
            <button className="rounded-full  px-5 bg-primary text-white h-10 py w-15">
              logout
            </button>
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
      </nav>
    </>
  );
};

export default Navbar;
