import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const IndividualCourses = React.lazy(() =>
  import("../../Components/Courses/CoursePages/IndividualCourses")
);
const IndCoursePage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <IndividualCourses />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default IndCoursePage;
