import BannerBlue from "../components/BannerBlue";
import FreeConsultation from "../components/FreeConsultation";
import HorizontalTeacherItem from "../components/HorizontalTeacherItem";
import { motion as _motion } from "framer-motion";

function Teachers() {
  return (
    <>
      <BannerBlue />
      {/* Heading */}
      <_motion.p
        className="text-3xl font-semibold text-blue-dark mt-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Đội ngũ giáo viên
      </_motion.p>

      {/* Grid of Teachers */}
      <div className="grid grid-cols-2 gap-10 container mt-10 mb-30">
        {Array.from({ length: 8 }).map((_, i) => (
          <_motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <HorizontalTeacherItem />
          </_motion.div>
        ))}
      </div>
      <FreeConsultation theme="blue" />
    </>
  );
}

export default Teachers;
