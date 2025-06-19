import React, { useState } from "react";
import { motion as _motion, AnimatePresence } from "framer-motion";

const genreOptions = ["All Programs", "Online", "Offline", "1 kèm 1", "Nhóm"];
const sortOptions = ["Latest", "Price", "Popularity"];

function Filter() {
  const [activeGenre, setActiveGenre] = useState("All Programs");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Latest");

  return (
    <_motion.form
      className="mt-10 mx-auto w-fit"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Genre Buttons */}
      <_motion.div
        className="flex gap-4 text-base font-light"
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
            className={`w-36 p-2 rounded-xl border border-gray-200 hover:cursor-pointer ${
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
        className="flex gap-3 mt-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Search Bar */}
        <div className="flex gap-2 bg-gray-50 border border-gray-200 rounded-xl w-full p-2">
          <input
            type="text"
            className="w-full outline-none ml-2"
            placeholder="Tìm kiếm Khóa học, Tên giáo viên"
          />
          <button
            className="py-2 px-3 bg-yellow-dark text-white rounded-lg"
            type="button"
          >
            <i className="fa-regular fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="bg-gray-50 border border-gray-200 h-full py-2 px-4 flex items-center justify-between rounded-lg w-48 hover:cursor-pointer"
          >
            <p className="text-nowrap">
              <span className="text-gray-500 font-light">Sort by:</span>{" "}
              {selectedSort}
            </p>
            <i className="fa-regular fa-angle-down text-blue-dark"></i>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <_motion.ul
                className="absolute top-full right-0 mt-1 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-10"
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
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
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
