import { motion as _motion } from "framer-motion";
import {
  adj,
  CirclePurple,
  Dots,
  Wave,
  WhyChooseGame,
  WhyChooseProgram,
  WhyChooseTeacher,
} from "../../assets/images";

function WhyChose() {
  return (
    <div className="container">
      <div className="flex justify-between items-end">
        {/* Heading */}
        <_motion.p
          className="text-7xl font-medium text-gray-800"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tại Sao Nên Chọn
          <br />
          Sam's English School
        </_motion.p>

        {/* Image */}
        <_motion.img
          src={adj}
          alt="illustration adjectives"
          className="w-64"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {[
          {
            bg: "bg-purple-light",
            image: WhyChooseTeacher,
            title: "Giáo viên\nkinh nghiệm",
            desc: "Khám phá các hoạt động thú vị như tô màu, thủ công và khoa học.",
            bgImage: CirclePurple,
            bgPos: "top -20px right -100px",
            bgSize: "250px",
            textColor: "text-black",
          },
          {
            bg: "bg-blue-dark",
            image: WhyChooseProgram,
            title: "Chương trình\nđa dạng",
            desc: "Khám phá các hoạt động thú vị như tô màu, thủ công và khoa học.",
            bgImage: Wave,
            bgPos: "top -50px right -60px",
            bgSize: "230px",
            textColor: "text-white",
          },
          {
            bg: "bg-yellow-dark",
            image: WhyChooseGame,
            title: "Chương trình\nđa dạng",
            desc: "Khám phá các hoạt động thú vị như tô màu, thủ công và khoa học.",
            bgImage: Dots,
            bgPos: "top -20px right -30px",
            bgSize: "180px",
            textColor: "text-black",
          },
        ].map((item, index) => (
          <_motion.div
            key={index}
            className={`${item.bg} p-10 rounded-4xl ${item.textColor}`}
            style={{
              backgroundImage: `url(${item.bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: item.bgPos,
              backgroundSize: item.bgSize,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
          >
            <img src={item.image} alt="" className="h-32" />
            <p className="font-medium text-5xl mt-10 whitespace-pre-line">
              {item.title}
            </p>
            <p className="text-lg font-light leading-6 mt-10">{item.desc}</p>
          </_motion.div>
        ))}
      </div>
    </div>
  );
}

export default WhyChose;
