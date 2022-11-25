import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import "./styles/home.css";
import "./styles/slick.css";
import "./styles/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./Components/Utils/LoadingSpinner";
import CookieNotice from "./Components/Utils/CookieNotice";
import ScrollToTop from "./Components/ScrollToTop";
import HomePage from "./Pages/HomePage";
import Model from "./Components/Utils/Model";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useSelector } from "react-redux";
import ProtectedRoute from "./Components/Utils/ProtectedRoutes";
import PublicRoute from "./Components/Utils/PublicRoute";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
// ..
AOS.init();
const App = () => {
  const { isLoading } = useSelector((state) => state.loading);
  const { isShowingModel } = useSelector((state) => state.model);
  return (
    <>
      {isLoading ? <LoadingSpinner /> : null}
      {isShowingModel ? <Model /> : null}
      <ToastContainer />
      <CookieNotice />
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
      <ScrollToTop />
    </>
  );
};

export default App;
