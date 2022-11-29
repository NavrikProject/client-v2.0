import React, { Suspense } from "react";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";

import GoToTop from "../../Components/GoToTop";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const RecruiterProfile = React.lazy(() =>
  import("../../Components/Recruiter/RecruiterProfile.js")
);

const RecruiterProfilePages = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <RecruiterProfile />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default RecruiterProfilePages;
