import React from "react";
import { Suspense } from "react";
import GoToTop from "../Components/GoToTop";
import LoadingSpinner from "../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../Components/Home/Footer.js"));
const WhyPractiwiz = React.lazy(() =>
  import("../Components/Home/WhyPractiwiz")
);
const WhyPractiwizPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <WhyPractiwiz />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default WhyPractiwizPage;
