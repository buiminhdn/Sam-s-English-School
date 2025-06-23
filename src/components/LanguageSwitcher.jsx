import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lang) => {
    if (lang !== currentLang) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <p className="font-medium cursor-pointer select-none">
      <span
        onClick={() => changeLanguage("en")}
        className={currentLang === "en" ? "underline text-blue-600" : ""}
      >
        EN
      </span>{" "}
      |{" "}
      <span
        onClick={() => changeLanguage("vi")}
        className={currentLang === "vi" ? "underline text-blue-600" : ""}
      >
        VN
      </span>
    </p>
  );
}

export default LanguageSwitcher;
