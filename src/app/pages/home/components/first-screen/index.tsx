import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import { toast } from "react-hot-toast";
import emailjs from "emailjs-com";
import TruckLoader from "../../../../components/shared/truck-loader";
import Loader from "../../../../components/shared/loader";
import "./index.scss";
import { updateStatistic } from "../../../../helpers/statisticHelper";

const FirstScreen: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  const SERVICE_ID = "service_k3lakun";
  const TEMPLATE_ID = "template_msxc9d5";
  const USER_ID = "_i9RtJHIWkF2VHusS";

  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^[0-9]{8,14}$/, t("errors.invalidPhone"))
      .required(t("errors.required")),
  });

  const handleSubmit = async (
    values: { phone: string },
    actions: FormikHelpers<{ phone: string }>,
  ) => {
    setIsClicked(true);
    setIsLoading(true);

    updateStatistic("Нова заявка на зворотній зв'язок: " + values.phone)

    setTimeout(async () => {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            phone: values.phone,
          },
          USER_ID
        );

        toast.success(t("contactForm.successMessage"));
        actions.resetForm();
        setIsClicked(false);
      } catch (error) {
        toast.error(t("contactForm.errorMessage"));
        setIsClicked(false);
      } finally {
        setIsLoading(false);
        actions.setSubmitting(false);
      }
    }, 6000);
  };

  const handleClick = () => {
    updateStatistic("Натиснуто кнопку `відправити номер`")
    //setIsClicked(true); // Встановлюємо стан на кліку
  };

  return (
    <section className="FirstScreen p-2 md:p-0">
      <div
        className={`container md:flex-row flex-col md:items-center justify-center md:justify-start m-auto gap-10`}
        id="start"
        ref={formRef}
      >
        <div className="flex flex-col md:w-[50%] gap-4">
          <h1>{t("hiro.h1")}</h1>
          <p>{t("hiro.p")}</p>
        </div>

        <hr />

        <section className="bg-[#ff000090] md:bg-[#00000080] py-10 md:px-5 max-w-[420px] w-full px-2">
          <div className="flex flex-col gap-4">
            <h4 className="md:text-center">{t("hiro.giveNumber")}</h4>
            <p className="text-center">{t("hiro.wellCallYou")}</p>

            <Formik
              initialValues={{ phone: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, handleSubmit, isValid, touched }) => (
                <form
                  className="flex flex-col "
                  onSubmit={(e) => {
                    if (!isValid && touched.phone) {
                      setIsClicked(false); // Скидаємо стан, якщо форма не валідна
                    }
                    handleSubmit(e);
                  }}
                >
                  <div className="flex relative w-full phone-input">
                    <Field
                      type="text"
                      name="phone"
                      className="w-full"
                      placeholder="123456789"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={9}
                    />

                    <button
                      type="submit"
                      className={`send-button flex justify-center items-center ${
                        isClicked ? "clicked" : ""
                      }`}
                      onClick={handleClick}
                      disabled={isSubmitting || isLoading}
                    >
                      <div className="svg-wrapper-1 flex justify-start items-center">
                        {isLoading && (
                          <div className="flex justify-center w-full">
                            <Loader />
                          </div>
                        )}

                        <div className="svg-wrapper mt-1 mr-1 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="flex w-full p-1 px-2 mt-1">
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="error-message bg-white"
                    />
                  </div>
                </form>
              )}
            </Formik>
          </div>

          {isLoading && (
            <div className="flex justify-center w-full">
              <TruckLoader />
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default FirstScreen;
