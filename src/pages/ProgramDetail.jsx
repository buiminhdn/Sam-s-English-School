import { class1 } from "../assets/images";
import FreeConsultation from "../components/FreeConsultation";
import { motion as _motion } from "framer-motion";

function ProgramDetail() {
  return (
    <div className=" mt-10">
      <_motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gray-100 p-10 rounded-xl flex gap-8">
          <_motion.img
            src={class1}
            alt=""
            className="h-96 w-auto object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          <_motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-4xl font-semibold">English For CEOs, Manager</p>
            <p className="text-base">
              <span className="text-gray-700">Number of lessons: </span>
              <span className="font-medium"> 49 Lesson</span>
            </p>
            <p className="text-base">
              <span className="text-gray-700">Completion time: </span>
              <span className="font-medium"> 1 Month</span>
            </p>
            <p className="text-base">
              <span className="text-gray-700">Students have learned: </span>
              <span className="font-medium"> 12,000+</span>
            </p>

            <div className="flex items-center gap-2 text-base">
              <p className="text-gray-700">Review: </p>
              <div className="flex text-yellow-dark gap-0.5">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>

            <div className="mt-7 flex gap-4">
              <button className="bg-blue-dark py-2.5 px-7 rounded-lg text-white">
                Đăng ký học
              </button>
              <button className="bg-blue-light py-2.5 px-5 rounded-lg text-blue-dark font-medium">
                Học thử miễn phí
              </button>
            </div>
          </_motion.div>
        </div>
      </_motion.div>
      <_motion.div
        className="container mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-semibold text-lg mb-2">Course Details</p>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan.
        </p>

        <p className="font-semibold text-lg mb-2 mt-5">Certification</p>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis consectetur adipiscing elit.
        </p>

        <p className="font-semibold text-lg mb-2 mt-5">
          Who this course is for
        </p>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis consectetur adipiscing elit.
        </p>

        <p className="font-semibold text-lg mb-2 mt-5">
          What you'll learn in this course:
        </p>
        <ul className="list-disc pl-5 leading-relaxed">
          <li>Understand the basics of English for business communication</li>
          <li>Develop skills for effective meetings and presentations</li>
          <li>Enhance vocabulary related to management and leadership</li>
          <li>Practice writing professional emails and reports</li>
          <li>
            Improve listening skills through real-world business scenarios
          </li>
          <li>Engage in role-plays to simulate business interactions</li>
        </ul>
      </_motion.div>
      <_motion.div
        className="container mt-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-2xl">Similar Courses</p>
          <div className="flex gap-2 items-center text-gray-800 hover:underline">
            <p>Xem tất cả</p>
            <i className="fa-regular fa-angle-right"></i>
          </div>
        </div>

        {/* Grid of Courses */}
        <div className="grid grid-cols-3 gap-6 mt-5">
          {[1, 2, 3].map((item, index) => (
            <_motion.div
              key={index}
              className="bg-gray-100 hover:shadow-xl transition-shadow duration-300 p-5 rounded-xl flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <img
                src={class1}
                alt=""
                className="rounded-lg h-full w-32 object-cover"
              />
              <div>
                <p className="font-medium text-base">
                  English for CEOs, Manager
                </p>
                <p className="mt-1 text-gray-800 font-light">
                  Product Management Masterclass, you will learn with Sarah
                  Johnson - Head of Product Customer Platform Gojek Indonesia.
                </p>
              </div>
            </_motion.div>
          ))}
        </div>
      </_motion.div>
      <_motion.div
        className="container mt-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-semibold text-2xl text-center">What student's say</p>
        <p className="w-1/2 mx-auto mt-2 text-center text-gray-600">
          Đội ngũ giáo viên bản ngữ Quốc tịch: Anh, Mỹ, Úc, Canada, New Zealand,
          South Africa, … Giáo viên dày dạn kinh nghiệm giảng dạy tiếng Anh, có
          khả năng dạy nhiều độ tuổi và sáng tạo trong cách truyền đạt.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((_, index) => (
            <_motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-gray-700 mb-2">
                “Teachings of the great explore of truth, the master-builder of
                human happiness. no one rejects, dislikes, or avoids pleasure
                itself, pleasure itself”
              </p>
              <div className="flex gap-2">
                <img
                  src={class1}
                  alt=""
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-base">Finlay Kirk</p>
                  <p className="text-gray-500">Student</p>
                </div>
              </div>
            </_motion.div>
          ))}
        </div>
      </_motion.div>
      <_motion.div
        className="container mt-14 mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-semibold text-2xl text-center">
          Lớp Học English for CEOs, Managers
        </p>
        <p className="w-1/2 mx-auto mt-2 text-center text-gray-600">
          Đội ngũ giáo viên bản ngữ Quốc tịch: Anh, Mỹ, Úc, Canada, New Zealand,
          South Africa, … Giáo viên dày dạn kinh nghiệm giảng dạy tiếng Anh, có
          khả năng dạy nhiều độ tuổi và sáng tạo trong cách truyền đạt.
        </p>

        <div className="grid grid-cols-4 grid-rows-3 gap-4 p-4 mt-5">
          {[
            { col: "col-span-2", row: "row-span-1" },
            { col: "col-span-1", row: "row-span-1" },
            { col: "col-span-1", row: "row-span-1" },
            { isGrid: true }, // Placeholder for 2 stacked images
            { col: "col-span-3", row: "row-span-2" },
          ].map((layout, index) => {
            if (layout.isGrid) {
              return (
                <div
                  key={index}
                  className="row-span-2 col-span-1 grid grid-rows-2 gap-6"
                >
                  {[0, 1].map((i) => (
                    <_motion.img
                      key={i}
                      src={class1}
                      alt=""
                      className="object-cover h-full rounded-xl"
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

            return (
              <_motion.img
                key={index}
                src={class1}
                alt=""
                className={`${layout.col} ${layout.row} object-cover h-full rounded-xl`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              />
            );
          })}
        </div>
      </_motion.div>

      <FreeConsultation />
    </div>
  );
}

export default ProgramDetail;
