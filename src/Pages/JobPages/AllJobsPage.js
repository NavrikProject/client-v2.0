import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const AllJobs = React.lazy(() => import("../../Components/Jobs/AllJobs"));
const AllJobsPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <AllJobs />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default AllJobsPage;
