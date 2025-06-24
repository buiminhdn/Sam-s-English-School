import {
  course1,
  course2,
  course3,
  course4,
  course5,
  course6,
  course7,
  course8,
} from "../assets/images";
import { motion as _motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ClassImage() {
  const { t } = useTranslation();
  const imageSources = [
    course1,
    course2,
    course3,
    course4,
    course5,
    course6,
    course7,
    course8,
  ];

  return (
    <_motion.div
      className="container mt-20 mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-semibold text-2xl text-center">
        {t("classImage.heading")}
      </p>
      <p className="w-full sm:w-2/3 lg:w-1/2 mx-auto mt-2 text-center text-gray-600 text-sm sm:text-base">
        {t("classImage.description")}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-4 p-4 mt-5">
        {[
          { col: "lg:col-span-2", row: "lg:row-span-1" },
          { col: "lg:col-span-1", row: "lg:row-span-1" },
          { col: "lg:col-span-1", row: "lg:row-span-1" },
          { isGrid: true },
          { col: "lg:col-span-3", row: "lg:row-span-2" },
        ].map((layout, index) => {
          // Xử lý đặc biệt cho ô lưới con 2 ảnh (index = 3)
          if (layout.isGrid) {
            return (
              <div
                key={index}
                className="lg:row-span-2 lg:col-span-1 grid grid-rows-2 gap-4"
              >
                {[0, 1].map((i) => (
                  <_motion.img
                    key={i}
                    src={imageSources[3 + i]} // ảnh số 4 và 5
                    alt={`Hình ${3 + i + 1}`}
                    className="object-cover w-full h-48 sm:h-60 lg:h-full rounded-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + i * 0.1,
                    }}
                  />
                ))}
              </div>
            );
          }

          const imgIndex = index < 3 ? index : 5 + (index - 4); // 0–2: ảnh 0–2 | index=4 → ảnh 6

          return (
            <_motion.img
              key={index}
              src={imageSources[imgIndex]}
              alt={`Hình ${imgIndex + 1}`}
              className={`${layout.col ?? ""} ${
                layout.row ?? ""
              } object-cover w-full h-48 sm:h-60 lg:h-full rounded-xl`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            />
          );
        })}
      </div>
    </_motion.div>
  );
}

export default ClassImage;
