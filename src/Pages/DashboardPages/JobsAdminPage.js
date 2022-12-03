import React, { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const JobsAdminPanel = React.lazy(() =>
  import("../../Components/Dashboard/JobsDashboard/JobsAdminPanel.js")
);

const JobsAdminPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <JobsAdminPanel />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default JobsAdminPage;
