import { useState } from "react";
import { motion as _motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import confetti from "canvas-confetti";
import { ContactIllus, ContactIllus2 } from "../assets/images";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // ✅ Thêm state mới

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Gộp cả 3 trường lại
    const combined = `Họ tên: ${name} - Email: ${email} - SĐT: ${phone}`;

    const formData = new FormData();
    formData.append("entry.566193152", combined);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSd0DfQS8yC-Yfh8runPu5LZVlYiL_1IL9zINFDzz1KibduTLQ/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      const audio = new Audio("/ting.mp3");
      audio.play();

      toast.success("Gửi thành công!");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      setName("");
      setEmail("");
      setPhone(""); // ✅ Reset số điện thoại
    } catch (error) {
      toast.error("Gửi thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div className="container mt-30">
      <Toaster position="top-center" />
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
            <_motion.input
              type="text"
              placeholder="Họ và tên"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white text-black rounded-full px-5 py-3 outline-none"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />
            <_motion.input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black rounded-full px-5 py-3 outline-none"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />
            <_motion.input
              type="tel"
              placeholder="Số điện thoại"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white text-black rounded-full px-5 py-3 outline-none"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />

            <_motion.button
              type="submit"
              className="border-2 hover:cursor-pointer border-yellow-dark bg-yellow-dark text-black hover:bg-transparent hover:text-white transition-colors duration-300 rounded-full p-3"
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
