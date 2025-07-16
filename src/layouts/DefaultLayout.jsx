import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function DefaultLayout() {
  return (
    <div>
      {/* <TopNavbar /> */}
      <a target="_blank" href="https://zalo.me/0707060068" className="btn-call">
        <div className="btn-call__ico">
          <i className="fa-solid fa-phone"></i>
        </div>
      </a>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
