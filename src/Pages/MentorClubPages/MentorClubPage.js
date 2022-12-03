import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const MentorClub = React.lazy(() =>
  import("../../Components/MentorClub/MentorClub.js")
);
const MentorClubPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <MentorClub />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default MentorClubPage;
