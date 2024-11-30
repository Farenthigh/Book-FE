import { Suspense, useCallback, useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {
  // ALLCAT_ROUTE,
  // CART_ROUTE,
  // DETAIL_ROUTE,
  FAV_ROUTE,
  LOGIN_ROUTE,
  R_DETAIL_ROUTE,
  RENT_ROUTE,
  S_DETAIL_ROUTE,
  SALE_ROUTE,
  TEST_ROUTE,
  USER_HOME_ROUTE,
  SIGNUP_ROUTE,
  PROFILE_ROUTE,
  ADDPOST_ROUTE,
  EDITPOST_ROUTE,
} from "./context/Route";
import UserLayout from "./components/UserLayout";
import { AuthContext, InitAuthValue, IUserData } from "./context/Auth";
import { axiosInstance } from "./helper/axiosInstance";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import SalePage from "./Pages/SalePage";
// import CartPage from "./Pages/CartPage";
import RentPage from "./Pages/RentPage";
// import AllsaleCatagories from "./Pages/AllsaleCatagories";
import DetailSalePage from "./Pages/DetailSalePage";
import FavoritePage from "./Pages/FavoritePage";
import DetailRentPage from "./Pages/DetailRentPage";
// import ResponsiveMenu from "./components/MainNavbar/ResponsiveMenu";
import Signup from "./Pages/Signup";
import Test from "./Pages/Test";
import Profile from "./Pages/Profile";
import AddPost from "./Pages/AddPost";
import EditPost from "./Pages/EditPost";

function App() {
  const [auth, setAuth] = useState<IUserData>(InitAuthValue);

  const fetchUserData = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/user/me");
      if (response.status === 200) {
        setAuth({
          id: response.data.id,
          email: response.data.email,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          role: response.data.role,
          isAuth: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchUserData().then(() => console.log("success"));
  }, [fetchUserData]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={USER_HOME_ROUTE}
            element={
              <Suspense>
                <UserLayout>
                  <Outlet />
                </UserLayout>
              </Suspense>
            }
          >
            <Route index element={<Homepage />} />
            <Route path={TEST_ROUTE} element={<Test />}></Route>
            <Route path={SALE_ROUTE} element={<SalePage />} />
            <Route path={RENT_ROUTE} element={<RentPage />} />
            {/* <Route path={ALLCAT_ROUTE} element={<AllsaleCatagories />} /> */}
            <Route path={S_DETAIL_ROUTE} element={<DetailSalePage />} />
            <Route path={R_DETAIL_ROUTE} element={<DetailRentPage />} />
            <Route path={FAV_ROUTE} element={<FavoritePage />} />
          </Route>
          <Route path={PROFILE_ROUTE} element={<Profile />} />
          <Route path={ADDPOST_ROUTE} element={<AddPost />} />
          <Route path={EDITPOST_ROUTE} element={<EditPost />} />
          <Route path={LOGIN_ROUTE} element={<Login></Login>}></Route>
          <Route path="*" element={<div>not Found</div>}></Route>
        </Routes>
      </BrowserRouter>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <BrowserRouter>
          <Routes>
            <Route
              path={USER_HOME_ROUTE}
              element={
                <Suspense>
                  <UserLayout>
                    <Outlet />
                  </UserLayout>
                </Suspense>
              }
            >
              <Route index element={<Homepage />} />
              <Route path={TEST_ROUTE} element={<Test />}></Route>
            </Route>
            <Route path={LOGIN_ROUTE} element={<Login></Login>}></Route>
            <Route path={SIGNUP_ROUTE} element={<Signup></Signup>}></Route>
            <Route path="*" element={<div>not Found</div>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
