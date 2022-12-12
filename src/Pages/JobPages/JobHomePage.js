import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const JobHome = React.lazy(() => import("../../Components/Jobs/JobHome.js"));
const JobHomePage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <JobHome />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default JobHomePage;
