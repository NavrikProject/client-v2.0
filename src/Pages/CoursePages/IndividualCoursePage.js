import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const IndividualCourseDetails = React.lazy(() =>
  import(
    "../../Components/Courses/CourseCard/IndividualCourse/IndividualCourseDetails.js"
  )
);

const IndividualCoursePage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <IndividualCourseDetails />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default IndividualCoursePage;
