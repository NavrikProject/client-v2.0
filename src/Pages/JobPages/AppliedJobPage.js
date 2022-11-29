import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const AppliedJobs = React.lazy(() =>
  import("../../Components/Jobs/AppliedJobs/AppliedJobs.js")
);

const AppliedJobPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <AppliedJobs />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default AppliedJobPage;
