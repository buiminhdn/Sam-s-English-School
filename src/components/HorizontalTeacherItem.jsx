import { SOCIAL_LINKS } from "../routes/routePath";

function HorizontalTeacherItem({
  avatar,
  name,
  countryFlag,
  description,
  subject,
  students,
}) {
  return (
    <div className="p-4 rounded-xl border border-gray-300 bg-white hover:shadow-2xl transition-shadow duration-500 flex gap-5">
      <img src={avatar} alt="" className="h-70 rounded-xl object-cover" />
      <div className="px-2">
        <div className="flex items-center gap-3 mt-2">
          <p className="text-2xl font-medium">{name}</p>
          <img
            src={countryFlag}
            alt="flag"
            className="size-5 object-cover rounded-full"
          />
        </div>
        <p className="text-gray-500 mt-3 text-base">{description}</p>
        <div className="flex  gap-5 mt-4 text-gray-500">
          <div className="flex items-center gap-3">
            <i className="fa-lg fa-light fa-book"></i>
            <p className="text-base">{subject}</p>
          </div>
          <div className="flex items-center gap-3">
            <i className="fa-lg fa-light fa-user-group"></i>
            <p className="text-base">{students} Học viên</p>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <a
            href={SOCIAL_LINKS.ZALO}
            target="_blank"
            className="bg-blue-light text-blue-dark hover:bg-blue-dark hover:text-white hover:shadow-lg transition-all duration-500 font-medium py-2 px-4 rounded-lg"
          >
            Đặt lịch học
          </a>
          <a
            href={SOCIAL_LINKS.ZALO}
            target="_blank"
            className="bg-blue-dark text-white hover:bg-blue-light hover:text-blue-dark hover:shadow-lg transition-all duration-500 font-medium py-2 px-4 rounded-lg"
          >
            Liên hệ ngay
          </a>
        </div>
      </div>
    </div>
  );
}

export default HorizontalTeacherItem;
