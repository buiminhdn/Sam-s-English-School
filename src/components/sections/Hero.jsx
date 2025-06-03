import { motion as _motion } from "framer-motion";
import { BoyHoldCamera, BoyThumbUp } from "../../assets/images";

function Hero() {
  return (
    <div className="container relative mt-20 pb-20 overflow-hidden">
      {/* Boy Holding Camera - Slide in from left */}
      <_motion.img
        src={BoyHoldCamera}
        alt="Boy Holding Camera"
        className="absolute w-44 left-50"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      />

      {/* Boy Thumbs Up - Slide in from right */}
      <_motion.img
        src={BoyThumbUp}
        alt="Boy Thumb Up"
        className="absolute w-64 right-40 top-20"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
      />

      {/* Main Title */}
      <_motion.p
        className="text-8xl text-center font-medium text-gray-800"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Nơi tốt nhất để
        <br />
        <span className="text-purple-dark">học</span> và{" "}
        <span className="text-yellow-darker">chơi</span>
        <br />
        cho mọi lứa tuổi
      </_motion.p>

      {/* Subtext */}
      <_motion.p
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        Khám phá hàng ngàn hoạt động học tập tương tác và thú vị
        <br />
        để hỗ trợ quá trình phát triển và học tập của con bạn.
      </_motion.p>

      {/* CTA Button */}
      <_motion.button
        className="mx-auto mt-12 bg-blue-dark p-3 flex items-center gap-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <p className="text-white ml-1.5">ĐĂNG KÝ NGAY</p>
        <div className="bg-white px-2.5 py-1 rounded-full">
          <i className="fa-regular fa-arrow-up-right fa-beat"></i>
        </div>
      </_motion.button>
    </div>
  );
}

export default Hero;
