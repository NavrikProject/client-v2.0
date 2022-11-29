import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const TraineeProfile = React.lazy(() =>
  import("../../Components/Trainee/Profile/TraineeProfile.js")
);

const TraineeProfilePage = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <TraineeProfile />
        <Footer />
        <GoToTop />
      </Suspense>
    </>
  );
};

export default TraineeProfilePage;
