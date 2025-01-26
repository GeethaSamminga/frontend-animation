import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavHead from "./components/NavBar/NavHead";
import NavMain from "./components/NavBar/NavMain";
import Causes from "./components/Causes";
import EventsPage from "./components/EventPage";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import GalleryPage from "./components/GallerPage";
import Home from "./components/Home";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import VerifyOtp from "./components/verifyotp";
import EventDetailsPage from "./components/EventDetailsPage";
import CauseDetailsPage from "./components/CauseDetailsPage";
import ProfilePage from "./components/ProfiePage";
import TermsAndConditions from "./components/TermsAndConditions";
import ScrollToTop from "./components/ScrollTop";
import FAQ from "./components/FAQ";
import ForgetPassword from "./components/forgetpassword";
import ResetPassword from "./components/ResetPassword";
import AnimationDetailPage from "./components/AnimationDetails";
import ServiceDetailsPage from "./components/CauseDetailsPage";

const App = () => {
  const location = useLocation();

  const isAuthPage =
    ["/signup", "/login", "/verify-otp", "/forget-password"].includes(
      location.pathname
    ) || location.pathname.startsWith("/reset-password/");

  return (
    <div>
      {/* Persistent Layout */}
      {/* {!isAuthPage && <NavHead />} */}
      {!isAuthPage && <NavMain />}
      <ScrollToTop />

      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Causes />} />
        <Route path="/services-details/:id" element={<ServiceDetailsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event-details/:id" element={<EventDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<GalleryPage />} />
        <Route path="/portfolio/:id" element={<AnimationDetailPage />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
      </Routes>
      <br></br>
      {!isAuthPage && <Footer />}
    </div>
  );
};
export default App;
