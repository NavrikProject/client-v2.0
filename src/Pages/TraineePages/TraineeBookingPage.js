import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const TraineeSessionDetails = React.lazy(() =>
  import("../../Components/Trainee/Sessions/TraineeSessionDetails.js")
);

const TraineeBookingPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <TraineeSessionDetails />
        <Footer />
        <GoToTop />
      </Suspense>
    </>
  );
};

export default TraineeBookingPage;
