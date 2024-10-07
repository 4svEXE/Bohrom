import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const WhyUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="WhyUs flex flex-col gap-20">
        <h2>
          <span>{t("whyUs.titlePart1")}</span> {t("whyUs.titlePart2")}
        </h2>

        <div className="grid grid-cols-3">
          <div className="grid-item">
            <div className="img-container">
              <img src="/assets/img/why-us/1.svg" alt={t("whyUs.alt1")} />
            </div>

            <div className="flex flex-col items-center gap-4">
              <h6>{t("whyUs.reason1.title")}</h6>
              <p>{t("whyUs.reason1.description")}</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="img-container">
              <img src="/assets/img/why-us/2.svg" alt={t("whyUs.alt2")} />
            </div>

            <div className="flex flex-col items-center gap-4">
              <h6>{t("whyUs.reason2.title")}</h6>
              <p>{t("whyUs.reason2.description")}</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="img-container">
              <img src="/assets/img/why-us/3.svg" alt={t("whyUs.alt3")} />
            </div>

            <div className="flex flex-col items-center gap-4">
              <h6>{t("whyUs.reason3.title")}</h6>
              <p>{t("whyUs.reason3.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
