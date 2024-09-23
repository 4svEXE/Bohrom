import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const About: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <div className="About grid grid-cols-2 gap-20">
        <div className="col-span-1">
          <img
            src="/Bohrom/assets/img/about/collage.png"
            alt="boxes for moving"
          />
        </div>
        <div className="col-span-1 flex flex-col justify-center">
          <p>
            <strong>BOHROM</strong> — це команда професіоналів, які допоможуть
            вам здійснити будь-який переїзд швидко, безпечно і за доступною
            ціною.
          </p><br/>

          <p>
            Ми займаємося квартирними, офісними переїздами та
            вантажоперевезеннями, використовуючи сучасне обладнання та надійний
            транспорт.
          </p><br/>

          <p>
            Працюємо по Ліберецькому краю та по всій Чехії. Наша вантажівка
            Iveco Daily (3,5 т) дозволяє нам працювати з будь-якими видами
            вантажів, забезпечуючи збереження ваших речей під час
            транспортування.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
