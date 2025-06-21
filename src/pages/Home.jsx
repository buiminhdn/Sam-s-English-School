import {
  BoyHoldCamera,
  BoyThumbUp,
  adj,
  CirclePurple,
  Dots,
  Wave,
  WhyChooseGame,
  WhyChooseProgram,
  WhyChooseTeacher,
  DocumentHomeIllustration,
  TextCircle,
  teacher1,
  teacher2,
  teacher3,
  teacher4,
  YellowCircle,
  course1,
  course2,
  course3,
  Schools,
  course4,
  QuestionsIllus,
} from "../assets/images";
import CourseItem from "../components/CourseItem";
import { ROUTE_PATH, SOCIAL_LINKS } from "../routes/routePath";
import { useState } from "react";
import { motion as _motion, AnimatePresence } from "framer-motion";
import Contact from "../components/Contact";

const teacherData = [
  { img: teacher1, name: "Emma Johnson", students: "530 students" }, // girl
  { img: teacher2, name: "Chloe Anderson", students: "470 students" }, // girl
  { img: teacher3, name: "Michael Thompson", students: "612 students" }, // man
  { img: teacher4, name: "Sophia Nguyen", students: "488 students" }, // girl
];

const courseData = [
  {
    image: course1,
    title: "IELTS Preparation",
    description:
      "Prepare for the IELTS exam with a structured program focusing on listening, reading, writing, and speaking.",
    enrolled: "2,550 Enrolled Students",
    classesTaken: "512 Classes Taken",
  },
  {
    image: course2,
    title: "English for CEOs, Managers",
    description:
      "Tailored English training for professionals to lead meetings, presentations, and business negotiations confidently.",
    enrolled: "1,200 Enrolled Students",
    classesTaken: "310 Classes Taken",
  },
  {
    image: course3,
    title: "Communication & Pronunciation",
    description:
      "Boost your fluency and confidence in everyday conversations. Ideal for learners aiming to sound natural.",
    enrolled: "1,860 Enrolled Students",
    classesTaken: "435 Classes Taken",
  },
  {
    image: course4,
    title: "Starters, Movers, Flyers",
    description:
      "Cambridge English course for children aged 6-12 to build strong foundations in vocabulary, grammar, and confidence.",
    enrolled: "2,700 Enrolled Students",
    classesTaken: "590 Classes Taken",
  },
];

const questionsData = [
  {
    question:
      "Trung tâm có chương trình phù hợp với độ tuổi của con tôi không?",
    answer:
      "Chắc chắn rồi! Sam's English School có các khóa học dành riêng cho trẻ em, thanh thiếu niên, sinh viên và người lớn, được thiết kế theo trình độ và nhu cầu học tập cụ thể.",
  },
  {
    question: "Giáo viên tại trung tâm là người bản ngữ hay người Việt?",
    answer:
      "Chúng tôi có đội ngũ giáo viên bản ngữ đến từ Anh, Mỹ, Úc cùng các giáo viên Việt Nam giàu kinh nghiệm. Mỗi lớp đều có phương pháp giảng dạy phù hợp để đảm bảo học viên tiếp thu hiệu quả nhất.",
  },
  {
    question: "Tôi có thể đăng ký học thử trước khi quyết định không?",
    answer:
      "Hoàn toàn được! Chúng tôi cung cấp buổi học thử miễn phí, giúp học viên trải nghiệm không khí lớp học và phong cách giảng dạy trước khi đăng ký chính thức.",
  },
  {
    question: "Học phí tại Sam's English School có linh hoạt không?",
    answer:
      "Trung tâm áp dụng nhiều hình thức thanh toán linh hoạt theo từng khóa học, với ưu đãi hấp dẫn khi đăng ký sớm hoặc theo nhóm.",
  },
  {
    question: "Làm sao để theo dõi kết quả học tập của con?",
    answer:
      "Phụ huynh sẽ nhận được báo cáo định kỳ và có thể tham gia các buổi họp mặt với giáo viên để cập nhật tiến độ học tập cũng như định hướng phù hợp cho con.",
  },
];

function Home() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="container relative mt-20 pb-20 overflow-hidden">
        {/* Boy Holding Camera - Slide in from left */}
        <_motion.img
          src={BoyHoldCamera}
          alt="Boy Holding Camera"
          className="hidden lg:block lg:absolute w-44 left-50"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        />

        {/* Boy Thumbs Up - Slide in from right */}
        <_motion.img
          src={BoyThumbUp}
          alt="Boy Thumb Up"
          className="hidden lg:block lg:absolute w-64 right-40 top-20"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        />

        <_motion.p
          className="text-6xl lg:text-8xl text-center font-medium text-gray-800"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Nơi tốt nhất để
          <span className="hidden sm:inline">
            <br />
          </span>
          <span className="text-purple-dark"> học</span> và{" "}
          <span className="text-yellow-darker"> chơi </span>
          <span className="hidden sm:inline">
            <br />
          </span>
          cho mọi lứa tuổi
        </_motion.p>

        {/* Subtext */}
        <_motion.p
          className="text-center mt-5 lg:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          Khám phá hàng ngàn hoạt động học tập tương tác và thú vị
          <span className="hidden sm:inline">
            <br />
          </span>
          để hỗ trợ quá trình phát triển và học tập của con bạn.
        </_motion.p>

        {/* CTA Button */}
        <_motion.a
          href={SOCIAL_LINKS.ZALO}
          target="_blank"
          className=" mx-auto mt-5 lg:mt-12 w-fit bg-blue-dark p-3 flex items-center gap-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <p className="text-white ml-1.5">ĐĂNG KÝ NGAY</p>
          <div className="bg-white px-2.5 py-1 rounded-full">
            <i className="fa-regular fa-arrow-up-right fa-beat"></i>
          </div>
        </_motion.a>
      </div>

      <div className="container">
        {/* Header Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-end gap-6">
          {/* Heading */}
          <_motion.p
            className="text-4xl sm:text-5xl lg:text-7xl font-medium text-gray-800 text-center lg:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Tại Sao Nên Chọn
            <span className="hidden sm:inline">
              <br />
            </span>
            Sam's English School
          </_motion.p>

          {/* Image */}
          <_motion.img
            src={adj}
            alt="illustration adjectives"
            className="w-40 sm:w-52 lg:w-64"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  mt-10">
          {[
            {
              bg: "bg-purple-light",
              image: WhyChooseTeacher,
              title: "Giáo viên\nkinh nghiệm",
              desc: "Đội ngũ giáo viên 100% bản ngữ đến từ Mỹ, Anh, Úc với nhiều năm kinh nghiệm.",
              bgImage: CirclePurple,
              bgPos: "top -20px right -100px",
              bgSize: "250px",
              textColor: "text-black",
            },
            {
              bg: "bg-blue-dark",
              image: WhyChooseProgram,
              title: "Chương trình\nđa dạng",
              desc: "Từ luyện thi IELTS, Giao tiếp, Tiếng Anh cho doanh nghiệp đến lớp học 1 kèm 1.",
              bgImage: Wave,
              bgPos: "top -50px right -60px",
              bgSize: "230px",
              textColor: "text-white",
            },
            {
              bg: "bg-yellow-dark",
              image: WhyChooseGame,
              title: "Phương pháp học sáng tạo",
              desc: "Học mà chơi - chơi mà học! Áp dụng mô hình học tương tác, thực hành liên tục.",
              bgImage: Dots,
              bgPos: "top -20px right -30px",
              bgSize: "180px",
              textColor: "text-black",
            },
          ].map((item, index) => (
            <_motion.div
              key={index}
              className={`${item.bg} ${item.textColor} p-6 sm:p-8 md:p-10 rounded-3xl`}
              style={{
                backgroundImage: `url(${item.bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: item.bgPos,
                backgroundSize: item.bgSize,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              <img src={item.image} alt="" className="h-20 sm:h-24 md:h-32" />
              <p className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 sm:mt-8 whitespace-pre-line">
                {item.title}
              </p>
              <p className="text-base sm:text-lg font-light leading-6 mt-6 sm:mt-8">
                {item.desc}
              </p>
            </_motion.div>
          ))}
        </div>
      </div>

      <div className="container mt-16 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        {/* Left Side Content */}
        <_motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <p className="text-4xl sm:text-5xl lg:text-7xl font-medium text-gray-800 leading-tight sm:leading-[4rem] lg:leading-[5.5rem] relative">
            Tài liệu học tập được cung cấp thú vị sinh động đối với{" "}
            <span className="relative inline-block text-purple-dark">
              trẻ em
              {/* Animated Circle */}
              <img
                src={TextCircle}
                alt=""
                className="h-16 sm:h-20 lg:h-24 absolute right-0 top-0 -z-10"
              />
            </span>
          </p>

          {/* Subtext */}
          <_motion.p
            className="text-base sm:text-lg font-light mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Chúng tôi thiết kế giáo trình dành riêng cho trẻ em - đầy màu sắc,
            sinh động và dễ hiểu. Mỗi bài học đều kết hợp trò chơi, hình ảnh, và
            hoạt động tương tác giúp bé học một cách tự nhiên mà không thấy nhàm
            chán.
          </_motion.p>

          {/* CTA Button */}
          <_motion.a
            href={SOCIAL_LINKS.ZALO}
            target="_blank"
            className="mx-auto lg:mx-0 mt-6 sm:mt-8 w-fit bg-white border-2 border-blue-dark p-2 flex items-center gap-3 rounded-full hover:bg-blue-dark hover:text-white group transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="ml-1.5 font-medium">ĐĂNG KÝ NGAY</p>
            <div className="bg-blue-dark text-white px-2.5 py-1 rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
              <i className="fa-regular fa-arrow-up-right"></i>
            </div>
          </_motion.a>
        </_motion.div>

        {/* Right Side Image */}
        <_motion.img
          src={DocumentHomeIllustration}
          alt=""
          className="w-full sm:w-3/5 lg:w-2/5 max-w-md"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>

      <div className="mt-20 bg-blue-dark pt-20 pb-16 relative overflow-hidden">
        {/* Decorative Icons */}
        <_motion.img
          src={YellowCircle}
          alt=""
          className="hidden lg:block lg:absolute h-16 sm:h-24 lg:h-28 left-4 sm:left-10 lg:left-16 top-10 lg:top-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <_motion.img
          src={Wave}
          alt=""
          className="hidden lg:block lg:absolute h-20 sm:h-28 lg:h-32 right-4 sm:right-8 lg:right-12 top-20 lg:top-40"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Heading */}
        <_motion.p
          className="text-white text-2xl sm:text-3xl lg:text-5xl text-center px-4 sm:px-12 lg:px-56 leading-snug sm:leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Chúng tôi mong muốn giúp học trò khám phá{" "}
          <span className="text-yellow-dark">niềm vui của việc học tập</span>{" "}
          sáng tạo và phát triển thành những cá nhân toàn diện.
        </_motion.p>

        {/* Teacher Cards */}
        <_motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-14 container px-4 sm:px-8 lg:px-20"
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
          {teacherData.map(({ img, name, students }, index) => (
            <_motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <img src={img} alt={`Teacher ${index + 1}`} className="w-full" />
              <p className="text-white text-xl sm:text-2xl font-medium mt-5 text-center">
                {name}
              </p>
              <p className="text-gray-300 text-sm sm:text-base mt-1 text-center">
                {students}
              </p>
            </_motion.div>
          ))}
        </_motion.div>

        {/* CTA Button */}
        <_motion.a
          href={ROUTE_PATH.TEACHERS}
          className="mt-12 sm:mt-16 lg:mt-20 w-fit mx-auto border-2 border-white p-2 flex items-center gap-3 rounded-full text-white transition-colors duration-300 hover:bg-white hover:text-black group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="ml-3 mr-1 font-medium">XEM THÊM</p>
          <div className="bg-white px-2 py-1 rounded-full text-blue-dark group-hover:bg-blue-dark group-hover:text-white transition-colors duration-300">
            <i className="fa-regular fa-arrow-right"></i>
          </div>
        </_motion.a>
      </div>

      <div className="container mt-20">
        {/* Header section with animation */}
        <_motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-800">
            <span className="text-purple-dark">Khoá học</span> của chúng tôi
          </p>
          <a
            href={ROUTE_PATH.PROGRAMS}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <p className="font-semibold text-purple-dark group-hover:underline">
              Xem tất cả
            </p>
            <div className="bg-purple-dark px-3 py-1.5 text-white rounded-full group-hover:bg-purple-light group-hover:text-purple-dark transition-colors duration-300">
              <i className="fa-light fa-arrow-up-right"></i>
            </div>
          </a>
        </_motion.div>

        {/* Course items with staggered animation */}
        <_motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7 mt-10"
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
          {courseData.map((course, i) => (
            <_motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <CourseItem
                image={course.image}
                title={course.title}
                description={course.description}
                enrolled={course.enrolled}
                classesTaken={course.classesTaken}
              />
            </_motion.div>
          ))}
        </_motion.div>
      </div>

      <div className="container mt-28">
        {/* Animated heading */}
        <_motion.p
          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-purple-dark">Khách hàng</span> của chúng tôi
        </_motion.p>

        {/* Animated image */}
        <_motion.img
          src={Schools}
          alt="Schools"
          className="mt-10 sm:mt-14 w-full mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <div className="container mt-28 px-4 sm:px-6 flex flex-col lg:flex-row gap-10 relative">
        {/* Left Side (Heading + Illustration) */}
        <_motion.div
          className="w-full relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <_motion.p
            className="text-center text-3xl sm:text-5xl lg:text-6xl font-medium text-gray-800 leading-snug sm:leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Những <span className="text-purple-dark">câu hỏi </span>
            <br className="hidden sm:block" />
            thường gặp
          </_motion.p>

          {/* Illustration - only show on lg+ */}
          <_motion.img
            src={QuestionsIllus}
            alt=""
            className="hidden lg:block h-[26rem] xl:h-[32rem] absolute top-16 -left-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          />
        </_motion.div>

        {/* Right Side (Questions) */}
        <div className="w-full flex flex-col gap-4 mt-0">
          {questionsData.map(({ question, answer }, i) => {
            const isOpen = i === openIndex;
            return (
              <div
                key={i}
                className={`w-full p-3 rounded-3xl border flex flex-col border-gray-300 bg-white ${
                  isOpen ? "shadow-lg" : ""
                }`}
              >
                <div
                  onClick={() => toggleQuestion(i)}
                  className="flex items-center justify-between cursor-pointer gap-7"
                >
                  <p className="ml-2 text-base sm:text-lg">{question}</p>
                  <div
                    className={`size-8 rounded-full flex flex-none justify-center items-center transition-transform duration-300 ${
                      isOpen
                        ? "bg-purple-dark text-white rotate-45"
                        : "bg-purple-light text-purple-dark"
                    }`}
                  >
                    <i className="fa-lg fa-solid fa-plus"></i>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <_motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: 12 },
                        collapsed: { opacity: 0, height: 0, marginTop: 0 },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-2 text-gray-700 text-sm sm:text-base overflow-hidden"
                    >
                      {answer}
                    </_motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <Contact />
    </>
  );
}

export default Home;
