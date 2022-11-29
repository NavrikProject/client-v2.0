import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const MentorIndividual = React.lazy(() =>
  import(
    "../../Components/MentorClub/MentorCard/Individual/MentorIndividual.js"
  )
);

const MentorIndividualPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <MentorIndividual />
        <Footer />
        <GoToTop />
      </Suspense>
    </>
  );
};

export default MentorIndividualPage;
