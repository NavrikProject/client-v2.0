import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const AllCourses = React.lazy(() =>
  import("../../Components/Courses/AllCourses.js")
);
const AllCoursePage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <AllCourses />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default AllCoursePage;
