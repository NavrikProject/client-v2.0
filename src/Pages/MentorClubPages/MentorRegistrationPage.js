import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const MentorRegistration = React.lazy(() =>
  import("../../Components/MentorClub/MentorRegistration/MentorRegistration.js")
);

const MentorRegistrationPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <MentorRegistration />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default MentorRegistrationPage;
