import { Routes, Route } from "react-router";
import HomePage from "../pages/home";
import FeaturesPage from "../pages/features";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import TermsPage from "../pages/terms";

export default function LandingRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
}

