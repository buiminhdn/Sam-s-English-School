import {
  class1,
  course2,
  course3,
  course4,
  course6,
  founder,
  whychoose1,
  whychoose2,
  whychoose3,
} from "../assets/images";
import FreeConsultation from "../components/FreeConsultation";
import { motion as _motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const courseImages = [course6, course2, course3, course4];

function Introduction() {
  const { t } = useTranslation();

  const whychooseImages = [whychoose1, whychoose2, whychoose3];

  return (
    <>
      <div className="container mt-14">
        {/* Heading */}
        <div className="text-center flex flex-col gap-3">
          <_motion.p
            className="text-2xl sm:text-3xl font-semibold mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("intro.heading1")}
            <br className="hidden sm:inline" />
            {t("intro.heading2")}
          </_motion.p>

          <_motion.p
            className="text-base mt-2 text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("intro.subheading")}
          </_motion.p>
        </div>

        {/* Founder Section */}
        <div className="mt-10 w-full max-w-7xl mx-auto flex flex-col-reverse sm:flex-row gap-10 sm:gap-16">
          {/* Left: Content */}
          <_motion.div
            className="text-base sm:w-3/5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold text-lg sm:text-xl mb-3">
              {t("intro.founderTitle")}
            </p>
            <p className="text-sm sm:text-base text-justify leading-relaxed text-gray-700">
              {t("intro.founderBio1")}
              <br />
              <br />
              {t("intro.founderBio2")}
              <br />
              <br />
              {t("intro.founderBio3")}
              <br />
              <br />
              {t("intro.founderBio4")}
            </p>
          </_motion.div>

          {/* Right: Image + Info */}
          <_motion.div
            className="w-full sm:w-2/5 flex flex-col items-center sm:items-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-60 sm:w-72">
              <img
                src={founder}
                alt="Sam Mittal"
                className="h-80 sm:h-96 w-full object-cover"
              />
            </div>
            <p className="text-center sm:text-left text-lg font-medium mt-3">
              Sam Mittal
            </p>
            <p className="text-center sm:text-left text-sm sm:text-base text-gray-600">
              {t("intro.founderRole")}
            </p>
          </_motion.div>
        </div>
      </div>

      <div className="container mt-20">
        {/* Header & Description */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-32">
          <_motion.p
            className="text-3xl sm:text-4xl font-semibold leading-tight lg:text-nowrap"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("intro.missionTitle1")}
            {""}
            <br className="hidden lg:block" /> {t("intro.missionTitle2")}
          </_motion.p>

          <_motion.p
            className="text-base text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("intro.missionDescription")}
          </_motion.p>
        </div>

        {/* Image Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {courseImages.map((src, index) => (
            <_motion.img
              key={index}
              src={src}
              className="h-72 sm:h-80 lg:h-96 w-full object-cover rounded-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>

      <div className="container mt-30 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <_motion.p
            className="text-4xl font-semibold leading-tight"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("intro.visionTitle")}
          </_motion.p>

          <_motion.p
            className="text-base text-gray-600 mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("intro.visionDescription1")}
            <br />
            <br />
            {t("intro.visionDescription2")}
            <br />
            <br />
            {t("intro.visionDescription3")}
          </_motion.p>
        </div>

        {/* Image Section */}
        <_motion.img
          src={class1}
          alt=""
          className="w-full pl-0 lg:pl-20"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="mt-20 relative mb-32">
        {/* Purple background strip */}
        <div className="bg-purple-light h-60 w-full absolute -bottom-14 -z-10"></div>

        {/* Heading */}
        <_motion.p
          className="text-3xl sm:text-4xl font-semibold leading-tight text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("intro.whyTitle")}
        </_motion.p>

        {/* Responsive Grid Cards */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 mt-12">
          {[0, 1, 2].map((i) => (
            <_motion.div
              key={i}
              className="rounded-2xl shadow-xl flex flex-col bg-white overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={whychooseImages[i]}
                alt=""
                className="w-full h-60 object-cover"
              />
              <div className="p-6 sm:p-5 md:p-10 flex flex-col gap-4 text-center">
                <p className="text-xl sm:text-2xl font-semibold">
                  {t(`intro.why.${i}.title`)}
                </p>
                <p className="text-gray-500 text-sm sm:text-base">
                  {t(`intro.why.${i}.desc`)}
                </p>
              </div>
            </_motion.div>
          ))}
        </div>
      </div>

      <FreeConsultation theme="purple" />
    </>
  );
}

export default Introduction;
