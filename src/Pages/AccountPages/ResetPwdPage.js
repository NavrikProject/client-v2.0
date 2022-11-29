import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const ResetPassword = React.lazy(() =>
  import("../../Components/Forms/PasswordForm/ResetPassword.js")
);
const ResetPwdPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <ResetPassword />
        <Footer />
        <GoToTop />
      </Suspense>
    </>
  );
};

export default ResetPwdPage;
