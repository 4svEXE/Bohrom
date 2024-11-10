import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const availableLanguages = [
    { code: "cz", name: "CZ" },
    { code: "en", name: "EN" },
    { code: "de", name: "DE" },
    { code: "uk", name: "UA" },
    { code: "pl", name: "PL" },
    { code: "vi", name: "VI" },
  ];

  // Отримуємо мову з localStorage або використовуємо чеську за замовчуванням
  const language = window.localStorage.getItem("i18nextLng") ?? "cz";

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
    window.localStorage.setItem("i18nextLng", newLanguage); // Зберігаємо вибір мови
  };

  return (
    <div className="lg:flex lg:justify-end text-white">
      <div className="language-switcher">
        <select
          className="language-button bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
          value={language}
          onChange={handleLanguageChange}
        >
          {availableLanguages.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
