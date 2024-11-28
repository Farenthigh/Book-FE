import { useEffect, useState } from "react";
import close from "../assets/close.png";
import logopurple from "../assets/logopurple.png";
import { axiosInstance } from "../helper/axiosInstance";
import { IUserSignup } from "../interfaces/userSignup";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, SIGNUP_ROUTE, USER_HOME_ROUTE } from "../context/Route";
import Homepage from "./Homepage";

const Signup = () => {
  const navigate = useNavigate();
  const [userSignup, setUserSignup] = useState<IUserSignup>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    comfirmpassword: "",
  });

  const handleOnChange = (e) => {
    setUserSignup({ ...userSignup, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userSignup);
    if (userSignup.comfirmpassword != userSignup.password) {
      console.log("error");
      return;
    }
    try {
      const response = await axiosInstance.post("/user/register/", userSignup);
      console.log(response.data);
      if (response.status === 201) {
        navigate(USER_HOME_ROUTE);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(userSignup);
  }, [userSignup]);
  return (
    <form onChange={handleOnChange} onSubmit={handleSubmit}>
      <div className="flex justify-end p-5">
        <img src={close} alt="close" />
      </div>
      <div className="p-20 flex justify-center">
        <img src={logopurple} alt="logopurple" />
      </div>
      <div className="flex justify-center font-serif text-5xl p-5">
        Register
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center w-1/3 p-2 gap-5">
          <input
            className="rounded-full bg-primarycontainer p-2 w-full"
            name="firstname"
            type="text"
          ></input>
          <input
            className="rounded-full bg-primarycontainer p-2 w-full"
            name="lastname"
            type="text"
          ></input>
          <input
            className="rounded-full bg-primarycontainer p-2 w-full"
            name="email"
            type="text"
          ></input>
          <input
            className="rounded-full bg-primarycontainer p-2 w-full"
            name="password"
            type="password"
          ></input>
          <input
            className="rounded-full bg-primarycontainer p-2 w-full"
            name="comfirmpassword"
            type="password"
          ></input>
          <input
            className="rounded-full bg-primary text-white p-2 w-20 "
            type="submit"
            value={"Sign up"}
          ></input>

          {/* <input type="button" value={`logout`} onClick={handleLogout}></input> */}
          <div className="flex gap-1">
            <div className="flex justify-end">Have an account?</div>
            <Link to={LOGIN_ROUTE}>
              <div className="flex justify-start text-sub gap-5">Login</div>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
