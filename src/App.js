import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./trijal-electrikals/Header";
import HeroSection from "./trijal-electrikals/HeroSection";
import AboutSection from "./trijal-electrikals/AboutSection";
import ServicesSection from "./trijal-electrikals/ServicesSection";
import TestimonialsSection from "./trijal-electrikals/TestimonialsSection";
import ContactSection from "./trijal-electrikals/ContactSection";
import Footer from "./trijal-electrikals/Footer";
import Partnership from "./trijal-electrikals/Partnership";
import AdminPanel from "./components/Admin/Admin";
import Dashboard from "./components/Dashboard/Dashboard";
import CategoryPage from "./components/Category/Category";
import ProductPage from "./components/Product/Product";
import InquiryForm from "./components/Inquiry/InquiryForm";
import Register from "./auth/Register/RegisterForm";
import Login from "./auth/Login/LoginForm";
import "./App.css";
import SmartPannel from "./trijal-electrikals/SmartPannel";
import HowItWorks from "./trijal-electrikals/HowItWorks";
import WhyChooseUs from "./trijal-electrikals/WhyChooseUs";
import IndustryAreServing from "./trijal-electrikals/IndustryAreServing";

// Protected Route component to guard routes that require authentication
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

// Main Layout Component for the Home Page
const MainLayout = () => (
  <div>
    <Header />
    <Partnership />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Home page - available to everyone */}
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Partnership />
              <HeroSection />
              <SmartPannel />
              <HowItWorks />
              <ServicesSection />
              <WhyChooseUs />
              <IndustryAreServing />

              {/* <AboutSection />
              <TestimonialsSection />
              <ContactSection /> */}
              <Footer />
            </div>
          }
        />

        {/* Admin panel routes - Protected */}
        <Route
          path="/admin"
          element={<ProtectedRoute element={<AdminPanel />} />}
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="inquiries" element={<InquiryForm />} />
        </Route>

        {/* Redirect any other paths to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
