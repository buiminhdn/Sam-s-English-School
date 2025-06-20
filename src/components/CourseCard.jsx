import { motion as _motion } from "framer-motion";
import { class1 } from "../assets/images";

function CourseCard() {
  return (
    <_motion.div
      className="bg-gray-50 border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 rounded-xl flex flex-col sm:flex-row gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.15 }}
    >
      <img
        src={class1}
        alt=""
        className="rounded-lg w-full h-32 object-cover sm:w-32 sm:h-full"
      />
      <div>
        <p className="font-medium text-base sm:text-base text-sm">
          English for CEOs, Manager
        </p>
        <p className="mt-1 text-gray-800 font-light text-sm sm:text-base">
          Product Management Masterclass, you will learn with Sarah Johnson –
          Head of Product Customer Platform Gojek Indonesia.
        </p>
      </div>
    </_motion.div>
  );
}

export default CourseCard;
