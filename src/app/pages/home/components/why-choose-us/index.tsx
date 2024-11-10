import React from "react";
import { useTranslation } from "react-i18next";
import useInView from "../../../../helpers/useInView";
import "./index.scss";

const WhyUs: React.FC = () => {
  const { t } = useTranslation();
  
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref}>
      <div className="WhyUs flex flex-col gap-20">
        <h2 >
          <span>{t("whyUs.titlePart1")}</span> {t("whyUs.titlePart2")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((num, index) => (
            <div key={num} className={`grid-item animated ${isInView ? `show delay-${index + 1}` : ""}`}>
              <div className="img-container">
                <img src={`/assets/img/why-us/${num}.svg`} alt={t(`whyUs.alt${num}`)} />
              </div>

              <div className="flex flex-col items-center gap-4">
                <h6>{t(`whyUs.reason${num}.title`)}</h6>
                <p>{t(`whyUs.reason${num}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
