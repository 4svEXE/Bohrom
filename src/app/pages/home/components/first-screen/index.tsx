import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/shared/button";
import { svg } from "../../../../svg";

import "./index.scss";

const FirstScreen: React.FC = () => {
  const { t } = useTranslation();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleClick = () => {
    const contactsSection = document.getElementById("contact-form");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="FirstScreen p-2 md:p-0">
      <div className={`video-container ${videoLoaded ? "loaded" : ""}`}>
        {!videoLoaded && (
          <img
            src="/assets/img/first-screen-bg.png"
            alt="Background"
            className="video-placeholder"
          />
        )}
        <video
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline
          disableRemotePlayback
          poster="/assets/img/first-screen-bg.png"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/assets/hiro.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Контент */}
      <div className="container m-auto">
        <div className="flex flex-col w-[50%] gap-4">
          <h1 className="animated show delay-1">{t("hiro.h1")}</h1>
          <p className="animated show delay-2">
            Vaše levné stěhování v Libereckém kraji
          </p>
        </div>

        <Button
          onClick={handleClick}
          text={t("hiro.buttonText")}
          icon={svg.truck}
          className="mt-8 w-full md:w-auto animated show delay-3"
        />
      </div>
    </section>
  );
};

export default FirstScreen;
