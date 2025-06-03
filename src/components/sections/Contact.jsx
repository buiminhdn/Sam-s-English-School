import { motion as _motion } from "framer-motion";
import { ContactIllus, ContactIllus2 } from "../../assets/images";

function Contact() {
  return (
    <div className="container mt-30">
      <_motion.div
        style={{
          backgroundImage: `url(${ContactIllus2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top -40px left 30px",
          backgroundSize: "90rem",
        }}
        className="bg-blue-dark rounded-2xl p-20 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <_motion.img
          src={ContactIllus}
          alt=""
          className="absolute w-[35rem] bottom-0 left-0"
          animate={{ x: [0, 15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <_motion.div
          className="w-3/5 ml-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.5 },
            },
          }}
        >
          <_motion.p
            className="text-white text-4xl leading-tight"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Tham gia cộng đồng
            <br />
            của Sam's English School
          </_motion.p>

          <form action="" className="flex flex-col gap-4 mt-10">
            {["Họ và tên", "Email"].map((placeholder, idx) => (
              <_motion.input
                key={idx}
                type={placeholder === "Email" ? "email" : "text"}
                placeholder={placeholder}
                className="bg-white text-black rounded-full px-5 py-3 outline-none"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
            ))}

            <_motion.button
              className="border-2 border-yellow-dark bg-yellow-dark text-black hover:bg-transparent hover:text-white transision-colors duration-300 rounded-full p-3"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Gửi
            </_motion.button>
          </form>
        </_motion.div>
      </_motion.div>
    </div>
  );
}

export default Contact;
