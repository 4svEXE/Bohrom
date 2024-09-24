import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const Tariffs: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <div className="Tariffs flex flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-3">
          <h2>Тарифи</h2>
          <p>Розміри будки — висота 2,3м, ширина 2,1м, довжина 4,2м</p>
          <p>Вантажопідйомність 3,5т</p>
        </div>

        <div className="items-container">
          <div className="tariff-item">
            <img src="/Bohrom/assets/img/tariffs/1.svg" alt="" />
            <div className="flex flex-col gap-4 items-center justify-center">
              <p>Транспортний автомобіль</p>
              <strong>700 Kč/год </strong>
            </div>
          </div>
          <div className="tariff-item">
            <img src="/Bohrom/assets/img/tariffs/2.svg" alt="" />
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-col items-center">
                <p>Транспортний автомобіль</p>+<p>1 вантажник</p>
              </div>
              <strong>700 Kč/год </strong>
            </div>
          </div>
          <div className="tariff-item">
            <img src="/Bohrom/assets/img/tariffs/3.svg" alt="" />
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-col items-center">
                <p>Транспортний автомобіль</p>+<p>2 вантажники</p>
              </div>
              <strong>700 Kč/год </strong>
            </div>
          </div>
          <div className="tariff-item">
            <img src="/Bohrom/assets/img/tariffs/4.svg" alt="" />
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-col items-center">
                <p>Транспортний автомобіль</p>+<p>3 вантажники</p>
              </div>
              <strong>700 Kč/год </strong>
            </div>
          </div>
          <div className="tariff-item">
            <img src="/Bohrom/assets/img/tariffs/5.svg" alt="" />
            <div className="flex flex-col gap-4 items-center justify-center">
              <p>Транспортний автомобіль</p>
              <strong>700 Kč/год </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
