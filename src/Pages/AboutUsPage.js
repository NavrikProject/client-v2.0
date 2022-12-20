import React from "react";
import { useEffect } from "react";
import { Suspense } from "react";
import GoToTop from "../Components/GoToTop";
import LoadingSpinner from "../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../Components/Home/Footer.js"));
const AboutUs = React.lazy(() => import("../Components/AboutUs/AboutUs.js"));

const AboutUsPage = () => {
  useEffect(() => {
    document.title = "Practiwiz | About us";
  }, []);
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
