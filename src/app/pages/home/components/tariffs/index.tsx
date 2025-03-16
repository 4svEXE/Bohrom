import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const Tariffs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="Tariffs flex flex-col items-center md:gap-10 gap-6">
        <div className="flex flex-col items-center gap-3 mx-5">
          <h2>{t("tariffs.title")}</h2>
          <p>{t("tariffs.p")}</p>
        </div>

        <div className="items-container">
          <div className="tariff-item animated show ">
            <img
              src="/assets/img/tariffs/1.svg"
              alt={t("tariffs.price1")}
            />
            <div className="flex flex-col gap-1 items-center justify-center">
              <p>{t("tariffs.vehicle")}</p>
              <div className="flex  gap-2 justify-center items-center">
                <s className="text-xl">700</s> <strong className="w-max">600 Kč/hodina</strong>
              </div>
            </div>
          </div>
          <div className="tariff-item animated show delay-1">
            <img
              src="/assets/img/tariffs/2.svg"
              alt={t("tariffs.vehicle") + " " + t("tariffs.loader1")}
            />
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="flex gap-1 md:flex-col items-center">
                <p>{t("tariffs.vehicle")}</p>+<p>{t("tariffs.loader1")}</p>
              </div>

              <div className="flex  gap-2 justify-center items-center">
                <s className="text-xl">800</s> <strong className="w-max">700 Kč/hodina</strong>
              </div>
            </div>
          </div>
          <div className="tariff-item animated show delay-2">
            <img
              src="/assets/img/tariffs/3.svg"
              alt={t("tariffs.vehicle") + " " + t("tariffs.loader2")}
            />
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="flex gap-1 md:flex-col items-center w-max">
                <p>{t("tariffs.vehicle")}</p>+<p>{t("tariffs.loader2")}</p>
              </div>

              <div className="flex  gap-2 justify-center items-center w-max">
                <s className="text-xl">950</s> <strong className="w-max">850 Kč/hodina</strong>
              </div>
            </div>
          </div>
          <div className="tariff-item animated show delay-3">
            <img
              src="/assets/img/tariffs/4.svg"
              alt={t("tariffs.vehicle") + " " + t("tariffs.loader3")}
            />
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="flex gap-1 md:flex-col items-center">
                <p>{t("tariffs.vehicle")}</p>+<p>{t("tariffs.loader3")}</p>
              </div>

              <div className="flex  gap-2 justify-center items-center">
                <s className="text-xl">1200</s> <strong className="w-max">1100 Kč/hodina</strong>
              </div>
            </div>
          </div>
          <div className="tariff-item animated show delay-4">
            <img
              src="/assets/img/tariffs/5.svg"
              alt={t("tariffs.kmRate")}
            />
            <div className="flex flex-col gap-1 items-center justify-center">
              <p>{t("tariffs.kmRate")}</p>
              <strong>17 Kč/km</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
