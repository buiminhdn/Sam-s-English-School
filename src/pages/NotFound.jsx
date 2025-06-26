import React from "react";
import { SOCIAL_LINKS } from "../routes/routePath";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-5xl font-semibold text-blue-dark">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          {t("notFound.title")}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          {t("notFound.description")}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-blue-dark px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-light hover:text-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t("notFound.backHome")}
          </a>
          <a
            href={SOCIAL_LINKS.ZALO}
            className="text-sm font-semibold text-gray-900"
          >
            {t("notFound.contact")} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
