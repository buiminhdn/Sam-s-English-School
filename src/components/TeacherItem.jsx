import React from "react";
import { america, teacherone } from "../assets/images";

function TeacherItem() {
  return (
    <div className="rounded-xl bg-white shadow-md hover:shadow-2xl transition-shadow duration-500">
      <img
        src={teacherone}
        alt=""
        className="rounded-t-xl h-70 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex justify-center items-center gap-3 mt-2">
          <p className="text-2xl font-medium">Colin Hancock</p>
          <img src={america} alt="" className="size-5" />
        </div>
        <div className="flex justify-evenly gap-5 mt-4 text-gray-500">
          <div className="flex items-center gap-3">
            <i className="fa-lg fa-light fa-book"></i>
            <p className="text-base">IELTS</p>
          </div>
          <div className="flex items-center gap-3">
            <i className="fa-lg fa-light fa-user-group"></i>
            <p className="text-base">530 Học viên</p>
          </div>
        </div>
        <button className="flex items-center gap-3 justify-center border-2 border-yellow-dark bg-yellow-light p-2.5 w-full rounded-lg mt-6 text-yellow-darker font-medium hover:bg-yellow-darker hover:border-yellow-dark hover:text-white transition-colors duration-300">
          <p>Book giáo viên</p>
          <i className="fa-regular fa-chevrons-right"></i>
        </button>
      </div>
    </div>
  );
}

export default TeacherItem;
