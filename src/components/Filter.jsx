import React, { useState } from "react";
import { motion as _motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

function Filter() {
  const { t } = useTranslation();

  const [activeGenre, setActiveGenre] = useState(t("filter.genre.all"));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(t("filter.sort.latest"));

  const genreOptions = [
    t("filter.genre.all"),
    t("filter.genre.online"),
    t("filter.genre.offline"),
    t("filter.genre.oneOnOne"),
    t("filter.genre.group"),
  ];

  const sortOptions = [t("filter.sort.latest"), t("filter.sort.popular")];

  return (
    <_motion.form
      className="mt-10 mx-auto w-full max-w-screen-xl px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Genre Buttons */}
      <_motion.div
        className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base font-light mx-auto"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        {genreOptions.map((genre) => (
          <_motion.button
            type="button"
            key={genre}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`min-w-[7rem] sm:min-w-[9rem] font-medium px-4 py-2 rounded-xl border border-gray-200 hover:cursor-pointer transition-colors duration-200 ${
              activeGenre === genre
                ? "bg-blue-dark text-white"
                : "bg-gray-50 text-gray-600"
            }`}
            onClick={() => setActiveGenre(genre)}
          >
            {genre}
          </_motion.button>
        ))}
      </_motion.div>

      {/* Search and Sort */}
      <_motion.div
        className="flex flex-col lg:flex-row gap-4 mt-6 justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl w-full lg:max-w-3/5 p-2">
          <input
            type="text"
            className="w-full outline-none ml-2 bg-transparent text-sm sm:text-base"
            placeholder={t("filter.searchPlaceholder")}
          />
          <button
            className="py-2 px-3 bg-yellow-dark text-white rounded-lg"
            type="button"
          >
            <i className="fa-regular fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="relative w-full lg:w-auto">
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="w-full lg:w-60 bg-gray-50 border border-gray-200 h-full py-3 lg:py-2 px-4 flex items-center justify-between rounded-lg hover:cursor-pointer"
          >
            <p className="text-nowrap text-sm sm:text-base">
              <span className="text-gray-500 font-light">
                {t("filter.sortBy")}
              </span>{" "}
              {selectedSort}
            </p>
            <i className="fa-regular fa-angle-down text-blue-dark"></i>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <_motion.ul
                className="absolute top-full right-0 mt-1 bg-white shadow-lg border border-gray-200 rounded-lg w-full lg:w-60 z-10"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {sortOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => {
                      setSelectedSort(option);
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-3 lg:py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {option}
                  </li>
                ))}
              </_motion.ul>
            )}
          </AnimatePresence>
        </div>
      </_motion.div>
    </_motion.form>
  );
}

export default Filter;
