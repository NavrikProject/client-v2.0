import React from "react";
import { Suspense } from "react";
import GoToTop from "../Components/GoToTop";
import LoadingSpinner from "../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../Components/Home/Footer.js"));
const Query = React.lazy(() => import("../Components/ContactUs/Query.js"));
const QueryPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <Query />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default QueryPage;
