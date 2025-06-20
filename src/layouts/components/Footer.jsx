import { motion as _motion } from "framer-motion";
import { Link } from "react-router-dom";
import { footerillus, logo } from "../../assets/images";
import { ROUTE_PATH, SOCIAL_LINKS } from "../../routes/routePath";

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <_motion.div
      style={{
        backgroundImage: `url(${footerillus})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="mt-20 py-14 bg-blue-dark text-white px-4 sm:px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <_motion.div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left Column */}
        <_motion.div variants={itemVariants}>
          <_motion.img
            src={logo}
            alt="Logo"
            className="h-16 sm:h-20"
            variants={itemVariants}
          />
          <_motion.p
            className="mt-5 sm:mt-7 text-sm sm:text-base"
            variants={itemVariants}
          >
            Tại Trường Anh ngữ Sam, chúng tôi cam kết tạo ra sự khác biệt. Chúng
            tôi mời bạn tham gia cộng đồng của chúng tôi và bắt đầu hành trình
            thay đổi và phát triển tích cực.
          </_motion.p>
          <_motion.div
            className="mt-6 flex gap-5 text-xl sm:text-2xl"
            variants={itemVariants}
          >
            <a href={SOCIAL_LINKS.FACEBOOK} target="_blank">
              <i className="fa-brands fa-facebook-f hover:text-yellow-dark transition-colors" />
            </a>
            <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank">
              <i className="fa-brands fa-instagram hover:text-yellow-dark transition-colors" />
            </a>
            <a href={SOCIAL_LINKS.FACEBOOK} target="_blank">
              <i className="fa-brands fa-linkedin hover:text-yellow-dark transition-colors" />
            </a>
            <a href={SOCIAL_LINKS.TIKTOK} target="_blank">
              <i className="fa-brands fa-tiktok hover:text-yellow-dark transition-colors" />
            </a>
          </_motion.div>
        </_motion.div>

        {/* Right Column */}
        <_motion.div
          className="flex flex-wrap sm:justify-between gap-10"
          variants={itemVariants}
        >
          {[
            {
              title: "Liên kết",
              items: [
                { label: "Trang chủ", to: "/" },
                { label: "Chương trình học", to: ROUTE_PATH.PROGRAMS },
                { label: "Giáo viên", to: ROUTE_PATH.TEACHERS },
                { label: "Về chúng tôi", to: ROUTE_PATH.INTRO },
              ],
            },
            {
              title: "Khoá học",
              items: [
                { label: "Chuẩn bị IELTS", to: ROUTE_PATH.PROGRAMS },
                {
                  label: "Tiếng anh cho CEO, giám đốc",
                  to: ROUTE_PATH.PROGRAMS,
                },
                { label: "Chương trình Cambridge", to: ROUTE_PATH.PROGRAMS },
                { label: "Kĩ năng giao tiếp", to: ROUTE_PATH.PROGRAMS },
              ],
            },
            {
              title: "Liên hệ",
              items: [
                {
                  icon: "fa-light fa-phone-volume",
                  text: "(406) 555-0120",
                },
                {
                  icon: "fa-light fa-envelope",
                  text: "mangcoding123@gmail.com",
                },
                {
                  icon: "fa-light fa-location-dot",
                  text: (
                    <>
                      2972 Westheimer Rd. Santa Ana,
                      <br />
                      Illinois 85486
                    </>
                  ),
                },
              ],
            },
          ].map(({ title, items }) => (
            <_motion.div key={title} variants={itemVariants}>
              <p className="text-base font-semibold">{title}</p>
              <_motion.div className="mt-6 flex flex-col gap-4 text-sm text-gray-300">
                {items.map((item, idx) =>
                  item.to ? (
                    <Link
                      key={`${item.to}-${idx}`}
                      to={item.to}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div
                      key={item.text?.toString() || idx}
                      className="flex items-start gap-3"
                    >
                      <i className={`${item.icon} mt-1`} />
                      <p>{item.text}</p>
                    </div>
                  )
                )}
              </_motion.div>
            </_motion.div>
          ))}
        </_motion.div>
      </_motion.div>
    </_motion.div>
  );
}

export default Footer;
