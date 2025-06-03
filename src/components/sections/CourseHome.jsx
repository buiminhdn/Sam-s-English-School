import CourseItem from "../CourseItem";
import { motion as _motion } from "framer-motion";
function CourseHome() {
  return (
    <div className="container mt-20">
      {/* Header section with animation */}
      <_motion.div
        className="flex justify-between items-end"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-5xl font-medium text-gray-800">
          <span className="text-purple-dark">Khoá học</span> của chúng tôi
        </p>
        <div className="flex items-center gap-3 group cursor-pointer">
          <p className="font-semibold text-purple-dark group-hover:underline">
            Xem tất cả
          </p>
          <div className="bg-purple-dark px-3 py-1.5 text-white rounded-full group-hover:bg-purple-light group-hover:text-purple-dark transition-colors duration-300">
            <i className="fa-light fa-arrow-up-right"></i>
          </div>
        </div>
      </_motion.div>

      {/* Course items with staggered animation */}
      <_motion.div
        className="grid grid-cols-4 gap-7 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[...Array(4)].map((_, i) => (
          <_motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <CourseItem />
          </_motion.div>
        ))}
      </_motion.div>
    </div>
  );
}

export default CourseHome;
