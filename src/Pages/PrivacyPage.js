import React from "react";
import { Suspense } from "react";
import GoToTop from "../Components/GoToTop";
import LoadingSpinner from "../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../Components/Home/Footer.js"));
const Privacy = React.lazy(() => import("../Components/Generals/Privacy"));

const PrivacyPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <Privacy />
        <Footer />
        <GoToTop />
      </Suspense>
    </>
  );
};

export default PrivacyPage;
