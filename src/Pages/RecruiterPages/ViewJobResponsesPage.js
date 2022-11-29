import React, { Suspense } from "react";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";

import GoToTop from "../../Components/GoToTop";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const ViewJobResponses = React.lazy(() =>
  import("../../Components/Recruiter/ViewJobResponses.js")
);

const ViewJobResponsesPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <ViewJobResponses />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default ViewJobResponsesPage;
