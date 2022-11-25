import React from "react";
import { Suspense } from "react";
import GoToTop from "../Components/GoToTop";
import LoadingSpinner from "../Components/Utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../Components/Home/Footer.js"));
const AboutUs = React.lazy(() => import("../Components/AboutUs/AboutUs.js"));

const AboutUsPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <AboutUs />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default AboutUsPage;
