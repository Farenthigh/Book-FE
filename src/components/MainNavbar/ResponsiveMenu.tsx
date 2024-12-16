import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BOOK_ROUTE,AUTHORS_ROUTE,PUBLICHER_ROUTE,FAV_ROUTE, CART_ROUTE, CONTACTS_ROUTE } from "../../context/Route";
import { AuthContext } from "../../context/Auth"; 

const ResponsiveMenu = ({ open }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext); 

  const handleIconClick = (route) => {
    // เช็คสถานะการล็อกอิน
    if (!isLoggedIn && route !== "/" && route !== CONTACTS_ROUTE) {
      navigate("/login"); 
    } else {
      navigate(route); 
    }
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <nav className="text-xl font-serif uppercase bg-primary text-white py-10 m-6">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li onClick={() => handleIconClick("/")}>HOME</li>
              <li onClick={() => handleIconClick(BOOK_ROUTE)}>BOOK</li>
              <li onClick={() => handleIconClick(AUTHORS_ROUTE)}>AUTHOR</li>
              <li onClick={() => handleIconClick(PUBLICHER_ROUTE)}>PUBLISHER</li>
              <li onClick={() => handleIconClick(CONTACTS_ROUTE)}>CONTACTS</li>
              <li onClick={() => handleIconClick(FAV_ROUTE)}>FAVORITE</li>
              <li onClick={() => handleIconClick(CART_ROUTE)}>CART</li>
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
