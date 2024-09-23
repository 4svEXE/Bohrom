import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../widgets/lang-switcher";
import "./index.scss";

interface SidebarProps {
  toggleTheme: () => void;
}

const Header: React.FC<SidebarProps> = ({ toggleTheme }) => {
  const { t } = useTranslation();

  const [activeNav, setActiveNav] = useState<boolean>(false);

  const language = window.localStorage.getItem("i18nextLng") ?? "en";

  const [isShowMenu, setShowMenu] = useState<boolean>(false);

  const toggleNav = () => {
    setActiveNav((prev) => !prev);
  };

  const availableLanguages = [
    { code: "en", name: "EN" },
    { code: "uk", name: "UA" },
  ];

  return (
    <div className="container header-container">
      <header className={`Header ${activeNav ? "active" : ""}`}>
        {isShowMenu && (
          <div id="menuToggle" className="block lg:hidden">
            <input
              id="checkbox"
              type="checkbox"
              onChange={toggleNav}
              checked={activeNav}
            />
            <label className="toggle" htmlFor="checkbox">
              <div className="bar bar--top"></div>
              <div className="bar bar--middle"></div>
              <div className="bar bar--bottom"></div>
            </label>
          </div>
        )}

        <img src="/Bohrom/assets/logo-white.svg" alt="Logo" />

        <div className="flex items-center gap-12">
          <nav>
            <ul className="navigation">
              <li>
                <a href="">Про нас</a>
              </li>
              <li>
                <a href="">Послуги</a>
              </li>
              <li>
                <a href="">Ціни</a>
              </li>
              <li>
                <a href="">Контакти</a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-6">
            <LanguageSwitcher
              currentLanguage={language}
              availableLanguages={availableLanguages}
            />
          </div>

          <ul>
            <li>
              <a type="tel" href={`tel:${t("var.tel")}`}>
              <img src="/Bohrom/assets/icons/phone-outgoing.svg" alt="call" />
              {t("var.tel")}
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
