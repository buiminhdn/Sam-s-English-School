import React from "react";
import { QuestionsIllus } from "../../assets/images";

function Questions() {
  return (
    <div className="container mt-28 flex justify-between gap-10 relative">
      <div className="w-full">
        <p className="text-center text-6xl font-medium text-gray-800 leading-tight">
          Những <span className="text-purple-dark">câu hỏi</span>
          <br />
          thường gặp
        </p>
        <img
          src={QuestionsIllus}
          alt=""
          className="h-[32rem] absolute top-14 -left-3"
        />
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full p-3 rounded-full border border-gray-300 flex items-center justify-between gap-7">
          <p className="ml-4 text-lg">
            Điểm khác biệt so với các nền tảng giáo dục khác là gì?
          </p>
          <div className="size-8 bg-purple-light text-purple-dark rounded-full flex justify-center items-center">
            <i className="fa-lg fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="w-full p-3 rounded-full border border-gray-300 flex items-center justify-between gap-7">
          <p className="ml-4 text-lg">
            Làm thế nào tôi có thể truy cập vào Trường tiếng Anh Sam?
          </p>
          <div className="size-8 bg-purple-light text-purple-dark rounded-full flex justify-center items-center">
            <i className="fa-lg fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="w-full p-3 rounded-full border border-gray-300 flex items-center justify-between gap-7">
          <p className="ml-4 text-lg">
            Vấn đề bảo mật dữ liệu của trẻ em khi sử dụng nền tảng này thì sao?
          </p>
          <div className="size-8 bg-purple-light text-purple-dark rounded-full flex justify-center items-center">
            <i className="fa-lg fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="w-full p-3 rounded-full border border-gray-300 flex items-center justify-between gap-7">
          <p className="ml-4 text-lg">
            Điểm khác biệt so với các nền tảng giáo dục khác là gì?
          </p>
          <div className="size-8 bg-purple-light text-purple-dark rounded-full flex justify-center items-center">
            <i className="fa-lg fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="w-full p-3 rounded-full border border-gray-300 flex items-center justify-between gap-7">
          <p className="ml-4 text-lg">
            Làm thế nào tôi có thể truy cập vào Trường tiếng Anh Sam?
          </p>
          <div className="size-8 bg-purple-light text-purple-dark rounded-full flex justify-center items-center">
            <i className="fa-lg fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="w-full p-3 rounded-full border border-gray-300 flex items-center justify-between gap-7">
          <p className="ml-4 text-lg">
            Vấn đề bảo mật dữ liệu của trẻ em khi sử dụng nền tảng này thì sao?
          </p>
          <div className="size-8 bg-purple-light text-purple-dark rounded-full flex justify-center items-center">
            <i className="fa-lg fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
