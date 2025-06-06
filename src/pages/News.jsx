import { class1 } from "../assets/images";
import FreeConsultation from "../components/FreeConsultation";
import { motion as _motion } from "framer-motion";

function News() {
  return (
    <>
      <_motion.p
        className="mt-10 text-5xl font-semibold text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Tin Tức
      </_motion.p>

      <_motion.div
        className="container mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        {/* Header Row */}
        <_motion.div
          className="flex justify-between items-end mb-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-3xl font-medium">Lastest Articles</p>
          <div className="flex gap-2 items-center text-gray-800 hover:underline">
            <p>Xem tất cả</p>
            <i className="fa-regular fa-angle-right"></i>
          </div>
        </_motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((_, i) => (
            <_motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <img src={class1} alt="" className="h-96 w-full object-cover" />
              <p className="mt-5 text-xl font-medium line-clamp-2">
                Rocket Lab Aims to Return to Flight This Year After September
                launch failure
              </p>
              <p className="mt-3 text-base line-clamp-2 text-gray-600">
                Rocket Lab aims to return to flight this year after September
                launch failure. The company is still investigating the Sept.
              </p>
              <p className="mt-3 text-gray-500">
                Space and Universe - 3 mins ago
              </p>
            </_motion.div>
          ))}
        </div>
      </_motion.div>

      <div className="container mt-20">
        {/* Section Header */}
        <_motion.div
          className="flex justify-between items-end mb-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-3xl font-medium">Trending News</p>
          <div className="flex gap-2 items-center text-gray-800 hover:underline">
            <p>Xem tất cả</p>
            <i className="fa-regular fa-angle-right"></i>
          </div>
        </_motion.div>

        {/* Image + Content Row */}
        <_motion.div
          className="flex gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          {/* Left image */}
          <_motion.img
            src={class1}
            alt=""
            className="h-auto object-cover w-3/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          {/* Right text block */}
          <_motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-5xl leading-tight font-medium">
              Axiom Space Refines Training for Next Astronauts Mission
            </p>
            <div className="grid grid-cols-2 gap-4 mt-5 text-gray-600">
              <p>
                The last UK individual to go into orbit was Tim Peake, who flew
                to the ISS as a European Space Agency (Esa) astronaut in 2015.
                <br />
                <br />
                "This is an exciting opportunity and actually unique," he
                commented. "No-one has done a 'national mission', commercially,
                like this before. It's a new model and would be paving the way
                for how we do space in the future."
                <br />
                <br />
                Details are sparse at the moment. No crew has been chosen, nor
                is there a concept yet for how it would be selected.
              </p>
              <p>
                The last UK individual to go into orbit was Tim Peake, who flew
                to the ISS as a European Space Agency (Esa) astronaut in 2015.
                <br />
                <br />
                "This is an exciting opportunity and actually unique," he
                commented. "No-one has done a 'national mission', commercially,
                like this before. It's a new model and would be paving the way
                for how we do space in the future."
                <br />
                <br />
                Details are sparse at the moment. No crew has been chosen, nor
                is there a concept yet for how it would be selected.
              </p>
            </div>
            <p className="mt-5 text-gray-500">
              Space and Universe - 3 mins ago
            </p>
          </_motion.div>
        </_motion.div>
      </div>

      <div className="bg-yellow-dark mt-20 mb-30">
        <div className="container py-16">
          {/* Header */}
          <_motion.div
            className="flex justify-between items-end mb-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-3xl font-medium">Viral Videos</p>
            <div className="flex gap-2 items-center text-gray-800 hover:underline">
              <p>Xem tất cả</p>
              <i className="fa-regular fa-angle-right"></i>
            </div>
          </_motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-7">
            {/* Left big video */}
            <_motion.div
              className="flex flex-col justify-between"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={class1} alt="" className="w-full object-cover" />
              <div className="flex justify-between gap-32 mt-5 relative">
                <p className="text-xl font-medium text-nowrap">
                  SpaceX Fuels Up
                  <br />
                  Starship in Key Test
                  <br />
                  Ahead of 2nd-Ever
                </p>
                <p className="text-ellipsis line-clamp-4 text-gray-700 overflow-hidden h-fit">
                  SpaceX's latest Starship prototype just passed another big
                  preflight test. The company conducted aSpaceX's latest
                  Starship prototype just passed...
                </p>
              </div>
            </_motion.div>

            {/* Right small cards */}
            <div className="grid grid-rows-3 gap-7">
              {[1, 2, 3].map((_, i) => (
                <_motion.div
                  key={i}
                  className="grid grid-cols-3 gap-5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <img
                    src={class1}
                    alt=""
                    className="col-span-2 h-40 w-full object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="font-medium text-base line-clamp-2">
                      Meta Quest's Best VR Travel Experience Gets New Locations
                      & AI Assistant
                    </p>
                    <p className="text-gray-700 mt-2 line-clamp-4">
                      The app, available for Meta Quest and PC VR-compatible
                      headsets, features some of the highest quality features
                      some of the highest quality
                    </p>
                  </div>
                </_motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FreeConsultation />
    </>
  );
}

export default News;
