import React from "react";
import { motion as _motion } from "framer-motion";
import { bgProgram } from "../assets/images";
import { SOCIAL_LINKS } from "../routes/routePath";
import { getCurrentMonthRange } from "../utils/dateUtils";

function Banner({ backgroundImage = bgProgram, buttonClass = "" }) {
  const { startDate, endDate } = getCurrentMonthRange();
  return (
    <div className="container">
      <_motion.div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="mt-10 rounded-4xl flex flex-col justify-center px-6 py-16 sm:px-10 lg:py-24 lg:px-32 xl:px-80"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title */}
        <_motion.p
          className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sam cung cấp cho bạn mức
          <br className="hidden sm:block" />
          giảm giá 30% trong mùa này
        </_motion.p>

        {/* Subtitle */}
        <_motion.p
          className="text-base sm:text-lg font-light mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Khuyến mãi có hiệu lực từ {startDate} - {endDate}
        </_motion.p>

        {/* CTA Button */}
        <_motion.a
          href={SOCIAL_LINKS.ZALO}
          target="_blank"
          className={`block mt-7 w-fit text-sm sm:text-base py-3.5 px-6 font-medium rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out ${buttonClass}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Khám phá ngay
        </_motion.a>
      </_motion.div>
    </div>
  );
}

export default Banner;
