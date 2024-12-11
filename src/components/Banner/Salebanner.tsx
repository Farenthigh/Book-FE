// import banner1 from "../../assets/banner1.png";


// const Salebanner = () => {

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//     <div>
//         <img
//           src={banner1}
//           alt="Sale Banner"
//           className="w-full h-72 object-cover rounded-lg"
//         />
//       </div>
//   </div>
//   );
// };

// export default Salebanner;
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import banner1 from "../../assets/banner1.png";
import { LOGIN_ROUTE } from "../../context/Route";
import { AuthContext } from "../../context/Auth";

const Salebanner = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProtectedAction = () => {
    if (!auth?.auth.isAuth) {
      navigate(LOGIN_ROUTE);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div onClick={handleProtectedAction} className="cursor-pointer">
        <img
          src={banner1}
          alt="Sale Banner"
          className="w-full h-72 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Salebanner;