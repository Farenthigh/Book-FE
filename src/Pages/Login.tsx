import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import close from "../assets/close.png";
import logopurple from "../assets/logopurple.png";
import { SIGNUP_ROUTE, USER_HOME_ROUTE } from "../context/Route";
import { axiosInstance } from "../helper/axiosInstance";
import { IUserAuth } from "../interfaces/userAuth";

const Login = () => {
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = useState<IUserAuth>({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/user/login", {
        email: userAuth.email,
        password: userAuth.password,
      });
      console.log(response);
      if (response.status === 200) {
        // navigate(USER_HOME_ROUTE);
        window.location.href = USER_HOME_ROUTE;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(userAuth);
  }, [userAuth]);
  
  return (
    <form onChange={handleOnChange} onSubmit={handleSubmit} className="bg-[#f9f9ff] px-32 py-2 ">
      <div className="bg-white shadow-lg rounded-lg">
        <div >
          <div className="flex justify-end p-5">
            <img src={close} alt="close" />
          </div>
          <div className="p-10 flex justify-center">
            <img src={logopurple} alt="logopurple" /> 
          </div>
          <div className="flex justify-center font-serif text-5xl p-5">Login</div>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center w-1/3 p-2 gap-5 ">
            <input
              className="rounded-full bg-primarycontainer p-2 w-full pl-5  border border-gray-300 focus:border-primary focus:outline-none"
              name="email"
              type="text"
              placeholder="Email*"
            ></input>
            <input
              className="rounded-full bg-primarycontainer p-2 w-full pl-5  border border-gray-300 focus:border-primary focus:outline-none"
              name="password"
              type="password"
              placeholder="Password*"
            ></input>
            <h4 className="text-sm text-gray-600 hover:underline transition-colors duration-200 ml-72">Forget password?</h4>
            <input
              className="rounded-full px-5 bg-primary text-white h-10 w-40"
              type="submit"
              value={"Sign in"}
            ></input>
            {/* <input type="button" value={`logout`} onClick={handleLogout}></input> */}
            <div className="flex gap-1">
              <div className="flex justify-end">Don't have an account?</div>
              <Link to={SIGNUP_ROUTE}>
                <div className="flex justify-start text-sub gap-5 text-purple-400 hover:underline transition-colors duration-200 mb-10">Register</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
