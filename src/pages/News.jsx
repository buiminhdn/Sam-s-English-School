import {
  article1,
  article2,
  article3,
  article4,
  article5,
} from "../assets/images";
import FreeConsultation from "../components/FreeConsultation";
import { motion as _motion } from "framer-motion";

function News() {
  return (
    <>
      {/* Heading */}
      <_motion.p
        className="mt-10 text-3xl sm:text-4xl md:text-5xl font-semibold text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tin Tức
      </_motion.p>

      <_motion.div className="container mt-10">
        {/* Header Row */}
        <_motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl sm:text-3xl font-medium">Bài viết mới nhất</p>
          <div className="flex gap-2 items-center text-blue-dark hover:underline text-base">
            <a
              href="https://www.google.com/search?q=sam+english+school"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xem tất cả
            </a>
            <i className="fa-regular fa-angle-right"></i>
          </div>
        </_motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              url: "https://dantri.com.vn/doi-song/thay-giao-nguoi-anh-day-hoc-cho-tre-em-vung-cao-yeu-viet-nam-vi-su-don-hau-20231126153303264.htm",
              img: article1,
              title:
                "Thầy giáo người Anh dạy học cho trẻ em vùng cao, yêu Việt Nam vì sự đôn hậu",
              content:
                "Suốt thời gian ở Việt Nam, Sam Mittal (37 tuổi, quốc tịch Anh) đã dành thời gian để đến những vùng cao, dạy tiếng Anh cho người đồng bào vì ước mong giúp họ thay đổi cuộc sống.",
              source: "Báo Dân Trí",
            },
            {
              url: "https://vnexpress.net/nguoi-nuoc-ngoai-lam-tinh-nguyen-o-viet-nam-4561230.html",
              img: article2,
              title: "Người nước ngoài làm tình nguyện ở Việt Nam",
              content:
                "Vài tháng sau khi tốt nghiệp trung học, Mara một mình xách vali bay từ Berlin đến TP HCM bắt đầu một năm làm tình nguyện. Cô tìm được việc dạy tiếng Anh miễn phí cho một trung tâm ở quận Bình Thạnh qua ứng dụng Worldpacker.",
              source: "Báo VN Express",
            },
            {
              url: "https://vnexpress.net/dan-du-muc-so-do-xo-den-viet-nam-4561231.html",
              img: article3,
              title: "Dân 'du mục số' đổ xô đến Việt Nam",
              content:
                "Ở một quán cà phê Mũi Né, Sam bật laptop dạy tiếng Anh cho 4 học viên. Chàng trai 33 tuổi người Anh từng đi qua 51 quốc gia, đến Việt Nam từ 4 năm trước và từng đi xe máy từ Cà Mau đến Hà Giang.",
              source: "Báo VN Express",
            },
            {
              url: "https://www.phunuonline.com.vn/nhung-ong-tay-chon-tphcm-lam-que-huong-a1509509.html",
              img: article4,
              title: "Những “ông Tây” chọn TPHCM làm quê hương",
              content:
                "Ông Jefferson yêu thích làm vườn tại một khoảnh đất ở quận Bình Thạnh, TPHCM. Gắn bó 7 năm với khu vườn có nhiều loại cây như chuối, mía, xoài, bầu... ông coi đây là quê hương thứ hai của mình.",
              source: "Báo Phụ nữ",
            },
          ].map((item, i) => (
            <_motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <img
                src={item.img}
                alt=""
                className="h-60 md:h-72 w-full object-cover rounded-xl"
              />
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-lg sm:text-xl font-medium line-clamp-2 hover:underline"
              >
                {item.title}
              </a>
              <p className="mt-3 text-sm sm:text-base line-clamp-3 text-gray-600">
                {item.content}
              </p>
              <p className="mt-3 text-gray-500 text-xs sm:text-sm italic">
                {item.source}
              </p>
            </_motion.div>
          ))}
        </div>
      </_motion.div>

      <div className="container mt-20">
        {/* Section Header */}
        <_motion.div
          className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl sm:text-3xl font-medium">Tin xu hướng</p>
          <div className="flex gap-2 items-center text-blue-dark hover:underline text-base">
            <a
              href="https://afamily.vn/bi-hai-khach-tay-hoc-cach-sinh-ton-trong-nang-nong-do-lua-cua-tphcm-tap-ngu-trua-uong-nuoc-mia-20240428133802872.chn?zarsrc=30&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Đọc ngay
            </a>
            <i className="fa-regular fa-angle-right"></i>
          </div>
        </_motion.div>

        {/* Image + Content Row */}
        <_motion.div
          className="flex flex-col lg:flex-row gap-6 lg:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left image */}
          <_motion.img
            src={article5}
            alt="Tin xu hướng"
            className="w-full lg:w-3/5 h-auto object-cover rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Right text block */}
          <_motion.div
            className="text-base"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-2xl sm:text-3xl lg:text-5xl leading-tight font-medium">
              Bi hài khách Tây học cách "sinh tồn" trong nắng nóng đổ lửa của
              TPHCM: Tập... ngủ trưa, uống nước mía
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 text-gray-600 text-sm sm:text-base">
              <p>
                Zach (30 tuổi) là một người Mỹ sống ở TPHCM được 9 tháng. Công
                việc của anh là dạy tiếng Anh ở các trung tâm và trường THCS.
                Zach nói vui, anh đã phải “chiến đấu” với nhiệt độ trong suốt
                mùa nắng nóng cao điểm.
                <br />
                <br />Ở trường học, mọi người nghỉ trưa từ 11h30 đến 13h30 và
                tìm mọi cách để làm mát mình. Đầu tiên, Zach tìm đến quán cà phê
                hoặc cửa hàng tiện lợi có điều hòa. “Tôi cảm thấy nó đủ giải
                quyết cái nóng tạm thời nhưng một bữa trưa ở quán ăn không có
                quạt sẽ là thảm họa”, anh nói. Zach bắt đầu thói quen uống đá,
                anh cho đá vào mọi cốc cà phê và nước chanh.
              </p>
              <p>
                Người dân Oregon hay mặc áo hoodie, áo len và quần dài vào mùa
                thu hoặc đông để giữ ấm. Tuy nhiên, Zach đã sốc khi thấy người
                Việt Nam cũng mặc nó vào mùa hè để tránh nóng. Sau này, anh mới
                hiểu ra họ muốn tránh tiếp xúc trực tiếp với ánh nắng mặt trời.
                <br />
                <br />
                Anh có sở thích chụp ảnh phong cảnh và điều này là một thách
                thức nếu thực hiện nó dưới thời tiết gần 43 độ C. “Tôi luôn mang
                theo chai nước lớn, quần dài và mũ nữa. Tôi sợ bị cháy nắng lắm.
                <br />
                <br />
                Cái nóng có thể bất ngờ “tấn công” sức khỏe nếu tôi quên uống đủ
                nước hoặc nghỉ ngơi”, Zach nói.
              </p>
            </div>

            <p className="mt-5 text-gray-500 text-sm italic">
              Trang thông tin điện tử tổng hợp
            </p>
          </_motion.div>
        </_motion.div>
      </div>

      <div className="bg-yellow-dark mt-20 mb-30">
        <div className="container py-16">
          {/* Header */}
          <_motion.div
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl sm:text-3xl font-medium">Viral Videos</p>
            <div className="flex gap-2 items-center text-gray-800 hover:underline text-base">
              <p>Xem tất cả</p>
              <i className="fa-regular fa-angle-right"></i>
            </div>
          </_motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left big video */}
            <_motion.div
              className="flex flex-col justify-between"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/yjnPq65n0l8?si=Xj0hVixhEqjKTYvh"
                  title="YouTube video player"
                  className="w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-6 mt-5">
                <a
                  href="https://youtu.be/yjnPq65n0l8?si=7A3fVLpNc2kYZL47"
                  target="_blank"
                  className="text-xl font-medium hover:underline md:w-1/3"
                >
                  Người nước ngoài “phái phái” vì đồ ăn chay độc lạ Việt Nam
                </a>
                <p className="text-gray-700 text-sm md:text-base line-clamp-5 md:w-2/3">
                  Amazing Vietnamese Foods là series về phản ứng của người nước
                  ngoài khi được thử các món ăn "độc lạ" của ẩm thực Việt Nam.
                  Với sự tham gia của các thực khách từ mọi quốc gia trên thế
                  giới hứa hẹn sẽ mang lại những tình huống phản ứng vui nhộn,
                  kịch tính và đầy bất ngờ...
                </p>
              </div>
            </_motion.div>

            {/* Right small cards */}
            <div className="flex flex-col gap-7">
              {[
                {
                  url: "https://www.youtube.com/embed/le21na5iGjQ?si=evOHGv090mdvPWKV",
                  title:
                    "Lần đầu ăn trái cây Việt Nam người nước ngoài chỉ biết cười haha",
                  desc: "Du khách lần đầu thử sầu riêng, mít, chôm chôm… và có những phản ứng hài hước. Video gây cười nhưng cũng quảng bá trái cây nhiệt đới Việt Nam.",
                },
                {
                  url: "https://www.youtube.com/embed/Zc_DvR_1V40?si=WFZuevFi875GYaL-",
                  title:
                    "ĐẶC SẢN TÂY BẮC khiến người nước ngoài phấn khích cho CƠN BÃO ĐIỂM 10",
                  desc: "Thực khách nước ngoài lần đầu ăn trứng vịt lộn - món ăn 'vừa lạ vừa sợ' trong mắt họ. Phản ứng bất ngờ và đáng yêu.",
                },
                {
                  url: "https://www.youtube.com/embed/rKxdxBuOfRs?si=ALlahWyMddFX2oIw",
                  title:
                    "Các loại bún của Việt Nam khiến 3 anh Tây sì sụp không còn 1 giọt",
                  desc: "Bánh tráng trộn - món ăn vặt huyền thoại được đem đến cho khách nước ngoài lần đầu thử. Vị chua cay mặn ngọt khiến nhiều người mê ngay.",
                },
              ].map((video, i) => (
                <_motion.div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <div className="aspect-video w-full">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="font-medium text-lg line-clamp-2">
                      {video.title}
                    </p>
                    <p className="text-gray-700 mt-2 text-sm line-clamp-4">
                      {video.desc}
                    </p>
                  </div>
                </_motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FreeConsultation />
    </>
  );
}

export default News;
