import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/shared/button";
import "./index.scss";

const FirstScreen: React.FC = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <section className="FirstScreen">
      <div className="container m-auto">
        <div className="flex flex-col w-[50%]">
          <h1>Професійні перевезення для вашого комфорту</h1>
          <p>Безпечні перевезення меблів та вантажів по всій Чехії</p>
        </div>

        <Button
          onClick={handleClick}
          text="Замовити доставку"
          className="mt-8"
        />
      </div>
    </section>
  );
};

export default FirstScreen;
