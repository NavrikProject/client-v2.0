import React from "react";
import { Suspense } from "react";

import GoToTop from "../../Components/GoToTop";
import LoadingSpinner from "../../Components/utils/LoadingSpinner";
const RegisterForm = React.lazy(() =>
  import("../../Components/Forms/AccountForms/RegisterForm.js")
);
const RegisterPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RegisterForm />
      {/* <Footer /> */}
      <GoToTop />
    </Suspense>
  );
};

export default RegisterPage;
