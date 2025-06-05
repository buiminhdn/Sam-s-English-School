import { useState } from "react";
import { class1, teacherone, teacherthree } from "../assets/images";
import { motion as _motion, AnimatePresence } from "framer-motion";

const images = [class1, teacherone, teacherthree];

function Login() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left side (form) */}
      <_motion.div
        className="flex flex-col mx-auto justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-3xl font-semibold">Welcome Back 👋</p>
        <p className="mt-3 text-gray-600">
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>

        <p className="text-base mt-4 font-medium">Email</p>
        <input
          type="text"
          placeholder="Enter your email"
          className="border border-blue-100 bg-blue-50 p-3 mt-2 rounded-lg outline-blue-dark "
        />

        <p className="text-base mt-5 font-medium">Mật khẩu</p>
        <input
          type="text"
          placeholder="Enter your email"
          className="border border-blue-100 bg-blue-50 p-3 mt-2 rounded-lg outline-blue-dark "
        />

        <button className="mt-7 p-3 bg-blue-dark rounded-lg border-2 border-blue-dark hover:bg-blue-light hover:text-blue-dark transition-colors duration-300 text-white font-medium text-base">
          Sign in
        </button>
      </_motion.div>

      {/* Right side (carousel) */}
      <div className="relative overflow-hidden p-5">
        <div className="relative w-full h-full rounded-xl">
          <AnimatePresence mode="wait" initial={false}>
            <_motion.img
              key={current}
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              initial={{
                opacity: 0,
                x: direction > 0 ? 100 : -100,
                scale: 0.98,
              }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.98 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
            />
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-10 top-1/2 -translate-y-1/2 bg-white/60 py-2 px-3 hover:cursor-pointer hover:bg-white transition-colors duration-300 rounded-full text-black z-10"
          aria-label="Previous"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-10 top-1/2 -translate-y-1/2 bg-white/60 py-2 px-3 hover:cursor-pointer hover:bg-white transition-colors duration-300 rounded-full text-black z-10"
          aria-label="Next"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index ? "w-10 bg-white" : "w-3 bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
