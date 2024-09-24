import { useTranslation } from "react-i18next";
import ContactForm from "./components/contact-form";
import "./index.scss";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <section className="Contacts">
      <img
        className="map"
        src="/Bohrom/assets/img/Map.svg"
        alt="boxes for moving"
      />

      <div className="md:grid-cols-2 grid grid-cols-1  gap-20">
        <div className="col-span-1 flex flex-col items-center">
          <div className="col-span-1 flex flex-col gap-10">
            <h2 className="w-full md:text-start text-center mb-4">Контакти</h2>
            <div className="flex flex-col gap-2">
              <h6>Email</h6>
              <a href="mailto:bohromstehovani@gmail.com">
                bohromstehovani@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h6>Графік роботи</h6>
              <p>
                Ми працюємо цілодобово, без вихідних — <span>24/7</span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h6>Телефон</h6>
              <a href="tel:+420 775 473 171">+420 775 473 171</a>
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
