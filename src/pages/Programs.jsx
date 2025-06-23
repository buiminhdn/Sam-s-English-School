import Banner from "../components/Banner";
import Filter from "../components/Filter";
import CourseItem from "../components/CourseItem";
import TeacherItem from "../components/TeacherItem";
import { motion as _motion } from "framer-motion";
import FreeConsultation from "../components/FreeConsultation";
import { teacherData } from "../assets/data/teacherData";
import { SOCIAL_LINKS } from "../routes/routePath";
import { programillus } from "../assets/images";
import { courseData } from "../assets/data/courseData";
import { useTranslation } from "react-i18next";

function Programs() {
  const { t } = useTranslation();

  return (
    <>
      <Banner buttonClass="bg-yellow-dark font-medium" />

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
              href={SOCIAL_LINKS.ZALO}
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
