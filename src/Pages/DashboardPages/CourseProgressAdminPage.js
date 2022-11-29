import React, { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const CourseProgressDashboard = React.lazy(() =>
  import(
    "../../Components/Dashboard/CourseProgressDashboard/CourseProgressDashboard.js"
  )
);
const CourseProgressAdminPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <CourseProgressDashboard />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default CourseProgressAdminPage;
