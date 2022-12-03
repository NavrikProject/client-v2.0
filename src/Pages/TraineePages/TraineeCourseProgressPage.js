import React, { Suspense } from "react";

import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const TraineeCourseProgress = React.lazy(() =>
  import("../../Components/Trainee/CourseProgress/TraineeCourseProgress")
);

const TraineeCourseProgressPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <TraineeCourseProgress />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default TraineeCourseProgressPage;
