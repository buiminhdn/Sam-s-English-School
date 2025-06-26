import {
  america,
  australia,
  canada,
  england,
  teacher10,
  teacher11,
  teacher12,
  teacher13,
  teacher14,
  teacher15,
  teacher16,
  teacher5,
  teacher6,
  teacher7,
  teacher8,
  teacher9,
} from "../images";

export const teacherData = [
  {
    id: 1,
    name: "Daniel Roberts",
    avatar: teacher5,
    countryFlag: america,
    studentCount: 530,
    totalCourse: 28,
    rating: 4.7,
    ratingCount: 182,
    subject: {
      vi: "IELTS",
      en: "IELTS",
      zh: "雅思", // Placeholder: Replace with actual Chinese translation
    },
    experiences: {
      vi: "8 năm",
      en: "8 years",
      zh: "8年", // Placeholder: Replace with actual Chinese translation
    },
    graduated: {
      vi: "Đại học California, Mỹ",
      en: "University of California, USA",
      zh: "美国加利福尼亚大学", // Placeholder: Replace with actual Chinese translation
    },
    languages: {
      vi: "Tiếng Anh, Tây Ban Nha",
      en: "English, Spanish",
      zh: "英语，西班牙语", // Placeholder: Replace with actual Chinese translation
    },
    about: {
      vi: "Thầy Daniel là chuyên gia trong lĩnh vực luyện thi IELTS với hơn 8 năm kinh nghiệm giảng dạy học viên đến từ nhiều quốc gia.",
      en: "Mr. Daniel is an expert in IELTS test preparation with over 8 years of teaching experience for students from various countries.",
      zh: "Daniel老师是雅思备考专家，拥有超过8年为来自不同国家的学生授课的经验。", // Placeholder: Replace with actual Chinese translation
    },
    certification: {
      vi: "Chứng chỉ TESOL, CELTA và nhiều thành tựu giảng dạy tại các trung tâm Anh ngữ quốc tế.",
      en: "TESOL, CELTA certificates and many teaching achievements at international English centers.",
      zh: "TESOL、CELTA证书以及在国际英语中心取得的众多教学成就。", // Placeholder: Replace with actual Chinese translation
    },
  },
  {
    id: 2,
    name: "Maryam Lee",
    avatar: teacher6,
    countryFlag: australia,
    studentCount: 420,
    totalCourse: 22,
    rating: 4.6,
    ratingCount: 155,
    subject: {
      vi: "Giao tiếp",
      en: "Communication",
      zh: "沟通", // Placeholder: Replace with actual Chinese translation
    },
    experiences: {
      vi: "7 năm",
      en: "7 years",
      zh: "7年", // Placeholder: Replace with actual Chinese translation
    },
    graduated: {
      vi: "Đại học Sydney, Úc",
      en: "University of Sydney, Australia",
      zh: "澳大利亚悉尼大学", // Placeholder: Replace with actual Chinese translation
    },
    languages: {
      vi: "Tiếng Anh, Tiếng Hàn",
      en: "English, Korean",
      zh: "英语，韩语", // Placeholder: Replace with actual Chinese translation
    },
    about: {
      vi: "Cô Maryam giúp học viên tự tin giao tiếp trong đời sống và công việc, phương pháp sôi nổi, linh hoạt.",
      en: "Ms. Maryam helps students gain confidence in everyday and workplace communication with dynamic and flexible teaching methods.",
      zh: "Maryam老师帮助学生在日常生活和职场沟通中获得自信，采用生动灵活的教学方法。", // Placeholder: Replace with actual Chinese translation
    },
    certification: {
      vi: "Chứng chỉ CELTA, kỹ năng sư phạm quốc tế và bằng giảng dạy từ Úc.",
      en: "CELTA certificate, international pedagogical skills, and a teaching degree from Australia.",
      zh: "CELTA证书、国际教学技能以及澳大利亚的教学学位。", // Placeholder: Replace with actual Chinese translation
    },
  },
  {
    id: 3,
    name: "David Oliver",
    avatar: teacher7,
    countryFlag: canada,
    studentCount: 315,
    totalCourse: 19,
    rating: 4.5,
    ratingCount: 140,
    subject: {
      vi: "Phát âm",
      en: "Pronunciation",
      zh: "发音", // Placeholder: Replace with actual Chinese translation
    },
    experiences: {
      vi: "6 năm",
      en: "6 years",
      zh: "6年", // Placeholder: Replace with actual Chinese translation
    },
    graduated: {
      vi: "Đại học Toronto, Canada",
      en: "University of Toronto, Canada",
      zh: "加拿大多伦多大学", // Placeholder: Replace with actual Chinese translation
    },
    languages: {
      vi: "Tiếng Anh, Tiếng Pháp",
      en: "English, French",
      zh: "英语，法语", // Placeholder: Replace with actual Chinese translation
    },
    about: {
      vi: "Thầy David chuyên chỉnh sửa phát âm chuẩn Anh - Mỹ, đặc biệt hiệu quả với người học mất gốc.",
      en: "Mr. David specializes in American and British pronunciation correction, especially effective for beginners.",
      zh: "David老师专注于纠正美式和英式发音，对初学者尤其有效。", // Placeholder: Replace with actual Chinese translation
    },
    certification: {
      vi: "Chứng chỉ TESOL và bằng ngôn ngữ học ứng dụng tại Canada.",
      en: "TESOL certificate and a degree in applied linguistics in Canada.",
      zh: "TESOL证书和加拿大应用语言学学位。", // Placeholder: Replace with actual Chinese translation
    },
  },
  {
    id: 4,
    name: "Lillith Van",
    avatar: teacher8,
    countryFlag: england,
    studentCount: 280,
    totalCourse: 15,
    rating: 4.8,
    ratingCount: 198,
    subject: {
      vi: "Tiếng Anh cho CEO",
      en: "English for CEOs",
      zh: "CEO英语", // Placeholder: Replace with actual Chinese translation
    },
    experiences: {
      vi: "10 năm",
      en: "10 years",
      zh: "10年", // Placeholder: Replace with actual Chinese translation
    },
    graduated: {
      vi: "Oxford University, Anh",
      en: "Oxford University, UK",
      zh: "英国牛津大学", // Placeholder: Replace with actual Chinese translation
    },
    languages: {
      vi: "Tiếng Anh, Tiếng Đức",
      en: "English, German",
      zh: "英语，德语", // Placeholder: Replace with actual Chinese translation
    },
    about: {
      vi: "Giảng viên cấp cao về tiếng Anh chuyên ngành quản lý và đàm phán quốc tế cho cấp lãnh đạo.",
      en: "Senior lecturer specializing in English for management and international negotiation for executives.",
      zh: "高级讲师，专注于为高管提供管理和国际谈判的英语培训。", // Placeholder: Replace with actual Chinese translation
    },
    certification: {
      vi: "MBA và TESOL chuyên sâu, giảng viên các chương trình đào tạo doanh nghiệp toàn cầu.",
      en: "MBA and advanced TESOL, lecturer for global corporate training programs.",
      zh: "MBA和高级TESOL，全球企业培训项目讲师。", // Placeholder: Replace with actual Chinese translation
    },
  },
  {
    id: 5,
    name: "Ane Smith",
    avatar: teacher9,
    countryFlag: america,
    studentCount: 600,
    totalCourse: 27,
    rating: 4.9,
    ratingCount: 210,
    subject: {
      vi: "Tiếng Anh thương mại",
      en: "Business English",
      zh: "商务英语", // Placeholder: Replace with actual Chinese translation
    },
    experiences: {
      vi: "9 năm",
      en: "9 years",
      zh: "9年", // Placeholder: Replace with actual Chinese translation
    },
    graduated: {
      vi: "Harvard University",
      en: "Harvard University",
      zh: "哈佛大学", // Placeholder: Replace with actual Chinese translation
    },
    languages: {
      vi: "Tiếng Anh",
      en: "English",
      zh: "英语", // Placeholder: Replace with actual Chinese translation
    },
    about: {
      vi: "Cô Ane đào tạo tiếng Anh thương mại cho nhiều tập đoàn đa quốc gia, truyền cảm hứng và dễ hiểu.",
      en: "Ms. Ane trains business English for multinational corporations with an inspiring and clear approach.",
      zh: "Ane老师为多家跨国公司培训商务英语，方法鼓舞人心且通俗易懂。", // Placeholder: Replace with actual Chinese translation
    },
    certification: {
      vi: "Chứng chỉ CELTA, MBA và bằng đào tạo kỹ năng thuyết trình chuyên nghiệp.",
      en: "CELTA certificate, MBA, and professional presentation skills training certification.",
      zh: "CELTA证书、MBA和专业演示技能培训证书。", // Placeholder: Replace with actual Chinese translation
    },
  },
  {
    id: 6,
    name: "Oleksandra Petrova",
    avatar: teacher10,
    countryFlag: australia,
    studentCount: 450,
    totalCourse: 21,
    rating: 4.6,
    ratingCount: 160,
    subject: {
      vi: "Viết học thuật",
      en: "Academic Writing",
      zh: "学术写作", // Placeholder: Replace with actual Chinese translation
    },
    experiences: {
      vi: "6 năm",
      en: "6 years",
      zh: "6年", // Placeholder: Replace with actual Chinese translation
    },
    graduated: {
      vi: "University of Melbourne",
      en: "University of Melbourne",
      zh: "墨尔本大学", // Placeholder: Replace with actual Chinese translation
    },
    languages: {
      vi: "Tiếng Anh, Tiếng Nga",
      en: "English, Russian",
      zh: "英语，俄语", // Placeholder: Replace with actual Chinese translation
    },
    about: {
      vi: "Giáo viên viết học thuật giàu kinh nghiệm, giúp học viên nâng cao kỹ năng viết luận và nghiên cứu.",
      en: "Experienced academic writing teacher helping learners improve their essay and research writing skills.",
      zh: "经验丰富的学术写作老师，帮助学员提升论文和研究写作技能。", // Placeholder: Replace with actual Chinese translation
    },
    certification: {
      vi: "Chứng chỉ chuyên môn từ Úc và kinh nghiệm giảng dạy tại các trường đại học.",
      en: "Professional certifications from Australia and teaching experience at universities.",
      zh: "澳大利亚专业证书和大学教学经验。", // Placeholder: Replace with actual Chinese translation
    },
  },
  {
    id: 7,
    name: "Sharen Martinez",
    avatar: teacher11,
    countryFlag: canada,
    studentCount: 370,
    totalCourse: 20,
    rating: 4.5,
    ratingCount: 137,
    subject: {
      vi: "Đàm thoại",
      en: "Conversation",
      zh: "会话", // Placeholder: Replace with actual Chinese translation
    },
    experiences: {
      vi: "5 năm",
      en: "5 years",
      zh: "5年", // Placeholder: Replace with actual Chinese translation
    },
    graduated: {
      vi: "University of British Columbia",
      en: "University of British Columbia",
      zh: "不列颠哥伦比亚大学", // Placeholder: Replace with actual Chinese translation
    },
    languages: {
      vi: "Tiếng Anh, Tiếng Bồ Đào Nha",
      en: "English, Portuguese",
      zh: "英语，葡萄牙语", // Placeholder: Replace with actual Chinese translation
    },
    about: {
      vi: "Cô Sharen là giáo viên thân thiện, chuyên luyện đàm thoại tự nhiên và phản xạ tiếng Anh hàng ngày.",
      en: "Ms. Sharen is a friendly teacher specializing in natural English conversation and daily speaking practice.",
      zh: "Sharen老师是一位友好的教师，专注于自然英语会话和日常口语练习。", // Placeholder: Replace with actual Chinese translation
    },
    certification: {
      vi: "Chứng chỉ TESOL và bằng Sư phạm ngôn ngữ tại Canalada.",
      en: "TESOL certification and a degree in language education from Canada.",
      zh: "TESOL证书和加拿大语言教育学位。", // Placeholder: Replace with actual Chinese translation
    },
  },
  {
    id: 8,
    name: "Enrico Bianchi",
    avatar: teacher12,
    countryFlag: england,
    studentCount: 290,
    totalCourse: 18,
    rating: 4.7,
    ratingCount: 125,
    subject: {
      vi: "Tiếng Anh cho trẻ em",
      en: "English for Children",
      zh: "少儿英语", // Placeholder: Replace with actual Chinese translation
    },
    experiences: {
      vi: "6 năm",
      en: "6 years",
      zh: "6年", // Placeholder: Replace with actual Chinese translation
    },
    graduated: {
      vi: "University of Leeds",
      en: "University of Leeds",
      zh: "利兹大学", // Placeholder: Replace with actual Chinese translation
    },
    languages: {
      vi: "Tiếng Anh, Tiếng Ý",
      en: "English, Italian",
      zh: "英语，意大利语", // Placeholder: Replace with actual Chinese translation
    },
    about: {
      vi: "Thầy Enrico luôn sáng tạo với lớp học thiếu nhi, sử dụng trò chơi, hình ảnh và tương tác sinh động.",
      en: "Mr. Enrico is creative in kids' classes, using games, visuals, and engaging interactions.",
      zh: "Enrico老师在儿童课堂上富有创意，使用游戏、视觉内容和引人入胜的互动。", // Placeholder: Replace with actual Chinese translation
    },
    certification: {
      vi: "Chứng chỉ giảng dạy trẻ em và bằng sư phạm ngôn ngữ Anh.",
      en: "Children's teaching certification and English pedagogy degree.",
      zh: "儿童教学证书和英语教育学位。", // Placeholder: Replace with actual Chinese translation
    },
  },
  {
    id: 9,
    name: "Thomas Carter",
    avatar: teacher13,
    countryFlag: america,
    studentCount: 520,
    totalCourse: 24,
    rating: 4.6,
    ratingCount: 170,
    subject: {
      vi: "Nói IELTS",
      en: "IELTS Speaking",
      zh: "雅思口语", // Placeholder: Replace with actual Chinese translation
    },
    experiences: {
      vi: "8 năm",
      en: "8 years",
      zh: "8年", // Placeholder: Replace with actual Chinese translation
    },
    graduated: {
      vi: "New York University",
      en: "New York University",
      zh: "纽约大学", // Placeholder: Replace with actual Chinese translation
    },
    languages: {
      vi: "Tiếng Anh",
      en: "English",
      zh: "英语", // Placeholder: Replace with actual Chinese translation
    },
    about: {
      vi: "Chuyên luyện kỹ năng nói IELTS từ 5.5 lên 7.5, hướng dẫn chiến lược và từ vựng chuyên sâu.",
      en: "Specialized in helping students improve IELTS speaking from 5.5 to 7.5 with strategic guidance and vocabulary.",
      zh: "专注于帮助学生将雅思口语从5.5提升至7.5，提供策略指导和深入词汇。", // Placeholder: Replace with actual Chinese translation
    },
    certification: {
      vi: "CELTA, IELTS Trainer Certificate từ Hội đồng Anh.",
      en: "CELTA, IELTS Trainer Certificate from the British Council.",
      zh: "CELTA、英国文化协会雅思培训师证书。", // Placeholder: Replace with actual Chinese translation
    },
  },
  {
    id: 10,
    name: "Mert Celik",
    avatar: teacher14,
    countryFlag: australia,
    studentCount: 480,
    totalCourse: 20,
    rating: 4.4,
    ratingCount: 130,
    subject: {
      vi: "Ngữ pháp",
      en: "Grammar",
      zh: "语法", // Placeholder: Replace with actual Chinese translation
    },
    experiences: {
      vi: "7 năm",
      en: "7 years",
      zh: "7年", // Placeholder: Replace with actual Chinese translation
    },
    graduated: {
      vi: "University of Queensland",
      en: "University of Queensland",
      zh: "昆士兰大学", // Placeholder: Replace with actual Chinese translation
    },
    languages: {
      vi: "Tiếng Anh, Tiếng Thổ Nhĩ Kỳ",
      en: "English, Turkish",
      zh: "英语，土耳其语", // Placeholder: Replace with actual Chinese translation
    },
    about: {
      vi: "Thầy Mert giúp học viên nắm chắc nền tảng ngữ pháp qua các ví dụ dễ hiểu và bài tập thực tế.",
      en: "Mr. Mert helps students master grammar fundamentals with clear examples and practical exercises.",
      zh: "Mert老师通过清晰的示例和实用练习帮助学生掌握语法基础。", // Placeholder: Replace with actual Chinese translation
    },
    certification: {
      vi: "TESOL, chuyên ngành ngôn ngữ học ứng dụng.",
      en: "TESOL, major in applied linguistics.",
      zh: "TESOL，应用语言学专业。", // Placeholder: Replace with actual Chinese translation
    },
  },
  {
    id: 11,
    name: "Jeri Smith",
    avatar: teacher15,
    countryFlag: canada,
    studentCount: 410,
    totalCourse: 22,
    rating: 4.7,
    ratingCount: 148,
    subject: {
      vi: "TOEFL",
      en: "TOEFL",
      zh: "托福", // Placeholder: Replace with actual Chinese translation
    },
    experiences: {
      vi: "9 năm",
      en: "9 years",
      zh: "9年", // Placeholder: Replace with actual Chinese translation
    },
    graduated: {
      vi: "McGill University",
      en: "McGill University",
      zh: "麦吉尔大学", // Placeholder: Replace with actual Chinese translation
    },
    languages: {
      vi: "Tiếng Anh, Tiếng Nhật",
      en: "English, Japanese",
      zh: "英语，日语", // Placeholder: Replace with actual Chinese translation
    },
    about: {
      vi: "Chuyên gia luyện thi TOEFL cho học viên chuẩn bị du học, dạy kỹ càng từng kỹ năng.",
      en: "TOEFL expert for study abroad students, teaching each skill thoroughly.",
      zh: "托福专家，为准备出国留学的学生教授每项技能。", // Placeholder: Replace with actual Chinese translation
    },
    certification: {
      vi: "TOEFL iBT Trainer, bằng TESL từ Canada.",
      en: "TOEFL iBT Trainer, TESL certificate from Canada.",
      zh: "托福iBT培训师，加拿大TESL证书。", // Placeholder: Replace with actual Chinese translation
    },
  },
  {
    id: 12,
    name: "Isabella Garcia",
    avatar: teacher16,
    countryFlag: england,
    studentCount: 360,
    totalCourse: 17,
    rating: 4.6,
    ratingCount: 142,
    subject: {
      vi: "Du lịch",
      en: "Travel English",
      zh: "旅游英语", // Placeholder: Replace with actual Chinese translation
    },
    experiences: {
      vi: "5 năm",
      en: "5 years",
      zh: "5年", // Placeholder: Replace with actual Chinese translation
    },
    graduated: {
      vi: "University of Manchester",
      en: "University of Manchester",
      zh: "曼彻斯特大学", // Placeholder: Replace with actual Chinese translation
    },
    languages: {
      vi: "Tiếng Anh, Tiếng Tây Ban Nha",
      en: "English, Spanish",
      zh: "英语，西班牙语", // Placeholder: Replace with actual Chinese translation
    },
    about: {
      vi: "Cô Isabella mang lại sự tự tin khi giao tiếp tiếng Anh trong các chuyến đi nước ngoài.",
      en: "Ms. Isabella builds confidence in English communication during international travel.",
      zh: "Isabella老师帮助学生在国际旅行中建立英语沟通的自信。", // Placeholder: Replace with actual Chinese translation
    },
    certification: {
      vi: "Chứng chỉ TESOL, chuyên đề tiếng Anh du lịch quốc tế.",
      en: "TESOL certification, specialized in international travel English.",
      zh: "TESOL证书，专攻国际旅游英语。", // Placeholder: Replace with actual Chinese translation
    },
  },
];
