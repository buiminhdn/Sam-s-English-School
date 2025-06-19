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
        }}
        className="mt-10 h-90 rounded-4xl flex flex-col justify-center items-start pl-80"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <_motion.p
          className="font-semibold text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sam cung cấp cho bạn mức
          <br />
          giảm giá 30% trong mùa này
        </_motion.p>

        <_motion.p
          className="text-xl font-light mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Khuyến mãi có hiệu lực từ {startDate} - {endDate}
        </_motion.p>

        <_motion.a
          href={SOCIAL_LINKS.ZALO}
          target="_blank"
          className={`block mt-7 text-base py-3.5 px-5 font-medium rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out ${buttonClass}`}
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
