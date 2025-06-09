import { motion as _motion } from "framer-motion";
import { class1 } from "../assets/images";

function CourseCard() {
  return (
    <_motion.div
      className="bg-gray-50 border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 rounded-xl flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.15 }} // dùng delay cố định
    >
      <img
        src={class1}
        alt=""
        className="rounded-lg h-full w-32 object-cover"
      />
      <div>
        <p className="font-medium text-base">English for CEOs, Manager</p>
        <p className="mt-1 text-gray-800 font-light">
          Product Management Masterclass, you will learn with Sarah Johnson -
          Head of Product Customer Platform Gojek Indonesia.
        </p>
      </div>
    </_motion.div>
  );
}

export default CourseCard;
