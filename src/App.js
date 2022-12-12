import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import "./styles/home.css";
import "./styles/slick.css";
import "./styles/style.css";
import ReactGa from "react-ga";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./Components/utils/LoadingSpinner";
import CookieNotice from "./Components/utils/CookieNotice";
import ScrollToTop from "./Components/ScrollToTop";
import HomePage from "./Pages/HomePage";
import { ModelFixedHeight, ScrollModel } from "./Components/utils/Model";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useSelector } from "react-redux";
import ProtectedRoute from "./Components/utils/ProtectedRoutes";
import PublicRoute from "./Components/utils/PublicRoute";
import LoginPage from "./Pages/AccountPages/LoginPage";
import RegisterPage from "./Pages/AccountPages/RegisterPage";
import AboutUsPage from "./Pages/AboutUsPage";
import MentorClubPage from "./Pages/MentorClubPages/MentorClubPage";
import AllCoursePage from "./Pages/CoursePages/AllCoursePage";
import AllJobsPage from "./Pages/JobPages/AllJobsPage";
import ActivateAccountPage from "./Pages/AccountPages/ActivateAccountPage";
import MentorIndividualPage from "./Pages/MentorClubPages/MentorIndividualPage";
import MentorRegistrationPage from "./Pages/MentorClubPages/MentorRegistrationPage";
import PrivacyPage from "./Pages/PrivacyPage";
import TermsCondition from "./Pages/T&CPage";
import MentorBookingPage from "./Pages/MentorClubPages/MentorBookingsPage";
import MentorProfilePage from "./Pages/MentorClubPages/MentorProfilePage";
import AppliedJobPage from "./Pages/JobPages/AppliedJobPage";
import ResetPwdPage from "./Pages/AccountPages/ResetPwdPage";
import ForgotPwdPage from "./Pages/AccountPages/ForgotPwdPage";
import TraineeProfilePage from "./Pages/TraineePages/TraineeProfilePage";
import TraineeBookingPage from "./Pages/TraineePages/TraineeBookingPage";
import TraineeCourseProgressPage from "./Pages/TraineePages/TraineeCourseProgressPage";
import ViewJobResponsesPage from "./Pages/RecruiterPages/ViewJobResponsesPage";
import RecruiterProfilePages from "./Pages/RecruiterPages/RecruiterProfilePages";
import JobsAdminPage from "./Pages/DashboardPages/JobsAdminPage";
import CourseProgressAdminPage from "./Pages/DashboardPages/CourseProgressAdminPage";
import UsersAdminPage from "./Pages/DashboardPages/UsersAdminPage";
import JobIndividualPage from "./Pages/JobPages/JobIndividualPage";
import IndividualCoursePage from "./Pages/CoursePages/IndividualCoursePage";
import WhyPractiwizPage from "./Pages/WhyPractiwizPage";
import MethodologyPage from "./Pages/MethodologyPage";
import RefundPoliciesPage from "./Pages/RefundPoliciesPage";
import IndCoursePage from "./Pages/CoursePages/IndCoursePage";
import JobHomePage from "./Pages/JobPages/JobHomePage";
import QueryPage from "./Pages/QueryPage";
// ..
AOS.init();
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const isShowingScrollModel = useSelector(
    (state) => state.scrollModel.isShowingScrollModel
  );
  const isShowingModel = useSelector((state) => state.model.isShowingModel);
  ReactGa.initialize("UA-220859929-1");
  ReactGa.pageview(window.location.pathname + window.location.search);
  return (
    <>
      {isLoading ? <LoadingSpinner /> : null}
      {isShowingScrollModel ? <ScrollModel /> : null}
      {isShowingModel ? <ModelFixedHeight /> : null}
      <ToastContainer />
      <CookieNotice />
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/why-practiwiz" element={<WhyPractiwizPage />} />
            <Route path="/methodology" element={<MethodologyPage />} />
            <Route path="/refund-policies" element={<RefundPoliciesPage />} />
            <Route path="/course/:id" element={<IndCoursePage />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <PublicRoute>
                  <ForgotPwdPage />
                </PublicRoute>
              }
            />
            <Route
              exact
              path={`/user/activate/reset-password/:id`}
              element={
                <PublicRoute>
                  <ResetPwdPage />
                </PublicRoute>
              }
            />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/jobs" element={<JobHomePage />} />
            <Route path="/all-jobs" element={<AllJobsPage />} />
            <Route path="/query" element={<QueryPage />} />
            <Route path="/courses" element={<AllCoursePage />} />
            <Route
              path="/courses/individual-course/:id"
              element={<IndividualCoursePage />}
            />
            <Route
              exact
              path={`/user/activate/account/:id`}
              element={
                <PublicRoute>
                  <ActivateAccountPage />
                </PublicRoute>
              }
            />
            <Route path="/privacy-policies" element={<PrivacyPage />} />
            <Route path="/terms-conditions" element={<TermsCondition />} />
            {/* mentor club routes starts */}
            <Route path="/mentors-club" element={<MentorClubPage />} />
            <Route
              path={`/mentors-club/individual/:id`}
              element={<MentorIndividualPage />}
            />
            <Route
              path="/mentor/apply-for-mentor"
              element={
                <PublicRoute>
                  <MentorRegistrationPage />
                </PublicRoute>
              }
            />
            <Route
              path={`/mentor/profile`}
              element={
                <ProtectedRoute>
                  <MentorProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path={`/mentor/profile/my-sessions`}
              element={
                <ProtectedRoute>
                  <MentorBookingPage />
                </ProtectedRoute>
              }
            />
            {/* mentor club routes ends */}
            {/* trainee routes starts */}{" "}
            <Route
              path={`/trainee/profile`}
              element={
                <ProtectedRoute>
                  <TraineeProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path={`/trainee/profile/my-sessions`}
              element={
                <ProtectedRoute>
                  <TraineeBookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={`/trainee/profile/my-courses`}
              element={
                <ProtectedRoute>
                  <TraineeCourseProgressPage />
                </ProtectedRoute>
              }
            />
            {/* trainee routes ends */}
            {/* jobs routes started */}
            <Route
              path={`/${user?.type}/profile/my-jobs`}
              element={
                <ProtectedRoute>
                  <AppliedJobPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/admin/jobs"
              element={
                <ProtectedRoute>
                  <JobsAdminPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={`/jobs/individual-job/:id`}
              element={<JobIndividualPage />}
            />
            {/* jobs routes ended */}
            {/* recruiter routes started */}
            <Route
              path="/recruiter/profile"
              element={
                <ProtectedRoute>
                  <RecruiterProfilePages />
                </ProtectedRoute>
              }
            />
            <Route
              path={`/recruiter/profile/jobs/view-responses/:id`}
              element={
                <ProtectedRoute>
                  <ViewJobResponsesPage />
                </ProtectedRoute>
              }
            />
            {/* recruiter routes ended */}
            <Route
              path="/user/admin/courses"
              element={
                <ProtectedRoute>
                  <CourseProgressAdminPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/admin/users"
              element={
                <ProtectedRoute>
                  <UsersAdminPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
      <ScrollToTop />
    </>
  );
};

export default App;
