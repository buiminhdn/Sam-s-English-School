import { Course1 } from "../../assets/images";
import CourseItem from "../CourseItem";

function CourseHome() {
  return (
    <div className="container mt-20">
      <div className="flex justify-between items-end">
        <p className="text-5xl font-medium text-gray-800">
          <span className="text-purple-dark">Khoá học</span> của chúng tôi
        </p>
        <div className="flex items-center gap-3 group">
          <p className="font-semibold text-purple-dark group-hover:underline">
            Xem tất cả
          </p>
          <div className="bg-purple-dark px-3 py-1.5 text-white rounded-full group-hover:bg-purple-light group-hover:text-purple-dark transition-colors duration-300">
            <i className="fa-light fa-arrow-up-right"></i>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-7 mt-10">
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </div>
  );
}

export default CourseHome;
