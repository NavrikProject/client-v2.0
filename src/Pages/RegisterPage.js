import React from "react";
import { Suspense } from "react";

import GoToTop from "../Components/GoToTop";
import LoadingSpinner from "../Components/Utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../Components/Home/Footer.js"));
const RegisterForm = React.lazy(() =>
  import("../Components/Forms/RegisterForm.js")
);
const RegisterPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <RegisterForm />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default RegisterPage;
