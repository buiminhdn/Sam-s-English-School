import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import { motion as _motion } from "framer-motion";
import { ROUTE_PATH } from "../../routes/routePath";

function TopNavbar() {
  return (
    <_motion.div
      className="bg-blue-dark"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container py-4 flex justify-between items-center text-white">
        <Link to="/">
          <_motion.img
            src={logo}
            alt="logo"
            className="h-14 cursor-pointer"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          />
        </Link>
        <_motion.div
          className="flex gap-20"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4">
            <i className="fa-2xl fa-thin fa-phone"></i>
            <div>
              <p className="font-light">Hỗ trợ 24/7</p>
              <p className="text-base mt-0.5">+84 822-335-446</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <i className="fa-2xl fa-thin fa-envelope-open"></i>
            <div>
              <p className="font-light">Email liên hệ</p>
              <p className="text-base mt-0.5">sam@samenglishschool.com</p>
            </div>
          </div>
        </_motion.div>
        <_motion.div
          className="flex items-center gap-6"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          <p className="font-medium">EN | VN</p>
          <Link
            to={ROUTE_PATH.LOGIN}
            target="_blank"
            className="bg-white font-medium text-black py-2.5 px-5 rounded-sm border border-blue-dark
           hover:bg-blue-dark hover:border-white hover:text-white transition-colors duration-300"
          >
            Đăng nhập
          </Link>
        </_motion.div>
      </div>
    </_motion.div>
  );
}

export default TopNavbar;
