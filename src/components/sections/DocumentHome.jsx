import { motion as _motion } from "framer-motion";
import { DocumentHomeIllustration, TextCircle } from "../../assets/images";

function DocumentHome() {
  return (
    <div className="container mt-20 flex flex-col lg:flex-row items-center gap-20">
      {/* Left Side Content */}
      <_motion.div
        className="flex-1"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <p className="text-7xl font-medium text-gray-800 leading-[5.5rem] relative">
          Các tài liệu học tập được cung cấp rất thú vị đối với{" "}
          <span className="relative inline-block text-purple-dark">
            trẻ em
            {/* Animated Circle */}
            <img
              src={TextCircle}
              alt=""
              className="h-24 absolute right-0 top-0 -z-10"
            />
          </span>
        </p>

        {/* Subtext */}
        <_motion.p
          className="text-lg font-light mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Đừng lo lắng! Con bạn sẽ có thời gian vui vẻ khi học với các tài liệu
          dễ hiểu của chúng tôi.
        </_motion.p>

        {/* CTA Button */}
        <_motion.button
          className="mt-10 bg-white border-2 border-blue-dark p-2 flex items-center gap-3 rounded-full hover:bg-blue-dark hover:text-white group transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="ml-1.5 font-medium">ĐĂNG KÝ NGAY</p>
          <div className="bg-blue-dark text-white px-2.5 py-1 rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
            <i className="fa-regular fa-arrow-up-right"></i>
          </div>
        </_motion.button>
      </_motion.div>

      {/* Right Side Image */}
      <_motion.img
        src={DocumentHomeIllustration}
        alt=""
        className="w-2/5"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
    </div>
  );
}

export default DocumentHome;
