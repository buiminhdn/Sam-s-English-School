import { useState, useRef } from "react";
import {
  class1,
  class2,
  class3,
  class4,
  class5,
  class6,
  class7,
  class8,
  class9,
  class10,
  class11,
  class12,
  class13,
  class14,
  class15,
  class16,
  class17,
  class18,
  class19,
  class20,
  class21,
  class22,
  class23,
  mem1,
  mem2,
  mem3,
  mem4,
} from "../assets/images";
import { motion as _motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const imageSets = [
  [class1, class2, class3, class4, class5, class6],
  [class11, class7, class8, class9, class10, class20],
  [class19, class13, class14, class15, class16, class17, class18, class22],
  [class21, class12, class23, mem1, mem2, mem3, mem4],
];

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

const buttonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

function ImageGrid() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const titleRef = useRef(null);

  const handleChangeSet = () => {
    setCurrentIndex((prev) => (prev + 1) % imageSets.length);
    setAnimationKey((prev) => prev + 1);
    setTimeout(() => {
      titleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const images = imageSets[currentIndex];

  return (
    <div className="container mt-24">
      <_motion.p
        ref={titleRef}
        className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-800 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        {t("classImage.heading")}
      </_motion.p>

      <div className="mt-10 sm:mt-14">
        <AnimatePresence mode="wait">
          <_motion.div
            key={animationKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4"
          >
            {images.map((src, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                <img
                  src={src}
                  className="w-full object-cover rounded-lg"
                  alt={`Image ${index}`}
                />
              </div>
            ))}
          </_motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-10">
        <_motion.button
          onClick={handleChangeSet}
          className="px-6 py-2.5 w-fit text-lg border-2 font-medium hover:cursor-pointer transition-colors duration-300 border-blue-dark text-blue-dark hover:text-white hover:bg-blue-dark rounded-full mx-auto"
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
        >
          {t("seeMore")}
        </_motion.button>
      </div>
    </div>
  );
}

export default ImageGrid;
