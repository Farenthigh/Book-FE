import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { CART_ROUTE, LOGIN_ROUTE, SALE_ROUTE, TEST_ROUTE, USER_HOME_ROUTE } from "./context/Route";
import UserLayout from "./components/UserLayout";
import Homepage from "./Pages/Homepage";
import Test from "./Pages/Test";
import Login from "./Pages/Login";
import SalePage from "./Pages/SalePage";
import CartPage from "./Pages/CartPage";



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
            <Route path={CART_ROUTE} element={<CartPage />} />
          </Route>
          <Route path={LOGIN_ROUTE} element={<Login></Login>}></Route>
          <Route path="*" element={<div>not Found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
