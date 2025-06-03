import { motion as _motion } from "framer-motion";
import { footerillus, logo } from "../../assets/images";

function Footer() {
  // Variants for the container to stagger children
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

  // Variants for individual items
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
            At Sam's English School, we are committed to making a difference. We
            invite you to join our community and embark on a journey of positive
            change and growth. Together, we can make a significant impact on
            your life and career.
          </_motion.p>
          <_motion.div
            className="mt-7 flex gap-5 text-2xl"
            variants={itemVariants}
          >
            <i className="fa-brands fa-facebook-f cursor-pointer hover:text-purple-dark transition-colors" />
            <i className="fa-brands fa-instagram cursor-pointer hover:text-purple-dark transition-colors" />
            <i className="fa-brands fa-linkedin cursor-pointer hover:text-purple-dark transition-colors" />
            <i className="fa-brands fa-tiktok cursor-pointer hover:text-purple-dark transition-colors" />
          </_motion.div>
        </_motion.div>

        {/* Right Column */}
        <_motion.div className="flex justify-between" variants={itemVariants}>
          {[
            {
              title: "Pages",
              items: ["Home", "Our Programs", "Our Teachers", "About Us"],
            },
            {
              title: "Service",
              items: [
                "IELTS Preparation",
                "English for CEO",
                "Cambridge Curriculum",
                "Communication Skill",
              ],
            },
            {
              title: "Contact",
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
          ].map(({ title, items }, i) => (
            <_motion.div key={i} variants={itemVariants}>
              <p className="text-base">{title}</p>
              <_motion.div className="mt-10 flex flex-col gap-5 text-gray-300">
                {items.map((item, idx) =>
                  typeof item === "string" ? (
                    <_motion.p key={idx} variants={itemVariants}>
                      {item}
                    </_motion.p>
                  ) : (
                    <_motion.div
                      key={idx}
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
