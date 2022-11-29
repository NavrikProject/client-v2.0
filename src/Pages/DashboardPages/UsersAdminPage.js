import React, { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const Navbar = React.lazy(() => import("../../Components/Home/Navbar"));
const Footer = React.lazy(() => import("../../Components/Home/Footer.js"));
const UsersDashboard = React.lazy(() =>
  import("../../Components/Dashboard/UsersDashboard/Dashboard.js")
);

const UsersAdminPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <UsersDashboard />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

export default UsersAdminPage;
