import { useTranslation } from "react-i18next";
import { useState } from "react";

const languages = [
  { code: "en", label: "English", icon: "🇬🇧" },
  { code: "vi", label: "Tiếng Việt", icon: "🇻🇳" },
  { code: "zh", label: "中文", icon: "🇨🇳" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [open, setOpen] = useState(false);

  const selected =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  const handleChange = (lang) => {
    i18n.changeLanguage(lang.code);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-between w-full lg:w-fit items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-sm shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex gap-3">
          <span>{selected.icon}</span>
          <span>{selected.label}</span>
        </div>
        <svg
          className="w-4 h-4 ml-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleChange(lang)}
                className={`${
                  currentLang === lang.code ? "bg-gray-100" : ""
                } w-full px-4 py-2 text-left text-sm flex text-black items-center gap-2 hover:bg-gray-100`}
              >
                <span>{lang.icon}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
