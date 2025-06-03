import React from "react";
import { bgProgram } from "../assets/images";

function Banner() {
  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(${bgProgram})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="mt-10 h-90 rounded-4xl flex flex-col justify-center items-start pl-80
            "
      >
        <p className="font-semibold text-4xl">
          Sam cung cấp cho bạn mức
          <br />
          giảm giá 30% trong mùa này
        </p>
        <p className="text-xl font-light mt-4">
          Khuyến mãi có hiệu lực từ 1/5/2025 - 30/6/2025
        </p>
        <button className="mt-7 text-base bg-yellow-dark py-3.5 px-5 font-medium rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          Khám phá ngay
        </button>
      </div>
    </div>
  );
}

export default Banner;
