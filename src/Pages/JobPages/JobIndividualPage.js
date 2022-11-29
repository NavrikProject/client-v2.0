import React, { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const IndividualJobDetails = React.lazy(() =>
  import("../../Components/Jobs/JobCard/IndividualJob/IndividualJobDetails")
);
const JobIndividualPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <IndividualJobDetails />
      <Footer />
    </Suspense>
  );
};

export default JobIndividualPage;
