import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const MentorLanding = React.lazy(() =>
  import("../../Components/MentorClub/MentorLanding/SrinivasLanding.js")
);

const MentorLandingPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <MentorLanding />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default MentorLandingPage;
