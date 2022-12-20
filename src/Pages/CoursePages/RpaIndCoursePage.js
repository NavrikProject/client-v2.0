import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const RpaIndividualCourse = React.lazy(() =>
  import("../../Components/Courses/CoursePages/RpaIndividualCourse.js")
);
const RpaIndCoursePage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <RpaIndividualCourse />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default RpaIndCoursePage;
