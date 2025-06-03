import React from "react";
import TopNavbar from "./components/TopNavbar";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function DefaultLayout() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
