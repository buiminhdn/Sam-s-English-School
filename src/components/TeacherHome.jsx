import React from "react";
import {
  Teacher1,
  Teacher2,
  Teacher3,
  Teacher4,
  Wave,
  YellowCircle,
} from "../assets/images";

function TeacherHome() {
  return (
    <div className="mt-20 bg-blue-dark pt-30 pb-20 relative">
      <img src={YellowCircle} alt="" className="absolute h-28 left-16 top-20" />
      <img src={Wave} alt="" className="absolute h-32 right-12 top-40" />
      <p className="text-white text-5xl text-center mx-56 leading-tight">
        Chúng tôi mong muốn giúp trẻ em khám phá{" "}
        <span className="text-yellow-dark">niềm vui của việc học</span> tập sáng
        tạo và phát triển thành những cá nhân toàn diện.
      </p>
      <div className="grid grid-cols-4 gap-14 mt-20 container px-32">
        <div className="">
          <img src={Teacher1} alt="" />
          <p className="text-white text-2xl font-medium mt-7 text-center">
            Kristin Watson
          </p>
          <p className="text-gray-300 mt-1 text-center">530 Học viên</p>
        </div>
        <div className="">
          <img src={Teacher2} alt="" />
          <p className="text-white text-2xl font-medium mt-7 text-center">
            Kristin Watson
          </p>
          <p className="text-gray-300 mt-1 text-center">530 Học viên</p>
        </div>
        <div className="">
          <img src={Teacher3} alt="" />
          <p className="text-white text-2xl font-medium mt-7 text-center">
            Kristin Watson
          </p>
          <p className="text-gray-300 mt-1 text-center">530 Học viên</p>
        </div>
        <div className="">
          <img src={Teacher4} alt="" />
          <p className="text-white text-2xl font-medium mt-7 text-center">
            Kristin Watson
          </p>
          <p className="text-gray-300 mt-1 text-center">530 Học viên</p>
        </div>
      </div>
      <button className="mt-20 mx-auto border-2 border-white p-2 flex items-center gap-3 rounded-full">
        <p className="ml-3 mr-1 font-medium text-white">XEM THÊM</p>
        <div className="bg-white px-2 py-1 rounded-full">
          <i className="fa-regular fa-arrow-right"></i>
        </div>
      </button>
    </div>
  );
}

export default TeacherHome;
