import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../widgets/lang-switcher";
import "./index.scss";

interface SidebarProps {}

const Footer: React.FC<SidebarProps> = () => {
  const { t } = useTranslation();

  return (
    <footer className="Footer">
      <div className="container m-auto grid md:grid-cols-4 grid-cols-1 gap-10">
        <a href="#start"><img src="/Bohrom/assets/logo-black.svg" alt="Logo" /></a>

        <div className="flex flex-col gap-2">
          <h6>Навігація</h6>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#about">Про нас</a>
            </li>
            <li>
              <a href="#our-services">Послуги</a>
            </li>
            <li>
              <a href="#tarifs">Ціни</a>
            </li>
            <li>
              <a href="#contacts">Контакти</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h6>Email</h6>
          <ul>
            <li>
              <a href="mailto:bohromstehovani@gmail.com">
                bohromstehovani@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h6>Телефон</h6>
          <ul>
            <li>
              <a href="tel:+420775473171">+420 775 473 171</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
