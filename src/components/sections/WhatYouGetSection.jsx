import { motion as _motion } from "framer-motion";
import { programillus } from "../../assets/images";

function WhatYouGetSection() {
  return (
    <_motion.div
      className="container mt-10 grid grid-cols-2 gap-20 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Image with slide in from left */}
      <_motion.img
        src={programillus}
        alt=""
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Text Content with staggered children */}
      <_motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        <_motion.p
          className="font-semibold text-5xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Con bạn sẽ nhận
          <br />
          được gì sau khi học tại
          <br />
          Trường Anh ngữ Sam?
        </_motion.p>

        {/* Checklist Items */}
        {Array(3)
          .fill("Master program knowledge at school")
          .map((text, i) => (
            <_motion.div
              key={i}
              className={`flex items-center gap-5 ${i === 0 ? "mt-7" : "mt-4"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.2 }}
              viewport={{ once: true }}
            >
              <i className="fa-solid fa-circle-check text-yellow-dark fa-xl"></i>
              <p className="text-xl font-light">{text}</p>
            </_motion.div>
          ))}
      </_motion.div>
    </_motion.div>
  );
}

export default WhatYouGetSection;
