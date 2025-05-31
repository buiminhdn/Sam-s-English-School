import React from "react";
import { logo } from "../assets/images";

function TopNavbar() {
  return (
    <div className="bg-blue-dark">
      <div className="container py-4 flex justify-between items-center text-white">
        <img src={logo} alt="logo" className="h-14" />
        <div className="flex gap-20">
          <div className="flex items-center gap-4">
            <i className="fa-2xl fa-thin fa-phone"></i>
            <div>
              <p className="font-light">Hỗ trợ 24/7</p>
              <p className="text-base mt-0.5">+84 822-335-446</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <i className="fa-2xl fa-thin fa-envelope-open"></i>
            <div>
              <p className="font-light">Email liên hệ</p>
              <p className="text-base mt-0.5">sam@samenglishschool.com</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <p className="font-medium">EN | VN</p>
          <button className="bg-white font-medium text-black py-2.5 px-5 rounded-sm">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
