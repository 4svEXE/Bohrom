import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const WhyUs: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <div className="WhyUs flex flex-col gap-20">
        <h2>
          <span>Чому</span> обирають нас
        </h2>

        <div className="grid grid-cols-3">
          <div className="grid-item">
            <div className="img-container">
              <img src="/Bohrom/assets/img/why-us/1.svg" alt="" />
            </div>

            <div className="flex flex-col items-center gap-4">
              <h6>Квартирні та офісні переїзди</h6>
              <p>
                Професійний переїзд вашого дому чи офісу з увагою до деталей і
                безпеки.
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="img-container">
              <img src="/Bohrom/assets/img/why-us/2.svg" alt="" />
            </div>

            <div className="flex flex-col items-center gap-4">
              <h6>Конкурентноспроможні ціни</h6>
              <p>Доступні тарифи та якість обслуговування.</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="img-container">
              <img src="/Bohrom/assets/img/why-us/3.svg" alt="" />
            </div>

            <div className="flex flex-col items-center gap-4">
              <h6>Відмінне обслуговування клієнтів</h6>
              <p>
                Наша команда завжди готова допомогти вам у будь-який час,
                вирішуючи будь-які питання або проблеми.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
