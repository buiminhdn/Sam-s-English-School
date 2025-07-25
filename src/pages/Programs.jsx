import Banner from "../components/Banner";
import Filter from "../components/Filter";
import CourseItem from "../components/CourseItem";
import TeacherItem from "../components/TeacherItem";
import { motion as _motion } from "framer-motion";
import FreeConsultation from "../components/FreeConsultation";
import { teacherData } from "../assets/data/teacherData";
import { ROUTE_PATH, SOCIAL_LINKS } from "../routes/routePath";
import { onlineClass, programillus } from "../assets/images";
import { courseData } from "../assets/data/courseData";
import { useTranslation } from "react-i18next";

function Programs() {
  const { t } = useTranslation();

  return (
    <>
      {/* <Banner
        buttonClass="bg-yellow-dark font-medium"
        backgroundImage={onlineClass}
      /> */}

      <section
        className="bg-white"
        style={{
          backgroundImage: `url(${onlineClass})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">
          <_motion.a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
            role="alert"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-xs bg-blue-dark rounded-full text-white px-4 py-1.5 mr-3">
              {t("programs.banner.new")}
            </span>
            <span className="text-sm font-medium">
              {t("programs.banner.text")}
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </_motion.a>

          <_motion.h1
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t("programs.hero.title")}
          </_motion.h1>

          <_motion.p
            className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("programs.hero.description")}
          </_motion.p>

          <_motion.div
            className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href={SOCIAL_LINKS.ZALO}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-dark hover:opacity-90 focus:ring-4 focus:ring-blue-300"
            >
              {t("programs.hero.cta.learnMore")}
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              href={SOCIAL_LINKS.TIKTOK}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border bg-white border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              {t("programs.hero.cta.watchVideo")}
            </a>
          </_motion.div>
        </div>
      </section>

      <Filter />

      <_motion.div className="container mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {courseData.map((course, i) => (
          <_motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <CourseItem {...course} />
          </_motion.div>
        ))}
      </_motion.div>

      <div className="detail-banner relative mt-24">
        <div className="py-14 flex flex-wrap px-5 md:px-20 justify-around gap-10 text-white">
          <div className="flex gap-5 items-center">
            <i className="fa-solid fa-users-viewfinder text-5xl"></i>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-medium">120+</p>
              <p className="text-lg mt-1">Online Courses</p>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <i className="fa-solid fa-book-open-reader text-5xl"></i>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-medium">3000</p>
              <p className="text-lg mt-1">Student Enrolled</p>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <i className="fa-solid fa-chalkboard-user text-5xl"></i>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-medium">70+</p>
              <p className="text-lg mt-1">Expert Instructors</p>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <i className="fa-regular fa-clock text-5xl"></i>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-medium">9000</p>
              <p className="text-lg mt-1">Hours Content</p>
            </div>
          </div>
        </div>
      </div>

      <_motion.div
        className="container mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <_motion.div
          className="flex flex-col gap-6 md:flex-row justify-between items-start md:items-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-3xl md:text-5xl font-medium text-gray-800">
            <span className="text-yellow-darker">
              {t("programs.teacherTitle.span")}
            </span>{" "}
            {t("programs.teacherTitle.rest")}
          </p>
          <div className="flex items-center gap-3 group cursor-pointer">
            <a
              href={ROUTE_PATH.TEACHERS}
              target="_blank"
              className="font-semibold text-yellow-darker group-hover:underline"
            >
              {t("viewAll")}
            </a>
            <div className="bg-yellow-dark px-3 py-1.5 text-white rounded-full group-hover:bg-yellow-light group-hover:text-yellow-dark transition-colors duration-300">
              <i className="fa-light fa-arrow-up-right"></i>
            </div>
          </div>
        </_motion.div>

        {/* Teacher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
          {teacherData.slice(0, 4).map((teacher, i) => (
            <_motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <TeacherItem
                avatar={teacher.avatar}
                name={teacher.name}
                countryFlag={teacher.countryFlag}
                subject={teacher.subject}
                studentCount={teacher.studentCount}
              />
            </_motion.div>
          ))}
        </div>
      </_motion.div>

      <_motion.div
        className="container my-20 lg:my-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image with slide in from left */}
        <_motion.img
          src={programillus}
          alt=""
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Text Content */}
        <_motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <_motion.p
            className="font-semibold text-3xl md:text-5xl leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("programs.benefitTitle1")} <br />
            {t("programs.benefitTitle2")} <br />
            {t("programs.benefitTitle3")}
          </_motion.p>

          {[
            t("programs.benefit1"),
            t("programs.benefit2"),
            t("programs.benefit3"),
          ].map((text, i) => (
            <_motion.div
              key={i}
              className={`flex items-center gap-4 ${i === 0 ? "mt-6" : "mt-4"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.2 }}
              viewport={{ once: true }}
            >
              <i className="fa-solid fa-circle-check text-yellow-dark fa-lg mt-1"></i>
              <p className="text-lg md:text-xl font-light">{text}</p>
            </_motion.div>
          ))}
        </_motion.div>
      </_motion.div>

      <FreeConsultation />
    </>
  );
}

export default Programs;
