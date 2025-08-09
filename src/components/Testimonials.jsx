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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

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
          class="text-center"
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
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="px-8"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </_motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
