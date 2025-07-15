import { useState } from "react";
import { Link } from "react-router-dom";
import { motion as _motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // NEW
import { ROUTE_PATH, SOCIAL_LINKS } from "../../routes/routePath";
import { logo } from "../../assets/images";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { useLocation } from "react-router-dom";

const menuItems = [
  {
    to: "/",
    labelKey: "home",
  },
  {
    to: ROUTE_PATH.PROGRAMS,
    labelKey: "courses",
    hasDropdown: true,
    dropdownItems: [
      { labelKey: "online", to: ROUTE_PATH.PROGRAMS },
      { labelKey: "offline", to: ROUTE_PATH.PROGRAMS },
      { labelKey: "oneOnOne", to: ROUTE_PATH.PROGRAMS },
      { labelKey: "group", to: ROUTE_PATH.PROGRAMS },
    ],
  },
  {
    to: ROUTE_PATH.TEACHERS,
    labelKey: "teachers",
  },
  {
    to: ROUTE_PATH.INTRO,
    labelKey: "aboutUs",
  },
  {
    to: ROUTE_PATH.NEWS,
    labelKey: "newsPage",
  },
];

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation(); // NEW
  const location = useLocation(); // 🔥 THÊM NÀY

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Bar */}
      <_motion.div
        className="bg-blue-dark"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container py-4 flex justify-between items-center text-white">
          <Link to="/">
            <_motion.img
              src={logo}
              alt="logo"
              className="h-12 sm:h-14 cursor-pointer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            />
          </Link>

          {/* Contact - Hidden on small screens */}
          <_motion.div
            className="hidden lg:flex gap-10"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <i className="fa-xl fa-brands fa-whatsapp"></i>
              <div>
                <p className="text-sm font-light">Whatsapp</p>
                <p className="text-base">+84 707-060-068</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-xl fa-thin fa-phone"></i>
              <div>
                <p className="text-sm font-light">{t("support")}</p>
                <p className="text-base">+84 707-060-068</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-xl fa-thin fa-envelope-open"></i>
              <div>
                <p className="text-sm font-light">{t("contactEmail")}</p>
                <p className="text-base">sam@samenglishschool.com</p>
              </div>
            </div>
          </_motion.div>

          {/* Language + Login */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              to={ROUTE_PATH.LOGIN}
              target="_blank"
              className="bg-white text-black py-2 px-4 rounded-sm border border-blue-dark hover:bg-blue-dark transition duration-300 hover:border-white hover:text-white"
            >
              {t("loginPage")}
            </Link>
          </div>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden text-white text-2xl hover:cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </_motion.div>

      {/* Bottom Navbar - Desktop */}
      <div className="hidden lg:block border-b border-gray-300">
        <div className="container py-4 flex justify-between items-center">
          <div className="font-medium flex gap-12">
            {menuItems.map(({ to, labelKey, hasDropdown, dropdownItems }) => (
              <div key={labelKey} className="relative group">
                <Link
                  to={to}
                  className={`flex items-center gap-2 pr-2 transition duration-200 ${
                    isActive(to) ? "text-purple-dark font-semibold" : ""
                  }`}
                >
                  {t(labelKey)}
                  {hasDropdown && (
                    <i className="fa-regular fa-angle-down mt-1"></i>
                  )}
                </Link>
                {hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="hidden group-hover:block bg-white shadow-xl rounded-md p-2 min-w-[160px]">
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.labelKey}
                          to={item.to}
                          className="block p-2 hover:bg-blue-dark hover:text-white transition duration-200 rounded"
                        >
                          {t(item.labelKey)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <a
            href={SOCIAL_LINKS.ZALO}
            target="_blank"
            className="bg-yellow-dark font-medium text-black py-3 px-5 rounded-sm hover:shadow-xl transition duration-300"
          >
            {t("tryForFree")}
          </a>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-dark text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white">
          <p className="text-lg font-semibold">{t("menu")}</p>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="hover:cursor-pointer hover:text-yellow-300"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-4 p-4">
          {menuItems.map(({ to, labelKey }) => (
            <Link
              key={labelKey}
              to={to}
              className="py-2 border-b border-white hover:text-yellow-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(labelKey)}
            </Link>
          ))}

          {/* Contact Info */}
          <div className="mt-2 space-y-4 text-sm ">
            <div>
              <p className="font-light">Whatsapp</p>
              <p className="text-base">+84 707-060-068</p>
            </div>
            <div>
              <p className="font-light">{t("support")}</p>
              <p className="text-base">+84 707-060-068</p>
            </div>
            <div>
              <p className="font-light">{t("contactEmail")}</p>
              <p className="text-base">sam@samenglishschool.com</p>
            </div>
          </div>

          {/* Login Button */}
          <Link
            to={ROUTE_PATH.LOGIN}
            className="mt-6 py-2 text-center bg-white hover:bg-yellow-dark transition-colors duration-300 text-blue-dark rounded font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("loginPage")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>

      {/* Mobile overlay background */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
