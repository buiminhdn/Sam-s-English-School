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
  Schools,
  QuestionsIllus,
  hero,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  america,
  australia,
  canada,
  england,
} from "../assets/images";
import CourseItem from "../components/CourseItem";
import { ROUTE_PATH, SOCIAL_LINKS } from "../routes/routePath";
import { useState } from "react";
import { motion as _motion, AnimatePresence } from "framer-motion";
import Contact from "../components/Contact";
import { questionsData } from "../assets/data/questionData";
import { useTranslation } from "react-i18next";
import { courseData } from "../assets/data/courseData";
import Marquee from "react-fast-marquee";

const teacherData = [
  {
    img: teacher1,
    name: "Emma Johnson",
    students: 530,
    flag: america,
    teachingHours: "2050",
  },
  {
    img: teacher2,
    name: "Chloe Anderson",
    students: 470,
    flag: england,
    teachingHours: "1800",
  },
  {
    img: teacher3,
    name: "Michael Thompson",
    students: 612,
    flag: canada,
    teachingHours: "2300",
  },
  {
    img: teacher4,
    name: "Sophia Loren",
    students: 488,
    flag: australia,
    teachingHours: "1900",
  },
];

function Home() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "vi";

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-0">
        <div className="flex-1 text-center lg:text-left">
          <_motion.p
            className="text-3xl sm:text-5xl lg:text-[70px] leading-22 font-semibold text-gray-800"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t("home.Headline1")}
            <span className="hidden sm:inline">
              <br />
            </span>
            <span className="text-purple-dark">{t("home.Headline2")}</span>{" "}
            {t("home.Headline3")}{" "}
            <span className="text-yellow-darker">{t("home.Headline4")}</span>
            <span className="hidden sm:inline">
              <br />
            </span>
            {t("home.Headline5")}
          </_motion.p>

          <_motion.p
            className="text-gray-500 text-base sm:text-lg lg:text-xl mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {t("home.Subtext1")}
            <span className="hidden sm:inline">
              <br />
            </span>
            {t("home.Subtext2")}
          </_motion.p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-12 mt-10">
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-circle-check text-blue-600 fa-xl sm:fa-2xl"></i>
              <p className="text-sm sm:text-lg font-normal">Flexible</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-circle-check text-blue-600 fa-xl sm:fa-2xl"></i>
              <p className="text-sm sm:text-lg font-normal text-black">
                Learning path
              </p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-circle-check text-blue-600 fa-xl sm:fa-2xl"></i>
              <p className="text-sm sm:text-lg font-normal text-black">
                Community
              </p>
            </div>
          </div>

          <_motion.a
            href={SOCIAL_LINKS.ZALO}
            target="_blank"
            className="mt-10 mx-auto lg:mx-0 w-fit bg-blue-dark px-3 py-3 flex items-center gap-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <p className="text-white ml-1.5">{t("registerNow")}</p>
            <div className="bg-white px-2.5 py-1 rounded-full">
              <i className="fa-regular fa-arrow-up-right fa-beat"></i>
            </div>
          </_motion.a>
        </div>

        <_motion.img
          src={hero}
          alt="Hero image"
          className=""
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>

      <div className="mt-30 mb-20">
        <Marquee pauseOnHover gradient={false} speed={50}>
          <img src={logo1} alt="Logo 1" className="mx-10 h-20" />
          <img src={logo2} alt="Logo 1" className="mx-10 h-20" />
          <img src={logo3} alt="Logo 1" className="mx-10 h-20" />
          <img src={logo4} alt="Logo 1" className="mx-10 h-20" />
          <img src={logo5} alt="Logo 1" className="mx-10 h-20" />
          <img src={logo6} alt="Logo 1" className="mx-10 h-20" />
          <img src={logo7} alt="Logo 1" className="mx-10 h-20" />
          <img src={logo8} alt="Logo 1" className="mx-10 h-20" />
          <img src={logo9} alt="Logo 1" className="mx-10 h-20" />
          {/* Add more logos as needed */}
        </Marquee>
      </div>
      <div className="container">
        {/* Header Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-end gap-6 pt-10">
          {/* Heading */}
          <_motion.p
            className="text-4xl sm:text-5xl lg:text-7xl font-medium text-gray-800 text-center lg:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t("home.whyChoose1")}
            <span className="hidden sm:inline">
              <br />
            </span>
            {t("home.whyChoose2")}
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
              title: t("home.choose.teacher"),
              desc: t("home.choose.teacher.desc"),
              bgImage: CirclePurple,
              bgPos: "top -20px right -100px",
              bgSize: "250px",
              textColor: "text-black",
            },
            {
              bg: "bg-blue-dark",
              image: WhyChooseProgram,
              title: t("home.choose.program"),
              desc: t("home.choose.program.desc"),
              bgImage: Wave,
              bgPos: "top -50px right -60px",
              bgSize: "230px",
              textColor: "text-white",
            },
            {
              bg: "bg-yellow-dark",
              image: WhyChooseGame,
              title: t("home.choose.method"),
              desc: t("home.choose.method.desc"),
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
            {t("home.document.title1")}{" "}
            <span className="relative inline-block text-purple-dark">
              {t("home.document.title2")}
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
            {t("home.document.subtext")}
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
            <p className="ml-1.5 font-medium">{t("registerNow")}</p>
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
          {t("home.vision1")}{" "}
          <span className="text-yellow-dark">{t("home.vision2")}</span>{" "}
          {t("home.vision3")}
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
          {teacherData.map(
            ({ img, name, students, flag, teachingHours }, index) => (
              <_motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={img}
                  alt={`Teacher ${index + 1}`}
                  className="w-full"
                />
                <div className="flex items-center gap-3 justify-center mt-5">
                  <p className="text-white text-xl sm:text-2xl font-medium text-center">
                    {name}
                  </p>
                  <img
                    src={flag}
                    alt="flag"
                    className="size-5 object-cover rounded-full"
                  />
                </div>
                <p className="text-gray-300 text-sm sm:text-base mt-2 text-center">
                  {teachingHours} {t("teachingHours")}
                </p>
                <p className="text-gray-300 text-sm sm:text-base mt-1 text-center">
                  {students} {t("students")}
                </p>
              </_motion.div>
            )
          )}
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
          <p className="ml-3 mr-1 font-medium">{t("seeMore")}</p>
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
            <span className="text-purple-dark">{t("home.ourCourses1")}</span>{" "}
            {t("home.ourCourses2")}
          </p>
          <a
            href={ROUTE_PATH.PROGRAMS}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <p className="font-semibold text-purple-dark group-hover:underline">
              {t("viewAll")}
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
          {[...courseData].slice(0, 4).map((course) => (
            <_motion.div
              key={course.id}
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
          <span className="text-purple-dark">{t("home.ourClients1")}</span>{" "}
          {t("home.ourClients2")}
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
            {t("home.faq.title1")}{" "}
            <span className="text-purple-dark">{t("home.faq.title2")} </span>
            <br className="hidden sm:block" />
            {t("home.faq.title3")}
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
                  <p className="ml-2 text-base sm:text-lg">{question[lang]}</p>
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
                      {answer[lang]}
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
