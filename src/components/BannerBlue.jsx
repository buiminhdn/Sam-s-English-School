import { motion as _motion } from "framer-motion";
import { bgProgramBlue } from "../assets/images";

function BannerBlue() {
  return (
    <div className="container">
      <_motion.div
        style={{
          backgroundImage: `url(${bgProgramBlue})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="mt-10 h-90 rounded-4xl flex flex-col justify-center items-start pl-80"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <_motion.p
          className="font-semibold text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Sam cung cấp cho bạn mức
          <br />
          giảm giá 30% trong mùa này
        </_motion.p>

        <_motion.p
          className="text-xl font-light mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Khuyến mãi có hiệu lực từ 1/5/2025 - 30/6/2025
        </_motion.p>

        <_motion.button
          className="mt-7 text-base bg-blue-dark text-white py-3.5 px-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Khám phá ngay
        </_motion.button>
      </_motion.div>
    </div>
  );
}

export default BannerBlue;
