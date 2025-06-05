import Banner from "../components/Banner";
import Filter from "../components/Filter";
import CourseItem from "../components/CourseItem";
import TeacherItem from "../components/TeacherItem";
import { motion as _motion } from "framer-motion";
import WhatYouGetSection from "../components/sections/WhatYouGetSection";
import FreeConsultation from "../components/FreeConsultation";

function Programs() {
  return (
    <>
      <Banner />
      <Filter />
      <_motion.div
        className="container mt-10 grid grid-cols-4 gap-x-8 gap-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[...Array(8)].map((_, i) => (
          <_motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <CourseItem />
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
          className="flex justify-between items-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-5xl font-medium text-gray-800">
            <span className="text-yellow-darker">Giáo viên</span> của chúng tôi
          </p>
          <div className="flex items-center gap-3 group cursor-pointer">
            <p className="font-semibold text-yellow-darker group-hover:underline">
              Xem tất cả
            </p>
            <div className="bg-yellow-dark px-3 py-1.5 text-white rounded-full group-hover:bg-yellow-light group-hover:text-yellow-dark transition-colors duration-300">
              <i className="fa-light fa-arrow-up-right"></i>
            </div>
          </div>
        </_motion.div>

        {/* Teacher Cards */}
        <div className="grid grid-cols-4 gap-7 mt-10">
          {[...Array(4)].map((_, i) => (
            <_motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <TeacherItem />
            </_motion.div>
          ))}
        </div>
      </_motion.div>
      <WhatYouGetSection />
      <FreeConsultation />
    </>
  );
}

export default Programs;
