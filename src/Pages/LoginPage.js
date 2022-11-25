import React from "react";
import { Suspense } from "react";
import GoToTop from "../Components/GoToTop";
import LoadingSpinner from "../Components/Utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../Components/Home/Footer.js"));
const LoginForm = React.lazy(() => import("../Components/Forms/LoginForm.js"));
const LoginPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <LoginForm />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default LoginPage;
