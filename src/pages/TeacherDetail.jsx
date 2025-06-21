import React, { useMemo } from "react";
import { class1 } from "../assets/images";
import CourseCard from "../components/CourseCard";
import FreeConsultation from "../components/FreeConsultation";
import { motion as _motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { teacherData } from "../assets/data/teacherData";
import { courseData } from "../assets/data/courseData"; // Assuming you have a courseData file

function TeacherDetail() {
  const { id } = useParams();
  const teacher = teacherData.find((t) => t.id === parseInt(id));

  const randomCourses = useMemo(() => {
    const shuffled = [...courseData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * 2) + 2); // 2 or 3 courses
  }, [id]);

  return (
    <div className="mt-10">
      <_motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 container"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Left Column - Teacher Profile Card */}
        <_motion.div
          className="lg:col-span-1 col-span-3 bg-gray-100 p-7 rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <_motion.img
            src={teacher.avatar}
            alt={teacher.name}
            className="rounded-full size-44 object-cover mx-auto mt-2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <p className="text-center font-semibold text-2xl mt-4">
            {teacher.name}
          </p>
          <div className="text-base font-medium space-y-4 mt-5">
            {[
              "Total Course",
              "Ratings",
              "Experiences",
              "Graduated",
              "Language",
            ].map((label, i) => (
              <_motion.div
                key={i}
                className="flex justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <p>{label}</p>
                <p
                  className={
                    label === "Total Course"
                      ? "text-purple-dark font-semibold"
                      : ""
                  }
                >
                  {label === "Total Course" && teacher.totalCourse}
                  {label === "Ratings" && (
                    <>
                      <i className="fa-solid fa-star fa-xs text-yellow-darker"></i>{" "}
                      {teacher.rating} ({teacher.ratingCount})
                    </>
                  )}
                  {label === "Experiences" && teacher.experiences}
                  {label === "Graduated" && teacher.graduated}
                  {label === "Language" && teacher.languages}
                </p>
              </_motion.div>
            ))}

            <_motion.div
              className="flex justify-between items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p>Social</p>
              <div className="flex gap-3">
                <i className="fa-brands fa-facebook-f text-blue-800"></i>
                <i className="fa-brands fa-instagram text-pink-700"></i>
                <i className="fa-brands fa-linkedin-in text-blue-500"></i>
                <i className="fa-brands fa-twitter text-blue-600"></i>
              </div>
            </_motion.div>
          </div>

          <_motion.button
            className="p-2.5 rounded-lg bg-purple-light w-full mt-7 border-2 border-purple-dark text-purple-dark font-medium text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Book A Lesson
          </_motion.button>
        </_motion.div>

        {/* Right Column - About Section */}
        <_motion.div
          className="lg:col-span-2 col-span-3 bg-gray-100 p-7 rounded-xl h-fit"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg font-semibold">About {teacher.name}</p>
          <p className="mt-2 text-gray-700">{teacher.about}</p>

          <p className="text-lg font-semibold mt-5">Certification</p>
          <p className="mt-2 text-gray-700">{teacher.certification}</p>

          <p className="text-lg font-semibold mt-5">
            Courses ({randomCourses.length})
          </p>
          <div className="flex flex-col gap-3 mt-3">
            {randomCourses.map((course, index) => (
              <_motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CourseCard data={course} />
              </_motion.div>
            ))}
          </div>
        </_motion.div>
      </_motion.div>

      <_motion.div
        className="container mt-14 mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-semibold text-2xl text-center">
          Lớp Học English for CEOs, Managers
        </p>
        <p className="w-full sm:w-2/3 lg:w-1/2 mx-auto mt-2 text-center text-gray-600 text-sm sm:text-base">
          Đội ngũ giáo viên bản ngữ Quốc tịch: Anh, Mỹ, Úc, Canada, New Zealand,
          South Africa, … Giáo viên dày dạn kinh nghiệm giảng dạy tiếng Anh, có
          khả năng dạy nhiều độ tuổi và sáng tạo trong cách truyền đạt.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-4 p-4 mt-5">
          {[
            { col: "lg:col-span-2", row: "lg:row-span-1" },
            { col: "lg:col-span-1", row: "lg:row-span-1" },
            { col: "lg:col-span-1", row: "lg:row-span-1" },
            { isGrid: true },
            { col: "lg:col-span-3", row: "lg:row-span-2" },
          ].map((layout, index) => {
            if (layout.isGrid) {
              return (
                <div
                  key={index}
                  className="lg:row-span-2 lg:col-span-1 grid grid-rows-2 gap-4"
                >
                  {[0, 1].map((i) => (
                    <_motion.img
                      key={i}
                      src={class1}
                      alt=""
                      className="object-cover w-full h-48 sm:h-60 lg:h-full rounded-xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + i * 0.1,
                      }}
                    />
                  ))}
                </div>
              );
            }

            return (
              <_motion.img
                key={index}
                src={class1}
                alt=""
                className={`${layout.col ?? ""} ${
                  layout.row ?? ""
                } object-cover w-full h-48 sm:h-60 lg:h-full rounded-xl`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              />
            );
          })}
        </div>
      </_motion.div>

      <FreeConsultation theme="purple" />
    </div>
  );
}

export default TeacherDetail;
