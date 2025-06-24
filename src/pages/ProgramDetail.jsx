import { useMemo } from "react";
import FreeConsultation from "../components/FreeConsultation";
import { motion as _motion } from "framer-motion";
import { courseData } from "../assets/data/courseData";
import { useParams } from "react-router-dom";
import { ROUTE_PATH, SOCIAL_LINKS } from "../routes/routePath";
import { feedbackData } from "../assets/data/feedbackData";
import ClassImage from "../components/ClassImage";
import { useTranslation } from "react-i18next";

function ProgramDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const course = courseData.find((item) => item.id === Number(id));

  const randomCourses = useMemo(() => {
    const shuffled = [...courseData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  if (!course) {
    return (
      <div className="text-center mt-10 text-red-500">
        Khoá học không tồn tại.
      </div>
    );
  }

  return (
    <div className=" mt-10">
      {/* Phần chi tiết khoá học */}
      <_motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gray-100 p-6 md:p-10 rounded-xl flex flex-col lg:flex-row gap-6 md:gap-8">
          <_motion.img
            src={course.image}
            alt={course.title}
            className="w-full md:w-auto md:h-96 object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <_motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {course.title}
            </p>

            <p className="text-sm sm:text-base">
              <span className="text-gray-700">
                {t("programDetail.totalLessons")}:{" "}
              </span>
              <span className="font-medium">
                {course.lessons} {t("programDetail.lessonUnit")}
              </span>
            </p>
            <p className="text-sm sm:text-base">
              <span className="text-gray-700">
                {t("programDetail.duration")}:{" "}
              </span>
              <span className="font-medium">{course.duration}</span>
            </p>
            <p className="text-sm sm:text-base">
              <span className="text-gray-700">
                {t("programDetail.studentsLearned")}:{" "}
              </span>
              <span className="font-medium">{course.studentsLearned}</span>
            </p>

            <div className="flex items-center gap-2 text-sm sm:text-base">
              <p className="text-gray-700">{t("programDetail.rating")}: </p>
              <div className="flex text-yellow-dark gap-0.5">
                {Array.from({ length: course.rating }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
            </div>

            <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row gap-4">
              <a
                href={SOCIAL_LINKS.ZALO}
                className="bg-blue-dark hover:shadow-xl transition-shadow duration-300 py-2.5 px-5 sm:px-7 rounded-lg text-white w-full sm:w-auto"
              >
                {t("programDetail.register")}
              </a>
              <a
                href={SOCIAL_LINKS.ZALO}
                className="bg-blue-light hover:shadow-xl transition-shadow duration-300 py-2.5 px-5 rounded-lg text-blue-dark font-medium w-full sm:w-auto"
              >
                {t("programDetail.tryFree")}
              </a>
            </div>
          </_motion.div>
        </div>
      </_motion.div>

      {/* Nội dung chi tiết */}
      <_motion.div
        className="container mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-semibold text-lg mb-2">
          {t("programDetail.courseDetail")}
        </p>
        <p className="leading-relaxed">{course.details}</p>

        <p className="font-semibold text-lg mb-2 mt-5">
          {t("programDetail.certification")}
        </p>
        <p className="leading-relaxed">{course.certification}</p>

        <p className="font-semibold text-lg mb-2 mt-5">
          {t("programDetail.target")}
        </p>
        <p className="leading-relaxed">{course.target}</p>

        <p className="font-semibold text-lg mb-2 mt-5">
          {t("programDetail.learningOutcomes")}
        </p>
        <ul className="list-disc pl-5 leading-relaxed">
          {course.learningOutcomes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </_motion.div>

      <_motion.div
        className="container mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-semibold text-xl sm:text-2xl">
            {t("programDetail.similarCourses")}
          </p>
          <div className="flex gap-2 items-center text-gray-800 text-base">
            <a href={ROUTE_PATH.PROGRAMS} className="hover:underline">
              {t("programDetail.viewAll")}
            </a>
            <i className="fa-regular fa-angle-right"></i>
          </div>
        </div>

        {/* Grid of Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {randomCourses.map((course, index) => (
            <_motion.a
              href={`/Programs/${course.id}`}
              key={course.id}
              className="bg-gray-100 hover:shadow-xl transition-shadow duration-300 p-5 rounded-xl flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="rounded-lg w-28 h-28 object-cover shrink-0"
              />
              <div>
                <p className="font-medium text-base sm:text-lg line-clamp-2">
                  {course.title}
                </p>
                <p className="mt-1 text-gray-800 font-light text-sm sm:text-base line-clamp-4">
                  {course.description}
                </p>
              </div>
            </_motion.a>
          ))}
        </div>
      </_motion.div>

      <_motion.div
        className="container mt-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-semibold text-xl sm:text-2xl text-center">
          {t("programDetail.testimonials")}
        </p>
        <p className="w-full sm:w-4/5 lg:w-1/2 mx-auto mt-2 text-center text-gray-600 text-sm sm:text-base">
          {t("programDetail.testimonialDesc")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {feedbackData.map((item, index) => (
            <_motion.div
              key={item.id}
              className="bg-gray-100 p-6 rounded-lg flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-gray-700 text-sm sm:text-base">
                {item.content}
              </p>
              <div className="flex gap-2 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-base">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </_motion.div>
          ))}
        </div>
      </_motion.div>

      <ClassImage />

      <FreeConsultation />
    </div>
  );
}

export default ProgramDetail;
