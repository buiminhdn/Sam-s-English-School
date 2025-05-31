import React from "react";
import {
  adj,
  CirclePurple,
  Dots,
  Wave,
  WhyChooseGame,
  WhyChooseProgram,
  WhyChooseTeacher,
} from "../assets/images";

function WhyChose() {
  return (
    <div className="container mt-20">
      <div className="flex justify-between items-end">
        <p className="text-7xl font-medium text-gray-800">
          Tại Sao Nên Chọn
          <br />
          Sam's English School
        </p>
        <img src={adj} alt="illustration adjectives" className="w-64" />
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <div
          className="bg-purple-light p-10 rounded-4xl"
          style={{
            backgroundImage: `url(${CirclePurple})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top -20px right -100px",
            backgroundSize: "250px",
          }}
        >
          <img src={WhyChooseTeacher} alt="" className="h-32" />
          <p className="font-medium text-5xl mt-10">
            Giáo viên
            <br />
            kinh nghiệm
          </p>
          <p className="text-lg font-light leading-6 mt-10">
            Khám phá các hoạt động thú vị như tô màu, thủ công và khoa học.
          </p>
        </div>

        <div
          className="bg-blue-dark p-10 rounded-4xl text-white"
          style={{
            backgroundImage: `url(${Wave})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top -50px right -60px",
            backgroundSize: "230px",
          }}
        >
          <img src={WhyChooseProgram} alt="" className="h-32" />
          <p className="font-medium text-5xl mt-10">
            Chương trình
            <br />
            đa dạng
          </p>
          <p className="text-lg font-light leading-6 mt-10">
            Khám phá các hoạt động thú vị như tô màu, thủ công và khoa học.
          </p>
        </div>

        <div
          className="bg-yellow-dark p-10 rounded-4xl "
          style={{
            backgroundImage: `url(${Dots})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top -20px right -30px",
            backgroundSize: "180px",
          }}
        >
          <img src={WhyChooseGame} alt="" className="h-32" />
          <p className="font-medium text-5xl mt-10">
            Chương trình
            <br />
            đa dạng
          </p>
          <p className="text-lg font-light leading-6 mt-10">
            Khám phá các hoạt động thú vị như tô màu, thủ công và khoa học.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChose;
