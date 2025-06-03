import React from "react";
import { DocumentHomeIllustration, TextCircle } from "../../assets/images";

function DocumentHome() {
  return (
    <div className="container mt-20 flex items-center gap-20">
      <div>
        <p className="text-7xl font-medium text-gray-800 leading-[5.5rem] relative">
          Các tài liệu học tập được cung cấp rất thú vị đối với{" "}
          <span className="relative inline-block text-purple-dark">
            trẻ em
            <img
              src={TextCircle}
              alt=""
              className="h-24 absolute right-0 top-0 -z-10"
            />
          </span>
        </p>

        <p className="text-lg font-light mt-10">
          Đừng lo lắng! Con bạn sẽ có thời gian vui vẻ khi học với các tài liệu
          dễ hiểu của chúng tôi.
        </p>

        <button className="mt-10 bg-white border-2 border-blue-dark p-2 flex items-center gap-3 rounded-full hover:bg-blue-dark hover:text-white group transition-colors duration-300">
          <p className="ml-1.5 font-medium">ĐĂNG KÝ NGAY</p>
          <div className="bg-blue-dark text-white px-2.5 py-1 rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
            <i className="fa-regular fa-arrow-up-right"></i>
          </div>
        </button>
      </div>

      <img src={DocumentHomeIllustration} alt="" className="w-2/5" />
    </div>
  );
}

export default DocumentHome;
