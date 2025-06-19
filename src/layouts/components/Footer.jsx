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
      className="mt-20 py-14 bg-blue-dark text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <_motion.div className="container grid grid-cols-2 gap-20">
        {/* Left Column */}
        <_motion.div variants={itemVariants}>
          <_motion.img
            src={logo}
            alt=""
            className="h-20"
            variants={itemVariants}
          />
          <_motion.p className="mt-7" variants={itemVariants}>
            Tại Trường Anh ngữ Sam, chúng tôi cam kết tạo ra sự khác biệt. Chúng
            tôi mời bạn tham gia cộng đồng của chúng tôi và bắt đầu hành trình
            thay đổi và phát triển tích cực. Cùng nhau, chúng ta có thể tạo ra
            tác động đáng kể đến cuộc sống và sự nghiệp của bạn.
          </_motion.p>
          <_motion.div
            className="mt-7 flex gap-5 text-2xl"
            variants={itemVariants}
          >
            <a href={SOCIAL_LINKS.FACEBOOK} className="block" target="_blank">
              <i className="fa-brands fa-facebook-f cursor-pointer hover:text-yellow-dark transition-colors" />
            </a>
            <a href={SOCIAL_LINKS.INSTAGRAM} className="block" target="_blank">
              <i className="fa-brands fa-instagram cursor-pointer hover:text-yellow-dark transition-colors" />
            </a>
            <a href={SOCIAL_LINKS.FACEBOOK} className="block" target="_blank">
              <i className="fa-brands fa-linkedin cursor-pointer hover:text-yellow-dark transition-colors" />
            </a>
            <a href={SOCIAL_LINKS.TIKTOK} className="block" target="_blank">
              <i className="fa-brands fa-tiktok cursor-pointer hover:text-yellow-dark transition-colors" />
            </a>
          </_motion.div>
        </_motion.div>

        {/* Right Column */}
        <_motion.div className="flex justify-between" variants={itemVariants}>
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
              <p className="text-base">{title}</p>
              <_motion.div className="mt-10 flex flex-col gap-5 text-gray-300">
                {items.map((item, idx) =>
                  typeof item === "string" ? (
                    <_motion.p key={item} variants={itemVariants}>
                      {item}
                    </_motion.p>
                  ) : item.to ? (
                    <_motion.div
                      key={`${item.to}-${idx}`}
                      variants={itemVariants}
                    >
                      <Link
                        to={item.to}
                        className="hover:text-white transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </_motion.div>
                  ) : (
                    <_motion.div
                      key={item.text?.toString() || idx}
                      className="flex gap-3 items-center"
                      variants={itemVariants}
                    >
                      <i className={item.icon} />
                      <p>{item.text}</p>
                    </_motion.div>
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
