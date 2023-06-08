import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const MentorSuccess = React.lazy(() =>
  import("../../Components/MentorClub/MentorStepForm/MentorSuccess")
);
const MentorSuccessPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <MentorSuccess />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default MentorSuccessPage;
