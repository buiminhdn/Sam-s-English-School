import { useTranslation } from "react-i18next";

function CourseItem({ id, image, title, description, enrolled, classesTaken }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="rounded-xl bg-white shadow-md hover:shadow-2xl transition-shadow duration-500 h-full flex flex-col">
      <img
        src={image}
        alt={title}
        className="rounded-t-xl h-50 w-full object-cover"
      />

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <p className="text-2xl font-semibold">{title[lang]}</p>
          <p className="mt-2 text-base text-gray-600">{description[lang]}</p>
        </div>

        <div className="w-full border border-gray-300 border-dashed my-4"></div>

        <div className="flex items-center gap-2">
          <div className="bg-blue-light size-8 text-blue-dark rounded-md flex items-center justify-center">
            <i className="fa-regular fa-screen-users"></i>
          </div>
          <p className="text-gray-700 text-base">
            {enrolled} {t("courseitem.enrolled")}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <div className="bg-blue-light size-8 text-blue-dark rounded-md flex items-center justify-center">
            <i className="fa-regular fa-chalkboard-user"></i>
          </div>
          <p className="text-gray-700 text-base">
            {classesTaken} {t("courseitem.classesTaken")}
          </p>
        </div>

        <a
          href={`/Programs/${id}`}
          target="_blank"
          className="block text-base text-center border-2 border-blue-dark font-medium bg-blue-dark text-white p-2.5 w-full rounded-lg mt-6 hover:text-blue-dark hover:bg-blue-light transition-colors duration-300"
        >
          {t("courseitem.joinNow")}
        </a>
      </div>
    </div>
  );
}

export default CourseItem;
