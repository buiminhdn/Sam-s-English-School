import { Course1 } from "../assets/images";

function CourseItem() {
  return (
    <div className="rounded-xl bg-white shadow-md hover:shadow-2xl transition-shadow duration-500">
      <img
        src={Course1}
        alt=""
        className="rounded-t-xl h-50 w-full object-cover"
      />
      <div className="p-4">
        <p className="text-lg font-medium">IELTS Preparation</p>
        <p className="mt-1 text-gray-600">
          Course summarizing semester 1 knowledge for 3rd graders according to
          the program at school. The course includes 120 lessons.
        </p>
        <div className="w-full border border-gray-300 border-dashed my-4"></div>
        <div className="flex items-center gap-2">
          <div className="bg-blue-light size-8 text-blue-dark rounded-md flex items-center justify-center">
            <i className="fa-regular fa-screen-users"></i>
          </div>
          <p className="text-gray-700">2,550 Enrolled Students</p>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="bg-blue-light size-8 text-blue-dark rounded-md flex items-center justify-center">
            <i className="fa-regular fa-chalkboard-user"></i>
          </div>
          <p className="text-gray-700">512 Classes Taken</p>
        </div>
        <button className="border-2 border-yellow-dark bg-yellow-light p-2.5 w-full rounded-lg mt-6 text-yellow-darker hover:bg-yellow-darker hover:text-white transition-colors duration-300">
          Tham gia ngay
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
