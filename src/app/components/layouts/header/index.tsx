import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../widgets/lang-switcher";
import "./index.scss";
import { updateStatistic } from "../../../helpers/statisticHelper";

interface SidebarProps {
  toggleTheme: () => void;
}

const Header: React.FC<SidebarProps> = () => {
  const { t } = useTranslation();
  const [activeNav, setActiveNav] = useState<boolean>(false);
  const language = window.localStorage.getItem("i18nextLng") ?? "en";
  const [isShowMenu, setShowMenu] = useState<boolean>(false);

  const toggleNav = () => {
    setShowMenu((prev) => !prev);
    setActiveNav((prev) => !prev);
  };

  const availableLanguages = [
    { code: "en", name: "EN" },
    { code: "cz", name: "CZ" },
  ];

  return (
    <div className="container header-container" onLoad={()=> updateStatistic("Phage loadet")}>
      <header className={`Header ${activeNav ? "active" : ""}`}>
        <img src="/Bohrom/assets/logo-white.svg" alt="Logo" className="logo" />

        <nav className={`navigation ${isShowMenu ? "show-menu" : ""}`}>
          <ul onClick={toggleNav}>
            <li>
              <a href={t("nav.links.about")}>{t("footer.aboutUs")}</a>
            </li>
            <li>
              <a href={t("nav.links.services")}>{t("footer.services")}</a>
            </li>
            <li>
              <a href={t("nav.links.tarifs")}>{t("footer.tarifs")}</a>
            </li>
            <li>
              <a href={t("nav.links.contacts")}>{t("footer.contacts")}</a>
            </li>
            <li className="md:mt-0 mt-10 block md:hidden">
              <LanguageSwitcher
                currentLanguage={language}
                availableLanguages={availableLanguages}
              />
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-12 z-50">
          <li className="md:mt-0 mt-10 md:block hidden">
            <LanguageSwitcher
              currentLanguage={language}
              availableLanguages={availableLanguages}
            />
          </li>
          <ul className="phone">
            <li>
              <a type="tel" href={`tel:${t("var.tel")}`} onClick={()=> updateStatistic("Phone clicked")}>
                <img src="/Bohrom/assets/icons/phone-outgoing.svg" alt="call" />
                {t("var.tel")}
              </a>
            </li>
          </ul>
        </div>

        <div className="burger-container">
          <label className="burger" htmlFor="burger">
            <input
              type="checkbox"
              id="burger"
              onChange={toggleNav}
              checked={activeNav}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </header>
    </div>
  );
};

export default Header;
