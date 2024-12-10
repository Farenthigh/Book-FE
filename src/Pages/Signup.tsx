import { useEffect, useState } from "react";
import close from "../assets/close.png";
import logopurple from "../assets/logopurple.png";
import { axiosInstance } from "../helper/axiosInstance";
import { IUserSignup } from "../interfaces/userSignup";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, SIGNUP_ROUTE, USER_HOME_ROUTE } from "../context/Route";

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
    if (userSignup.comfirmpassword !== userSignup.password) {
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

  const handleClose = () => {
    navigate(-1); 
  };

  useEffect(() => {
    console.log(userSignup);
  }, [userSignup]);

  return (
    <form onChange={handleOnChange} onSubmit={handleSubmit} className="bg-[#f9f9ff] px-32 py-2 ">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="flex justify-end p-5">
          {/* เพิ่ม onClick สำหรับปุ่ม close */}
          <img
            src={close}
            alt="close"
            className="cursor-pointer"
            onClick={handleClose} // เรียกใช้ฟังก์ชัน handleClose
          />
        </div>
        <div className="p-10 flex justify-center">
          <img src={logopurple} alt="logopurple" />
        </div>
        <div className="flex justify-center font-serif text-5xl p-5">
          Register
        </div>
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center w-1/3 p-2 gap-5">
            <div className="flex gap-1">
              <div className="flex justify-end">Have an account?</div>
              <Link to={LOGIN_ROUTE}>
                <div className="flex justify-start text-sub gap-5 text-purple-400 hover:underline transition-colors duration-200">Login</div>
              </Link>
            </div>
            <input
              className="pr-10 rounded-full bg-primarycontainer p-2 w-full pl-5  border border-gray-300 focus:border-primary focus:outline-none"
              name="firstname"
              type="text"
              placeholder="Firstname*"
            ></input>
            <input
              className="pr-10 pl-5  rounded-full bg-primarycontainer p-2 w-full  border border-gray-300 focus:border-primary focus:outline-none"
              name="lastname"
              type="text"
              placeholder="Lastname*"
            ></input>
            <input
              className="rounded-full bg-primarycontainer p-2 w-full  border border-gray-300 focus:border-primary focus:outline-none pl-5 pr-10"
              name="email"
              type="text"
              placeholder="Email*"
            ></input>
            <input
              className="rounded-full bg-primarycontainer p-2 w-full  border border-gray-300 focus:border-primary focus:outline-none pl-5 pr-8"
              name="password"
              type="password"
              placeholder="Create Password*"
            ></input>
            <input
              className="rounded-full bg-primarycontainer p-2 w-full  border border-gray-300 focus:border-primary focus:outline-none pl-5 pr-8"
              name="comfirmpassword"
              type="password"
              placeholder="Comfirm Password*"
            ></input>
            <input
              className="rounded-full px-5 bg-primary text-white h-10 mb-8 w-40"
              type="submit"
              value={"Confirm"}
            ></input>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
