import { teacherData2 } from "../assets/data/teacherData2";
import FreeConsultation from "../components/FreeConsultation";
import HorizontalTeacherItem from "../components/HorizontalTeacherItem";
import { motion as _motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Teachers() {
  const { t } = useTranslation();

  return (
    <>
      {/* <Banner
        backgroundImage={onlineClass}
        buttonStyle="button"
        buttonClass="bg-white"
      /> */}

      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <_motion.h2
            className="text-base font-semibold text-blue-dark tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {t("teachers2.hero.subtitle")}
          </_motion.h2>

          <_motion.p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t("teachers2.hero.title")}
          </_motion.p>

          <_motion.p
            className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("teachers2.hero.description")}
          </_motion.p>

          <_motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-dark hover:opacity-90"
            >
              {t("teachers2.hero.cta.viewAll")}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-dark bg-white hover:bg-gray-100"
            >
              {t("teachers2.hero.cta.become")}
            </a>
          </_motion.div>
        </div>
      </section>

      {/* Heading */}
      {/* <_motion.p
        className="text-2xl md:text-3xl font-semibold text-blue-dark mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("teachers.title")}
      </_motion.p> */}

      {/* Grid of Teachers */}
      <div className="container mt-6 mb-30 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        {teacherData2.map((teacher, i) => (
          <_motion.div
            key={teacher.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <HorizontalTeacherItem
              id={teacher.id}
              avatar={teacher.avatar}
              name={teacher.name}
              countryFlag={teacher.countryFlag}
              description={teacher.about}
              subjects={teacher.subjects}
              students={teacher.studentCount}
              teacherHours={teacher.teacherHours}
            />
          </_motion.div>
        ))}
      </div>

      <FreeConsultation theme="blue" />
    </>
  );
}

export default Teachers;
