import React from "react";
import { Suspense } from "react";
import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const LoginForm = React.lazy(() =>
  import("../../Components/Forms/AccountForms/LoginForm.js")
);
const LoginPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LoginForm />
      {/* <Footer /> */}
      <GoToTop />
    </Suspense>
  );
};

export default LoginPage;
