import { motion as _motion } from "framer-motion";
import {
  Teacher1,
  Teacher2,
  Teacher3,
  Teacher4,
  Wave,
  YellowCircle,
} from "../../assets/images";

const teacherImages = [Teacher1, Teacher2, Teacher3, Teacher4];

function TeacherHome() {
  return (
    <div className="mt-20 bg-blue-dark pt-30 pb-20 relative overflow-hidden">
      {/* Decorative Icons */}
      <_motion.img
        src={YellowCircle}
        alt=""
        className="absolute h-28 left-16 top-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <_motion.img
        src={Wave}
        alt=""
        className="absolute h-32 right-12 top-40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <_motion.p
        className="text-white text-5xl text-center mx-56 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Chúng tôi mong muốn giúp trẻ em khám phá{" "}
        <span className="text-yellow-dark">niềm vui của việc học</span> tập sáng
        tạo và phát triển thành những cá nhân toàn diện.
      </_motion.p>

      {/* Teacher Cards */}
      <_motion.div
        className="grid grid-cols-4 gap-14 mt-20 container px-32"
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
        {teacherImages.map((img, index) => (
          <_motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <img src={img} alt={`Teacher ${index + 1}`} />
            <p className="text-white text-2xl font-medium mt-7 text-center">
              Kristin Watson
            </p>
            <p className="text-gray-300 mt-1 text-center">530 Học viên</p>
          </_motion.div>
        ))}
      </_motion.div>

      {/* CTA Button */}
      <_motion.button
        className="mt-20 mx-auto border-2 border-white p-2 flex items-center gap-3 rounded-full text-white transition-colors duration-300 hover:bg-white hover:text-black group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="ml-3 mr-1 font-medium">XEM THÊM</p>
        <div className="bg-white px-2 py-1 rounded-full text-blue-dark group-hover:bg-blue-dark group-hover:text-white transition-colors duration-300">
          <i className="fa-regular fa-arrow-right"></i>
        </div>
      </_motion.button>
    </div>
  );
}

export default TeacherHome;
