import ContactForm from "./components/contact-form";
import "./index.scss";
import { useTranslation } from "react-i18next"; // Імпорт функції локалізації

const Contacts = () => {
  const { t } = useTranslation(); // Виклик функції локалізації

  return (
    <section className="Contacts">
      <img
        className="map"
        src="/assets/img/Map.svg"
        alt={t("footer.altLogo")}
      />

      <div className="md:grid-cols-2 grid grid-cols-1 gap-20">
        <div className="col-span-1 flex flex-col items-center">
          <div className="col-span-1 flex flex-col gap-10">
            <h2 className="w-full md:text-start text-center mb-4">{t("footer.contacts")}</h2>
            <div className="flex flex-col gap-2">
              <h6>{t("footer.email")}</h6>
              <a href={`mailto:${t("var.email")}`}>{t("var.email")}</a>
            </div>

            <div className="flex flex-col gap-2">
              <h6>{t("workingHours")}</h6>
              <p>
                {t("workingHoursText")} — <span>{t("workingHours24")}</span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h6>{t("footer.phone")}</h6>
              <a href={`tel:${t("var.tel")}`}>{t("var.tel")}</a>
            </div>

            <div className="flex flex-col gap-2">
              <h6>Bohdan Ladomyriak</h6>
              <h6>IČO: 22060910</h6>
            </div>
            <div className="flex flex-col gap-2">
              <h6>Roman Kondratiev</h6>
              <h6>IČO: 22058834</h6>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-end md:w-[75%]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
