import { Link } from "react-router-dom";
import { motion as _motion } from "framer-motion";

function Navbar() {
  return (
    <_motion.div
      className="border-b border-gray-300"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container py-6 flex justify-between items-center">
        <_motion.div
          className="font-medium flex gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {[
            { to: "/", label: "Trang chủ" },
            { to: "/courses", label: "Khóa học", hasDropdown: true },
            { to: "/courses", label: "Giáo viên" },
            { to: "/about", label: "Về chúng tôi", hasDropdown: true },
          ].map(({ to, label, hasDropdown }, i) => (
            <_motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <Link to={to} className="flex items-center gap-2">
                <p>{label}</p>
                {hasDropdown && (
                  <i className="fa-regular fa-angle-down mt-1"></i>
                )}
              </Link>
            </_motion.div>
          ))}
        </_motion.div>

        <_motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            to="/hello"
            className="bg-yellow-dark font-medium text-black py-3 px-5 rounded-sm hover:shadow-xl transition-shadow duration-300"
          >
            Đăng ký học thử!
          </Link>
        </_motion.div>
      </div>
    </_motion.div>
  );
}

export default Navbar;
