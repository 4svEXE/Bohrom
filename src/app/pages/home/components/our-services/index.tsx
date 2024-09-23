import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const OurServices: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <div className="OurServices flex flex-col gap-20">
        <h2>
          Наші <span>послуги</span>
        </h2>

        <div className="services-grid">
          <div className="grid-item">
            <h6>Квартирні та офісні переїзди</h6>
            <p>
              Професійний переїзд вашого дому чи офісу з увагою до деталей і
              безпеки.
            </p>
          </div>
          <div className="grid-item">
            <h6>Квартирні та офісні переїзди</h6>
            <p>
              Професійний переїзд вашого дому чи офісу з увагою до деталей і
              безпеки.
            </p>
          </div>
          <div className="grid-item">
            <h6>Квартирні та офісні переїзди</h6>
            <p>
              Професійний переїзд вашого дому чи офісу з увагою до деталей і
              безпеки.
            </p>
          </div>
          <div className="grid-item">
            <h6>Квартирні та офісні переїзди</h6>
            <p>
              Професійний переїзд вашого дому чи офісу з увагою до деталей і
              безпеки.
            </p>
          </div>
          <div className="grid-item">
            <h6>Квартирні та офісні переїзди</h6>
            <p>
              Професійний переїзд вашого дому чи офісу з увагою до деталей і
              безпеки.
            </p>
          </div>
          <div className="grid-item">
            <h6>Квартирні та офісні переїзди</h6>
            <p>
              Професійний переїзд вашого дому чи офісу з увагою до деталей і
              безпеки.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
