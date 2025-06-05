import {
  class1,
  founder,
  whychoose1,
  whychoose2,
  whychoose3,
} from "../assets/images";
import FreeConsultation from "../components/FreeConsultation";
import { motion as _motion } from "framer-motion";

function Introduction() {
  return (
    <>
      <div className="container mt-14">
        {/* Heading */}
        <div className="text-center flex flex-col gap-3">
          <_motion.p
            className="text-3xl sm:text-4xl font-semibold mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            We are a community of changemakers
            <br />
            we educate, we inspire, we empower
          </_motion.p>
          <_motion.p
            className="lg:w-2/3 mx-auto text-base mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover the passion and expertise behind Sam's English School,
            where we're committed to delivering exceptional English language
            education and cultivating a supportive learning environment for
            students around the globe.
          </_motion.p>
        </div>

        {/* Founder Section */}
        <div className="mt-10 w-10/12 flex flex-col sm:flex-row mx-auto gap-10 lg:gap-20">
          <_motion.div
            className="mt-10 text-base"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold text-xl">
              Sam Mittal - Founder &amp; Educator at Sam's English School
            </p>
            <br />
            <p className="text-base">
              My name is Sam Mital, and I am passionate about education and
              language learning. With over 10 years of experience in teaching, I
              have had the privilege of working in 15 different countries and
              teaching at various universities. As a former IELTS examiner, I
              have seen firsthand the transformative power of language
              education.
              <br />
              <br />
              I founded Sam's English School to make a positive impact in
              people's lives through language learning. Our mission is to unlock
              new possibilities for personal and professional growth by
              mastering the English language. We believe that learning a new
              language can open doors to a world of opportunities and enrich
              lives in meaningful ways.
              <br />
              <br />
              At Sam's English School, we are committed to making a difference.
              We invite you to join our community and embark on a journey of
              positive change and growth. Together, we can make a significant
              impact on your life and career.
              <br />
              <br />
              Come join us and experience the positive transformation that
              language learning can bring.
            </p>
          </_motion.div>

          {/* Image + Name */}
          <_motion.div
            className="mx-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="object-contain w-80">
              <img
                src={founder}
                alt="Sam Mittal"
                className="h-96 mx-auto object-cover"
              />
            </div>
            <p className="text-center sm:text-left text-lg font-medium mt-2">
              Sam Mittal
            </p>
            <p className="text-center sm:text-left text-base">
              Founder and CEO
            </p>
          </_motion.div>
        </div>
      </div>
      <div className="container mt-20">
        {/* Header & Description */}
        <div className="flex justify-between gap-32 flex-col lg:flex-row">
          <_motion.p
            className="text-4xl font-semibold text-nowrap leading-tight"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sứ mệnh của
            <br />
            Sam's English School
          </_motion.p>

          <_motion.p
            className="text-base text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ.
            Lorem Ipsum đã là văn bản giả chuẩn của ngành kể từ những năm 1500,
            khi một thợ in vô danh lấy một galley chữ và xáo trộn nó để tạo ra
            một cuốn sách mẫu chữ. Nó đã tồn tại không chỉ năm thế kỷ, mà còn
            vượt qua cả bước nhảy vọt vào sắp chữ điện tử, Nó đã tồn tại không
            chỉ năm thế kỷ, mà còn vượt qua cả bước nhảy vọt vào sắp chữ điện
            tử.
          </_motion.p>
        </div>

        {/* Image Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {[class1, class1, class1, class1].map((src, index) => (
            <_motion.img
              key={index}
              src={src}
              alt={`class-${index}`}
              className="h-96 w-full object-cover rounded-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
      <div className="container mt-30 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <_motion.p
            className="text-4xl font-semibold leading-tight"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tầm nhìn của chúng tôi
          </_motion.p>

          <_motion.p
            className="text-base text-gray-600 mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Lorem Ipsum chỉ đơn giản là văn bản giả của ngành in ấn và sắp chữ.
            Lorem Ipsum đã là văn bản giả chuẩn của ngành kể từ những năm 1500
            khi một thợ in vô danh lấy một galley chữ và xáo trộn nó để tạo ra
            <br />
            <br />
            một cuốn sách mẫu chữ. Nó đã tồn tại không chỉ năm thế kỷ, mà còn
            vượt qua cả bước nhảy vọt vào sắp chữ điện tử,Nó đã tồn tại không
            chỉ năm thế kỷ, mà còn vượt qua cả bước nhảy vọt vào sắp chữ điện
            tử,
            <br />
            <br />
            một cuốn sách mẫu chữ. Nó đã tồn tại không chỉ năm thế kỷ, mà còn
            vượt qua cả bước nhảy vọt vào sắp chữ điện tử,Nó đã tồn tại không
            chỉ năm thế kỷ, mà còn vượt qua cả bước nhảy vọt vào sắp chữ điện
            tử,
          </_motion.p>
        </div>

        {/* Image Section */}
        <_motion.img
          src={class1}
          alt=""
          className="w-full pl-0 lg:pl-20"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
      <div className="mt-30 relative mb-40">
        <div className="bg-purple-light h-70 w-full absolute -bottom-14 -z-10"></div>

        {/* Heading */}
        <_motion.p
          className="text-4xl font-semibold leading-tight text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tại Sao Nên Chọn Sam's English School
        </_motion.p>

        {/* Cards */}
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          {[{ img: whychoose1 }, { img: whychoose2 }, { img: whychoose3 }].map(
            (item, i) => (
              <_motion.div
                key={i}
                className="rounded-2xl shadow-xl flex flex-col justify-end bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img src={item.img} alt="" />
                <div className="p-10">
                  <p className="text-2xl font-semibold text-center">
                    Experienced teacher
                  </p>
                  <p className="text-gray-500 text-center text-base mt-5">
                    Native teachers from around the world, providing quality
                    learning experiences and helping students develop their full
                    potential
                  </p>
                </div>
              </_motion.div>
            )
          )}
        </div>
      </div>
      <FreeConsultation theme="purple" />
    </>
  );
}

export default Introduction;
