import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ALLCAT_ROUTE, CART_ROUTE, DETAIL_ROUTE, FAV_ROUTE, LOGIN_ROUTE, R_DETAIL_ROUTE, RENT_ROUTE, S_DETAIL_ROUTE, SALE_ROUTE, TEST_ROUTE, USER_HOME_ROUTE } from "./context/Route";
import UserLayout from "./components/UserLayout";
import Homepage from "./Pages/Homepage";
import Test from "./Pages/Test";
import Login from "./Pages/Login";
import SalePage from "./Pages/SalePage";
import CartPage from "./Pages/CartPage";
import RentPage from "./Pages/RentPage";
import AllsaleCatagories from "./Pages/AllsaleCatagories";
import DetailSalePage from "./Pages/DetailSalePage";
import FavoritePage from "./Pages/FavoritePage";
import DetailRentPage from "./Pages/DetailRentPage";
import ResponsiveMenu from "./components/MainNavbar/ResponsiveMenu";



function App() {
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
            <Route path={ALLCAT_ROUTE} element={<AllsaleCatagories />} />
            <Route path={S_DETAIL_ROUTE} element={<DetailSalePage />} />
            <Route path={R_DETAIL_ROUTE} element={<DetailRentPage />} />
            <Route path={FAV_ROUTE} element={<FavoritePage />} />
          </Route>
          <Route path={LOGIN_ROUTE} element={<Login></Login>}></Route>
          <Route path="*" element={<div>not Found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
