import { useState } from "react";
import { motion as _motion } from "framer-motion";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import { contact1, contact2, contact3 } from "../assets/images";

const themeClasses = {
  yellow: {
    formBg: "bg-yellow-light",
    buttonBg: "bg-yellow-dark",
  },
  blue: {
    formBg: "bg-blue-light",
    buttonBg: "bg-blue-dark text-white",
  },
  purple: {
    formBg: "bg-purple-light",
    buttonBg: "bg-purple-dark text-white",
  },
};

function FreeConsultation({ theme = "yellow" }) {
  const { formBg, buttonBg } = themeClasses[theme] || themeClasses["yellow"];
  const getImageByTheme = () => {
    if (theme === "blue") return contact2;
    if (theme === "purple") return contact3;
    return contact1;
  };

  // ✅ Form States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const combined = `Họ tên: ${name} - SĐT: ${phone} - Email: ${email} - Nội dung: ${message}`;
    const formData = new FormData();
    formData.append("entry.566193152", combined); // 👈 Thay ID nếu khác

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
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Gửi thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div className="container">
      <div className="rounded-2xl bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
        {/* Left Content */}
        <_motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="pb-14 pt-18 ml-10 md:ml-20">
            <p className="text-5xl font-semibold">Tư Vấn Miễn Phí</p>

            <div className="mt-8">
              {[
                { label: "Zalo", value: "+84 707-060-068" },
                { label: "WhatsApp", value: "+84 822-335-446" },
                { label: "Email", value: "sam@samenglishschool.com" },
              ].map((item, index) => (
                <_motion.div
                  key={index}
                  className="flex items-center gap-4 mt-3 text-blue-dark"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <i
                    className={`fa-xl ${
                      item.label === "Email"
                        ? "fa-solid fa-envelope"
                        : "fa-solid fa-phone-arrow-up-right"
                    }`}
                  ></i>
                  <p className="text-2xl">
                    {item.label}: {item.value}
                  </p>
                </_motion.div>
              ))}
            </div>
          </div>

          <_motion.img
            src={getImageByTheme()}
            alt=""
            className="w-10/12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </_motion.div>

        {/* Right Form */}
        <_motion.form
          onSubmit={handleSubmit}
          className={`${formBg} px-10 py-14 m-10 rounded-2xl text-lg flex flex-col gap-7 h-fit`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Họ và tên"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="outline-none py-3 border-b text-black placeholder:text-gray-600"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="outline-none py-3 border-b text-black placeholder:text-gray-600"
          />
          <input
            type="email"
            placeholder="Tài khoản email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none py-3 border-b text-black placeholder:text-gray-600"
          />
          <textarea
            placeholder="Nội dung cần hỗ trợ"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="outline-none py-3 border-b text-black placeholder:text-gray-600"
          ></textarea>
          <button
            type="submit"
            className={`flex items-center justify-center gap-3 p-3 rounded-full hover:shadow-2xl transition-shadow duration-300 hover:cursor-pointer ${buttonBg}`}
          >
            <p>Gửi yêu cầu</p>
            <i className="fa-light fa-paper-plane"></i>
          </button>
        </_motion.form>
      </div>
    </div>
  );
}

export default FreeConsultation;
