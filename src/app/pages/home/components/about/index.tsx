import React from "react";
import { useTranslation } from "react-i18next";
import useInView from "../../../../helpers/useInView";
import "./index.scss";

const About: React.FC = () => {
  const { t } = useTranslation();

  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section>
      <div className="About grid lg:grid-cols-2 gap-20">
        <div className="col-span-1 flex justify-center w-full">
          <img src="/assets/img/about/collage.png" width="100%" alt="boxes for moving" />
        </div>
        <div className="col-span-1 flex flex-col justify-center">
        <ul ref={ref as React.RefObject<HTMLUListElement>} className="list-disc list-outside pl-6 marker-custom">
            <li className={`animated ${isInView ? "show" : ""}`}>
              <strong>{t("var.companyCaps")}</strong> {t("about.p1")}
            </li>
            <li className={`animated ${isInView ? "show delay-1" : ""}`}>
              {t("about.p2")}
            </li>
            <li className={`animated ${isInView ? "show delay-2" : ""}`}>
              {t("about.p3")}
            </li>
            <li className={`animated ${isInView ? "show delay-3" : ""}`}>
              {t("about.p4")}
            </li>
            <li className={`animated ${isInView ? "show delay-4" : ""}`}>
              {t("about.p5")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
