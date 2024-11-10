import React from "react";
import { useTranslation } from "react-i18next";
import useInView from "../../../../helpers/useInView";
import "./index.scss";

const OurServices: React.FC = () => {
  const { t } = useTranslation();

  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref}>
      <div className="OurServices flex flex-col md:gap-20 gap-10">
        <h2>
          {t("ourServices.title1")} <span>{t("ourServices.title2")}</span>
        </h2>

        <div className="services-grid grid grid-cols-1 xl:grid-cols-4 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`grid-item animated ${isInView ? `show delay-${i + 1}` : ""}`}>
              <h6>{t(`ourServices.heading_${i + 1}`)}</h6>
              <p>{t(`ourServices.paragraph_${i + 1}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
