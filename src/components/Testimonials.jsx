import {
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
} from "../assets/images";
import TestimonialCard from "./TestimonialCard";
import { useTranslation } from "react-i18next";
import { motion as _motion } from "framer-motion";

const avatarMap = {
  "Nguyễn Văn An": student1,
  "Lê Thị Mai": student2,
  "Trần Quốc Huy": student3,
  "Phạm Thị Ngọc": student4,
  "Vũ Minh Khoa": student5,
  "Đặng Thảo Linh": student6,
};

// Animation variants for the container and cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Testimonials() {
  const { t } = useTranslation();

  const testimonials = t("testimonials.students", { returnObjects: true }).map(
    (item) => ({
      ...item,
      avatar: avatarMap[item.name], // Map the avatar based on the name
    })
  );

  return (
    <div class="mt-24 mb-20 container">
      <div class="">
        <_motion.div
          class="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-medium text-gray-800 leading-snug sm:leading-tight">
            {t("testimonials.title")}
          </h2>
          <p className="mt-2 text-lg sm:text-2xl text-gray-600">
            {t("testimonials.subtitle")}
          </p>
        </_motion.div>

        <_motion.div
          className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {testimonials.map((item, index) => (
            <_motion.div key={index} variants={itemVariants}>
              <TestimonialCard {...item} />
            </_motion.div>
          ))}
        </_motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
