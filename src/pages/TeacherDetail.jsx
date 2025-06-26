import React, { useMemo } from "react";
import CourseCard from "../components/CourseCard";
import FreeConsultation from "../components/FreeConsultation";
import { motion as _motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { teacherData } from "../assets/data/teacherData";
import { courseData } from "../assets/data/courseData"; // Assuming you have a courseData file
import { useTranslation } from "react-i18next";
import ClassImage from "../components/ClassImage";

function TeacherDetail() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "vi"; // fallback nếu chưa có

  const { id } = useParams();
  const teacher = teacherData.find((t) => t.id === parseInt(id));

  const randomCourses = useMemo(() => {
    const shuffled = [...courseData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * 2) + 2); // 2 or 3 courses
  }, [id]);

  const infoLabels = [
    t("teacher.totalCourse"),
    t("teacher.ratings"),
    t("teacher.experiences"),
    t("teacher.graduated"),
    t("teacher.language"),
  ];

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
        {/* Left Column - Teacher Profile */}
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
            {infoLabels.map((label, i) => (
              <_motion.div
                key={i}
                className="flex justify-between"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <p>{label}</p>
                <p className={i === 0 ? "text-purple-dark font-semibold" : ""}>
                  {i === 0 && teacher.totalCourse}
                  {i === 1 && (
                    <>
                      <i className="fa-solid fa-star fa-xs text-yellow-darker"></i>{" "}
                      {teacher.rating} ({teacher.ratingCount})
                    </>
                  )}
                  {i === 2 && teacher.experiences[lang]}
                  {i === 3 && teacher.graduated[lang]}
                  {i === 4 && teacher.languages[lang]}
                </p>
              </_motion.div>
            ))}

            <_motion.div
              className="flex justify-between items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p>{t("teacher.social")}</p>
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
            {t("teacher.bookLesson")}
          </_motion.button>
        </_motion.div>

        {/* Right Column - About Section */}
        <_motion.div
          className="lg:col-span-2 col-span-3 bg-gray-100 p-7 rounded-xl h-fit"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg font-semibold">
            {t("teacher.about")} {teacher.name}
          </p>
          <p className="mt-2 text-gray-700">{teacher.about[lang]}</p>

          <p className="text-lg font-semibold mt-5">
            {t("teacher.certification")}
          </p>
          <p className="mt-2 text-gray-700">{teacher.certification[lang]}</p>

          <p className="text-lg font-semibold mt-5">
            {t("teacher.courses")} ({randomCourses.length})
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

      <ClassImage />

      <FreeConsultation theme="purple" />
    </div>
  );
}

export default TeacherDetail;
