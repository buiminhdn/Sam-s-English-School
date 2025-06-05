import { motion as _motion } from "framer-motion";
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
              {[...Array(3)].map((_, i) => (
                <_motion.div
                  key={i}
                  className="flex items-center gap-4 mt-3 text-blue-dark"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <i className="fa-xl fa-regular fa-phone-arrow-up-right"></i>
                  <p className="text-2xl">Zalo: +84 707-060-068</p>
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
          action=""
          className={`${formBg} px-10 py-14 m-10 rounded-2xl text-lg flex flex-col gap-7 h-fit`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Họ và tên"
            className="outline-none py-3 border-b text-black placeholder:text-gray-600"
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            className="outline-none py-3 border-b text-black placeholder:text-gray-600"
          />
          <input
            type="text"
            placeholder="Tài khoản email"
            className="outline-none py-3 border-b text-black placeholder:text-gray-600"
          />
          <textarea
            placeholder="Nội dung cần hỗ trợ"
            rows={5}
            className="outline-none py-3 border-b text-black placeholder:text-gray-600"
          ></textarea>
          <button
            className={`flex items-center justify-center gap-3 p-3 rounded-full ${buttonBg}`}
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
