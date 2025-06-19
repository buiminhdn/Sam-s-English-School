import { Link } from "react-router-dom";
import { motion as _motion } from "framer-motion";
import { ROUTE_PATH, SOCIAL_LINKS } from "../../routes/routePath";

const menuItems = [
  {
    to: "/",
    label: "Trang chủ",
  },
  {
    to: ROUTE_PATH.PROGRAMS,
    label: "Khóa học",
    hasDropdown: true,
    dropdownItems: [
      { label: "Trực tuyến", to: ROUTE_PATH.PROGRAMS },
      { label: "Trực tiếp", to: ROUTE_PATH.PROGRAMS },
      { label: "1 kèm 1", to: ROUTE_PATH.PROGRAMS },
      { label: "Học nhóm", to: ROUTE_PATH.PROGRAMS },
    ],
  },
  {
    to: "/teachers",
    label: "Giáo viên",
  },
  {
    to: ROUTE_PATH.INTRO,
    label: "Về chúng tôi",
    hasDropdown: true,
    dropdownItems: [
      { label: "Tin tức", to: ROUTE_PATH.NEWS },
      { label: "Giới thiệu", to: ROUTE_PATH.INTRO },
    ],
  },
];

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
          {menuItems.map(({ to, label, hasDropdown, dropdownItems }, i) => (
            <div key={label} className="relative group">
              {" "}
              {/* ✅ Thêm key */}
              <Link to={to} className="flex items-center gap-2 pr-3">
                <p>{label}</p>
                {hasDropdown && (
                  <i className="fa-regular fa-angle-down mt-1"></i>
                )}
              </Link>
              {hasDropdown && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="hidden group-hover:block bg-white shadow-xl rounded-md p-2 min-w-[160px]">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.label} // ✅ Key duy nhất cho từng dropdown item
                        to={item.to}
                        className="block p-2 hover:bg-blue-dark hover:text-white transition-colors duration-200 rounded"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </_motion.div>

        <_motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href={SOCIAL_LINKS.ZALO}
            target="_blank"
            className="hover:cursor-pointer bg-yellow-dark font-medium text-black py-3 px-5 rounded-sm hover:shadow-xl transition-shadow duration-300"
          >
            Đăng ký học thử!
          </a>
        </_motion.div>
      </div>
    </_motion.div>
  );
}

export default Navbar;
