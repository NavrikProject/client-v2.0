import React, { Suspense } from "react";
import LoadingSpinner from "../Components/utils/LoadingSpinner";
const Footer = React.lazy(() => import("../Components/Footer/Footer"));
const NavbarRes = React.lazy(() => import("../Components/Navbar/NavbarRes"));
const RpaBasicsCourse = React.lazy(() =>
  import("../Components/CoursePages/RpaBasics")
);
const RpaBasicCoursePage = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <NavbarRes />
        <RpaBasicsCourse />
        <Footer />
      </Suspense>
    </>
  );
};

export default RpaBasicCoursePage;
