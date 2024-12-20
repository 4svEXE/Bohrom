import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import Button from "../../../../../../components/shared/button";

import "./index.scss";

interface FormValues {
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const SERVICE_ID =
    (import.meta.env.VITE_EMAILJS_SERVICE_ID as string) || "service_k3lakun";
  const TEMPLATE_ID =
    (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string) || "template_msxc9d5";
  const USER_ID =
    (import.meta.env.VITE_EMAILJS_USER_ID as string) || "_i9RtJHIWkF2VHusS";

  const EMAIL_LIMIT_KEY = "emailSendLimit";
  const EMAIL_LIMIT_MAX = 3;

  const validationSchema = Yup.object({
    phone: Yup.string().required(t("errors.required")),
    message: Yup.string(),
  });

  const canSendEmail = () => {
    const emailData = JSON.parse(
      window.localStorage.getItem(EMAIL_LIMIT_KEY) || "{}"
    );
    const today = new Date().toLocaleDateString();

    if (emailData.date === today) {
      return emailData.count < EMAIL_LIMIT_MAX;
    }

    return true;
  };

  const updateEmailLimit = () => {
    const emailData = JSON.parse(
      window.localStorage.getItem(EMAIL_LIMIT_KEY) || "{}"
    );
    const today = new Date().toLocaleDateString();

    if (emailData.date === today) {
      emailData.count += 1;
    } else {
      emailData.date = today;
      emailData.count = 1;
    }

    window.localStorage.setItem(EMAIL_LIMIT_KEY, JSON.stringify(emailData));
  };

  const onSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    if (!canSendEmail()) {
      toast.error(t("contactForm.limitExceeded"));
      actions.setSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: "BOHROM",
          message: values.message,
          phone: values.phone,
        },
        USER_ID
      );
      updateEmailLimit();
      actions.resetForm();
      setIsSubmitted(true);
      toast.success(t("contactForm.successMessage"));
    } catch (error) {
      toast.error(t("contactForm.errorMessage"));
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="w-full items-end">
      <Toaster
        reverseOrder={false}
        containerClassName="z-100 mb-20"
        position="bottom-center"
        toastOptions={{
          duration: 200000, 
        }}
      />

      {isSubmitted ? (
        <div className="success-message">
          <h3>{t("contactForm.successTitle")}</h3>
          <p>{t("contactForm.successDescription")}</p>
          <img className="mt-10" src="/assets/img/why-us/3.svg" alt="Excellent Customer Service"></img>
        </div>
      ) : (
        <Formik
          initialValues={{
            phone: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <form className="contact-form gap-10" onSubmit={formik.handleSubmit}>
              <h3 className="mb-8">{t("contactForm.getFeedback")}</h3>

              <div className="flex flex-col">
                <label htmlFor="phone">{t("contactForm.phoneLabel")}</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder={t("contactForm.phonePlaceholder")}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">{t("contactForm.messageLabel")}</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={t("contactForm.messagePlaceholder")}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error-message"
                />
              </div>

              <p className="info mt-2">
                {t("contactForm.infoText")} <a href="pdf/file.pdf" target="_blank">{t("contactForm.confid")}</a>
              </p>

              <Button
                text={t("contactForm.submitButton")}
                className="mt-8 w-full flex justify-center"
                type="submit"
                disabled={formik.isSubmitting}
                isLoading={formik.isSubmitting}
                onClick={() => formik.handleSubmit()}
              />
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ContactForm;
