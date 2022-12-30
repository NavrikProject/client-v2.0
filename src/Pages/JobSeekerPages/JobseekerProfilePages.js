import React, { Suspense } from "react";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";

import GoToTop from "../../Components/GoToTop";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const JobseekerProfile = React.lazy(() =>
  import("../../Components/Jobs/JobseekerProfile/JobseekerProfile.js")
);

const JobseekerProfilePages = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <JobseekerProfile />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default JobseekerProfilePages;
