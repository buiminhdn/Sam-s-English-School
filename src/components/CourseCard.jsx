import { motion as _motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function CourseCard({ data }) {
  const { i18n } = useTranslation();
  const lang = i18n.language || "vi";
  if (!data) return null;

  return (
    <_motion.div
      className="bg-gray-50 border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 rounded-xl flex flex-col sm:flex-row gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.15 }}
    >
      <img
        src={data.image}
        alt={data.title}
        className="rounded-lg w-full h-32 object-cover sm:w-32 sm:h-20"
      />
      <div>
        <p className="font-medium text-base sm:text-base">{data.title[lang]}</p>
        <p className="mt-1 text-gray-800 font-light text-sm sm:text-base line-clamp-4">
          {data.description[lang]}
        </p>
      </div>
    </_motion.div>
  );
}

export default CourseCard;
