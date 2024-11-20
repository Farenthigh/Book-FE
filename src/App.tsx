import { Suspense, useCallback, useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import {
  CART_ROUTE,
  LOGIN_ROUTE,
  SALE_ROUTE,
  TEST_ROUTE,
  USER_HOME_ROUTE,
} from "./context/Route";
import UserLayout from "./components/UserLayout";
import { AuthContext, InitAuthValue, IUserData } from "./context/Auth";
import { axiosInstance } from "./helper/axiosInstance";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import SalePage from "./Pages/SalePage";
import CartPage from "./Pages/CartPage";

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
            <Route path={CART_ROUTE} element={<CartPage />} />
          </Route>
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
