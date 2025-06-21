import { teacherData } from "../assets/data/teacherData";
import { bgProgramBlue } from "../assets/images";
import Banner from "../components/Banner";
import FreeConsultation from "../components/FreeConsultation";
import HorizontalTeacherItem from "../components/HorizontalTeacherItem";
import { motion as _motion } from "framer-motion";

function Teachers() {
  return (
    <>
      <Banner
        backgroundImage={bgProgramBlue}
        buttonStyle="button"
        buttonClass="bg-blue-dark text-white"
      />
      {/* Heading */}
      <_motion.p
        className="text-2xl md:text-3xl font-semibold text-blue-dark mt-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Đội ngũ giáo viên
      </_motion.p>

      {/* Grid of Teachers */}
      <div className="container mt-10 mb-30 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        {teacherData.map((teacher, i) => (
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
              description="Giáo viên tận tâm với nhiều năm kinh nghiệm giảng dạy quốc tế. Kết hợp lý thuyết & thực hành giúp học sinh tiến bộ rõ rệt."
              subject={teacher.subject}
              students={teacher.studentCount}
            />
          </_motion.div>
        ))}
      </div>

      <FreeConsultation theme="blue" />
    </>
  );
}

export default Teachers;
