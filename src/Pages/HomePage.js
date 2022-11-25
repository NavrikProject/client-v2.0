import React from "react";
import { Suspense } from "react";
import CourseSection from "../Components/Home/CourseSection";
import LoadingSpinner from "../Components/utils/LoadingSpinner";
import AboutSection from "../Components/Home/AboutSection";
import TestimonialSection from "../Components/Home/TestimonialSection";
import RegisterSection from "../Components/Home/RegisterBannerSection";
import MentorsSection from "../Components/Home/MentorsSection";
import JobsSection from "../Components/Home/JobsSection";
import GoToTop from "../Components/GoToTop";
const Navbar = React.lazy(() => import("../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../Components/Home/Footer.js"));
const BannerSection = React.lazy(() =>
  import("../Components/Home/BannerSection.js")
);

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <BannerSection />
      <CourseSection />
      <TestimonialSection />
      <MentorsSection />
      <RegisterSection />
      <JobsSection />
      <AboutSection />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default HomePage;
