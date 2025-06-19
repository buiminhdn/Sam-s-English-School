import {
  class1,
  course2,
  course3,
  course4,
  course6,
  founder,
  whychoose1,
  whychoose2,
  whychoose3,
} from "../assets/images";
import FreeConsultation from "../components/FreeConsultation";
import { motion as _motion } from "framer-motion";

const courseImages = [course6, course2, course3, course4];

function Introduction() {
  return (
    <>
      <div className="container mt-14">
        {/* Heading */}
        <div className="text-center flex flex-col gap-3">
          <_motion.p
            className="text-3xl sm:text-4xl font-semibold mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Chúng tôi muốn tạo ra sự thay đổi
            <br />
            chúng tôi giáo dục, và truyền cảm hứng
          </_motion.p>
          <_motion.p
            className="lg:w-2/3 mx-auto text-base mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Khám phá niềm đam mê và chuyên môn đằng sau Trường tiếng Anh Sam,
            nơi chúng tôi cam kết cung cấp nền giáo dục tiếng Anh đặc biệt và
            xây dựng môi trường học tập hỗ trợ cho học sinh trên toàn cầu.
          </_motion.p>
        </div>

        {/* Founder Section */}
        <div className="mt-10 w-10/12 flex flex-col sm:flex-row mx-auto gap-10 lg:gap-20">
          <_motion.div
            className="mt-10 text-base"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold text-xl">
              Sam Mittal - Nhà sáng lập &amp; Giáo viên tại Trường Anh ngữ Sam
            </p>
            <br />
            <p className="text-base">
              Tôi tên là Sam Mital, và tôi đam mê giáo dục và học ngôn ngữ. Với
              hơn 10 năm kinh nghiệm giảng dạy, tôi đã có vinh dự được làm việc
              tại 15 quốc gia khác nhau và giảng dạy tại nhiều trường đại học.
              Là một cựu giám khảo IELTS, tôi đã tận mắt chứng kiến sức mạnh
              chuyển đổi của giáo dục ngôn ngữ.
              <br />
              <br />
              Tôi thành lập Trường tiếng Anh Sam để tạo ra tác động tích cực đến
              cuộc sống của mọi người thông qua việc học ngôn ngữ. Sứ mệnh của
              chúng tôi là mở ra những khả năng mới cho sự phát triển cá nhân và
              nghề nghiệp bằng cách thành thạo tiếng Anh. Chúng tôi tin rằng
              việc học một ngôn ngữ mới có thể mở ra cánh cửa đến với thế giới
              cơ hội và làm phong phú cuộc sống theo những cách có ý nghĩa.
              <br />
              <br />
              Tại Trường tiếng Anh Sam, chúng tôi cam kết tạo ra sự khác biệt.
              Chúng tôi mời bạn tham gia cộng đồng của chúng tôi và bắt đầu hành
              trình thay đổi và phát triển tích cực. Cùng nhau, chúng ta có thể
              tạo ra tác động đáng kể đến cuộc sống và sự nghiệp của bạn.
              <br />
              <br />
              Hãy tham gia cùng chúng tôi và trải nghiệm sự chuyển đổi tích cực
              mà việc học ngôn ngữ có thể mang lại.
            </p>
          </_motion.div>

          {/* Image + Name */}
          <_motion.div
            className="mx-auto"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
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
              Người sáng lập và CEO
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sứ mệnh của
            <br />
            Sam's English School
          </_motion.p>

          <_motion.p
            className="text-base text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tại Sam's English School, chúng tôi tin rằng mỗi học viên đều có thể
            trở thành phiên bản tốt nhất của chính mình thông qua môi trường học
            tiếng Anh chất lượng và truyền cảm hứng. Chúng tôi không chỉ dạy
            ngôn ngữ, mà còn phát triển sự tự tin, tư duy phản biện và kỹ năng
            giao tiếp cho học viên ở mọi lứa tuổi. Với đội ngũ giáo viên bản ngữ
            tận tâm và phương pháp giảng dạy cá nhân hóa, Sam's cam kết đồng
            hành cùng học viên trên hành trình chinh phục tiếng Anh vững chắc và
            đầy cảm hứng.
          </_motion.p>
        </div>

        {/* Image Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {courseImages.map((src, index) => (
            <_motion.img
              key={index}
              src={src}
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
            Tại Sam’s English School, chúng tôi hướng đến việc xây dựng một thế
            hệ học viên tự tin, bản lĩnh và sẵn sàng hội nhập toàn cầu thông qua
            khả năng sử dụng tiếng Anh thành thạo.
            <br />
            <br />
            Chúng tôi không ngừng đổi mới phương pháp giảng dạy, tạo ra một môi
            trường học tập tích cực, hiện đại và truyền cảm hứng, giúp học viên
            phát triển toàn diện về ngôn ngữ, tư duy và kỹ năng mềm.
            <br />
            <br />
            Tầm nhìn của chúng tôi là trở thành trung tâm tiếng Anh hàng đầu,
            nơi mọi học viên đều được trao cơ hội để vươn xa và tỏa sáng trên
            hành trình học tập và cuộc sống.
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
          {[
            {
              img: whychoose1,
              title: "Giáo viên giàu kinh nghiệm",
              desc: "Đội ngũ giáo viên đến từ các quốc gia nói tiếng Anh, giàu chuyên môn và tận tâm, giúp học viên phát triển toàn diện khả năng ngôn ngữ.",
            },
            {
              img: whychoose2,
              title: "Phương pháp học hiện đại",
              desc: "Áp dụng các phương pháp giảng dạy tiên tiến, chú trọng thực hành và tương tác, giúp học viên tiếp thu nhanh, nhớ lâu, tự nhiên.",
            },
            {
              img: whychoose3,
              title: "Chi phí hợp lý, chất lượng",
              desc: "Chúng tôi mang đến chương trình học chất lượng cao với mức học phí phù hợp, đảm bảo hiệu quả và giá trị cho từng khóa học.",
            },
          ].map((item, i) => (
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
                  {item.title}
                </p>
                <p className="text-gray-500 text-center text-base mt-5">
                  {item.desc}
                </p>
              </div>
            </_motion.div>
          ))}
        </div>
      </div>
      <FreeConsultation theme="purple" />
    </>
  );
}

export default Introduction;
