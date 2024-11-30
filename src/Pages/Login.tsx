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
    <form onChange={handleOnChange} onSubmit={handleSubmit}>
      <div>
        <div className="flex justify-end p-5">
          <img src={close} alt="close" />
        </div>
        <div className="p-20 flex justify-center">
          <img src={logopurple} alt="logopurple" />
        </div>
        <div className="flex justify-center font-serif text-5xl p-5">Login</div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center w-1/3 p-2 gap-5">
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
            className="rounded-full bg-primary text-white p-2 w-20 "
            type="submit"
            value={"Sign in"}
          ></input>
          {/* <input type="button" value={`logout`} onClick={handleLogout}></input> */}
          <div className="flex gap-1">
            <div className="flex justify-end">Don't have an account?</div>
            <Link to={SIGNUP_ROUTE}>
              <div className="flex justify-start text-sub gap-5">Register</div>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
