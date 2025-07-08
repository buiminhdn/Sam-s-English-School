import {
  article1,
  article2,
  article3,
  article4,
  article5,
} from "../assets/images";
import FreeConsultation from "../components/FreeConsultation";
import { motion as _motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function News() {
  const { t } = useTranslation();

  const smallVideos = t("news.videos.small", { returnObjects: true });

  const articles = [
    {
      url: "https://dantri.com.vn/doi-song/thay-giao-nguoi-anh-day-hoc-cho-tre-em-vung-cao-yeu-viet-nam-vi-su-don-hau-20231126153303264.htm",
      img: article1,
      title: t("news.articles.0.title"),
      content: t("news.articles.0.content"),
      source: t("news.articles.0.source"),
    },
    {
      url: "https://vnexpress.net/nguoi-nuoc-ngoai-lam-tinh-nguyen-o-viet-nam-4561230.html",
      img: article2,
      title: t("news.articles.1.title"),
      content: t("news.articles.1.content"),
      source: t("news.articles.1.source"),
    },
    {
      url: "https://vnexpress.net/dan-du-muc-so-do-xo-den-viet-nam-4561231.html",
      img: article3,
      title: t("news.articles.2.title"),
      content: t("news.articles.2.content"),
      source: t("news.articles.2.source"),
    },
    {
      url: "https://afamily.vn/bi-hai-khach-tay-hoc-cach-sinh-ton-trong-nang-nong-do-lua-cua-tphcm-tap-ngu-trua-uong-nuoc-mia-20240428133802872.chn?zarsrc=30&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo",
      img: article5,
      title: t("news.articles.3.title"),
      content: t("news.articles.3.content"),
      source: t("news.articles.3.source"),
    },
  ];
  return (
    <>
      {/* Heading */}
      <_motion.p
        className="mt-10 text-3xl sm:text-4xl md:text-5xl font-semibold text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("news.title")}
      </_motion.p>

      <_motion.div className="container mt-10">
        {/* Header Row */}
        <_motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl sm:text-3xl font-medium">{t("news.latest")}</p>
          <div className="flex gap-2 items-center text-blue-dark hover:underline text-base">
            <a
              href="https://www.google.com/search?q=sam+english+school"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("news.seeAll")}
            </a>
            <i className="fa-regular fa-angle-right"></i>
          </div>
        </_motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((item, i) => (
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
                className="mt-4 text-lg sm:text-xl font-medium line-clamp-2 hover:underline"
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
          <p className="text-2xl sm:text-3xl font-medium">
            {t("news.trending.title")}
          </p>
          <div className="flex gap-2 items-center text-blue-dark hover:underline text-base">
            <a
              href="https://www.phunuonline.com.vn/nhung-ong-tay-chon-tphcm-lam-que-huong-a1509509.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("news.trending.readNow")}
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
            src={article4}
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
              {t("news.trending.headline")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 text-gray-600 text-sm sm:text-base">
              <p>
                {t("news.trending.paragraph1")}
                <br />
                <br />
                {t("news.trending.paragraph2")}
              </p>
              <p>
                {t("news.trending.paragraph3")}
                <br />
                <br />
                {t("news.trending.paragraph4")}
                <br />
                <br />
                {t("news.trending.paragraph5")}
              </p>
            </div>

            <p className="mt-5 text-gray-500 text-sm italic">
              {t("news.trending.source")}
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
              <div className="aspect-video w-full h-full">
                <iframe
                  src={t("news.videos.main.url")}
                  title={t("news.videos.main.title")}
                  className="w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-6 mt-5">
                <a
                  href={t("news.videos.main.link")}
                  target="_blank"
                  className="text-xl font-medium hover:underline md:w-1/3"
                >
                  {t("news.videos.main.title")}
                </a>
                <p className="text-gray-700 text-sm md:text-base line-clamp-5 md:w-2/3">
                  {t("news.videos.main.desc")}
                </p>
              </div>
            </_motion.div>

            {/* Right small cards */}
            <div className="flex flex-col gap-7">
              {smallVideos.map((video, i) => (
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
                  <div className="flex flex-col">
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
