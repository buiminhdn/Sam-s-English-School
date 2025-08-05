import { useTranslation } from "react-i18next";
import { SOCIAL_LINKS } from "../routes/routePath";

function HorizontalTeacherItem({
  avatar,
  name,
  countryFlag,
  description,
  subjects,
  students,
  teacherHours,
}) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "vi";

  return (
    <div className="p-4 rounded-xl border border-gray-300 bg-white hover:shadow-2xl transition-shadow duration-500 flex flex-col md:flex-row gap-x-5">
      {/* Avatar */}
      <img
        src={avatar}
        alt=""
        className="w-full md:w-70 h-60 md:h-70 rounded-xl object-cover"
      />

      {/* Info */}
      <div className="px-2 mt-5 md:mt-0 flex-1">
        {/* Name + Flag */}
        <div className="flex items-center gap-3">
          <p className="text-2xl font-medium">{name}</p>
          <img
            src={countryFlag}
            alt="flag"
            className="size-5 object-cover rounded-full"
          />
        </div>

        {/* Description */}
        <p className="text-gray-500 mt-3 text-base">
          {description[lang] || "No description available"}
        </p>

        {/* Subject & Students */}
        <div className="flex flex-wrap flex-col sm:flex-row gap-3 sm:gap-5 mt-4 text-gray-500">
          <div className="flex items-center gap-3">
            <i className="fa-lg fa-light fa-book"></i>
            <p className="text-base">
              {subjects[lang]?.join(", ") || "No subjects available"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <i className="fa-lg fa-light fa-user-group"></i>
            <p className="text-base">
              {students} {t("teacheritem.students")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <i className="fa-lg fa-light fa-clock"></i>
            <p className="text-base">
              {teacherHours} {t("teachingHours")}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row gap-3 w-full">
          <a
            href={SOCIAL_LINKS.ZALO}
            target="_blank"
            className="bg-blue-light text-blue-dark hover:bg-blue-dark hover:text-white hover:shadow-lg transition-all duration-500 font-medium py-3 md:py-2 px-4 rounded-lg text-center"
          >
            {t("teacheritem.bookLesson")}
          </a>
          <a
            href={SOCIAL_LINKS.ZALO}
            target="_blank"
            className="bg-blue-dark text-white hover:bg-blue-light hover:text-blue-dark hover:shadow-lg transition-all duration-500 font-medium py-3 md:py-2 px-4 rounded-lg text-center"
          >
            {t("teacheritem.contactNow")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default HorizontalTeacherItem;
