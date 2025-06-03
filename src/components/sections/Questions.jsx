import { useState } from "react";
import { motion as _motion, AnimatePresence } from "framer-motion";
import { QuestionsIllus } from "../../assets/images";

const questionsData = [
  {
    question: "Điểm khác biệt so với các nền tảng giáo dục khác là gì?",
    answer:
      "Sam's English School cung cấp các hoạt động học tập tương tác và cá nhân hóa giúp trẻ phát triển toàn diện.",
  },
  {
    question: "Làm thế nào tôi có thể truy cập vào Trường tiếng Anh Sam?",
    answer:
      "Bạn có thể đăng ký và truy cập trực tiếp trên website hoặc tải ứng dụng Sam's English School từ các cửa hàng ứng dụng.",
  },
  {
    question:
      "Vấn đề bảo mật dữ liệu của trẻ em khi sử dụng nền tảng này thì sao?",
    answer:
      "Chúng tôi cam kết bảo mật và bảo vệ dữ liệu của trẻ em theo các tiêu chuẩn cao nhất, không chia sẻ cho bên thứ ba.",
  },
  {
    question: "Điểm khác biệt so với các nền tảng giáo dục khác là gì?",
    answer:
      "Sam's English School cung cấp các hoạt động học tập tương tác và cá nhân hóa giúp trẻ phát triển toàn diện.",
  },
  {
    question: "Làm thế nào tôi có thể truy cập vào Trường tiếng Anh Sam?",
    answer:
      "Bạn có thể đăng ký và truy cập trực tiếp trên website hoặc tải ứng dụng Sam's English School từ các cửa hàng ứng dụng.",
  },
];

function Questions() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-28 flex justify-between gap-10 relative">
      <_motion.div
        className="w-full relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <_motion.p
          className="text-center text-6xl font-medium text-gray-800 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Những <span className="text-purple-dark">câu hỏi</span>
          <br />
          thường gặp
        </_motion.p>

        <_motion.img
          src={QuestionsIllus}
          alt=""
          className="h-[32rem] absolute top-14 -left-3"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        />
      </_motion.div>

      <div className="w-full flex flex-col gap-3">
        {questionsData.map(({ question, answer }, i) => {
          const isOpen = i === openIndex;
          return (
            <div
              key={i}
              className={`w-full p-3 rounded-3xl border flex flex-col border-gray-300 bg-white ${
                isOpen ? "shadow-lg" : ""
              }`}
            >
              <div
                onClick={() => toggleQuestion(i)}
                className="flex items-center justify-between cursor-pointer gap-7"
              >
                <p className="ml-2 text-lg">{question}</p>
                <div
                  className={`size-8 rounded-full flex justify-center items-center transition-transform duration-300 ${
                    isOpen
                      ? "bg-purple-dark text-white rotate-45"
                      : "bg-purple-light text-purple-dark"
                  }`}
                >
                  <i className="fa-lg fa-solid fa-plus"></i>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <_motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto", marginTop: 12 },
                      collapsed: { opacity: 0, height: 0, marginTop: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-2 text-gray-700 text-base overflow-hidden"
                  >
                    {answer}
                  </_motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
