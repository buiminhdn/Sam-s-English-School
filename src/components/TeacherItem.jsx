import React from "react";
import { SOCIAL_LINKS } from "../routes/routePath";
import { useTranslation } from "react-i18next";

function TeacherItem({ avatar, name, countryFlag, subject, studentCount }) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language || "vi";

  return (
    <div className="rounded-xl bg-white shadow-md hover:shadow-2xl transition-shadow duration-500">
      <img
        src={avatar}
        alt={name}
        className="rounded-t-xl h-70 w-70 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-center items-center gap-3 mt-2">
          <p className="text-2xl font-medium">{name}</p>
          <img
            src={countryFlag}
            alt={`${name}'s flag`}
            className="size-5 object-cover rounded-full border border-gray-400"
          />
        </div>
        <div className="flex justify-evenly gap-5 mt-4 text-gray-500">
          <div className="flex items-center gap-3">
            <i className="fa-lg fa-light fa-book"></i>
            <p className="">{subject[lang]}</p>
          </div>
          <div className="flex items-center gap-3">
            <i className="fa-lg fa-light fa-user-group"></i>
            <p className="">
              {studentCount} {t("teacheritem.students")}
            </p>
          </div>
        </div>
        <a
          href={SOCIAL_LINKS.ZALO}
          target="_blank"
          className=" flex items-center gap-3 justify-center border-2 border-yellow-dark bg-yellow-light p-2.5 w-full rounded-lg mt-6 text-yellow-darker font-medium hover:bg-yellow-darker hover:border-yellow-dark hover:text-white transition-colors duration-300"
        >
          <p>{t("teacheritem.bookLesson")}</p>
          <i className="fa-regular fa-chevrons-right"></i>
        </a>
      </div>
    </div>
  );
}

export default TeacherItem;
