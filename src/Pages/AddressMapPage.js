import React from "react";
import { Suspense } from "react";
import GoToTop from "../Components/GoToTop";
import LoadingSpinner from "../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../Components/Home/Footer.js"));
const AddressMap = React.lazy(() =>
  import("../Components/ContactUs/AddressMap.js")
);
const AddressMapPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <AddressMap />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default AddressMapPage;
