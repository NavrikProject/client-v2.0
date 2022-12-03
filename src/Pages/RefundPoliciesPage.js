import React from "react";
import { Suspense } from "react";
import GoToTop from "../Components/GoToTop";
import LoadingSpinner from "../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../Components/Home/Footer.js"));
const RefundPolicies = React.lazy(() =>
  import("../Components/Generals/RefundPolicies")
);

const RefundPoliciesPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <RefundPolicies />
      <Footer /> <GoToTop />
    </Suspense>
  );
};

export default RefundPoliciesPage;
