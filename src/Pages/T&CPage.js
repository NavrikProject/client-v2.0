import React from "react";
import { Suspense } from "react";
import GoToTop from "../Components/GoToTop";
import LoadingSpinner from "../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../Components/Home/Footer.js"));
const Terms = React.lazy(() => import("../Components/Generals/Terms"));

const TermsCondition = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <Terms />
        <Footer /> <GoToTop />
      </Suspense>
    </>
  );
};

export default TermsCondition;
