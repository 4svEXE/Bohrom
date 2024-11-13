import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/shared/button";
import "./index.scss";

const FirstScreen: React.FC = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    const contactsSection = document.getElementById("contact-form");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="FirstScreen p-2 md:p-0">
      <div className="container m-auto">
        <div className="flex flex-col w-[50%] gap-4">
          <h1 className="animated show delay-1">{t("hiro.h1")}</h1>
          <p className="animated show delay-2">{t("hiro.p")}</p>
        </div>

        <Button
          onClick={handleClick}
          text={t("hiro.buttonText")}
          className="mt-8 w-full md:w-auto animated show delay-3"
        />
      </div>
    </section>
  );
};

export default FirstScreen;
