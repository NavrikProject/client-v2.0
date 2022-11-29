import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const ForgotPassword = React.lazy(() =>
  import("../../Components/Forms/PasswordForm/ForgotPassword.js")
);
const ForgotPwdPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <ForgotPassword />
        <Footer />
        <GoToTop />
      </Suspense>
    </>
  );
};

export default ForgotPwdPage;
