import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import FirstScreen from "./components/first-screen";
import "./index.scss";
import SendPhoneButton from "../../components/shared/sendPhoneButton/SendPhoneButton";

// Ліниве завантаження компонентів
const About = React.lazy(() => import("./components/about"));
const Contacts = React.lazy(() => import("./components/contacts"));
const OurServices = React.lazy(() => import("./components/our-services"));
const OurTeam = React.lazy(() => import("./components/our-team"));
const Tariffs = React.lazy(() => import("./components/tariffs"));
const WhyUs = React.lazy(() => import("./components/why-choose-us"));
const Reviews = React.lazy(() => import("./components/reviews"));

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Helmet>
        <title>{t("site-title")} </title>
      </Helmet>

      <div id="first-screen"><FirstScreen/></div>

      <div className="container m-auto">
        <React.Suspense fallback={<div>Loading...</div>}>
          <div id="about"><About/></div>
          <div id="our-services"><OurServices/></div>
          <div id="tarifs"><Tariffs/></div>
          <div id="why-us"><WhyUs/></div>
          <div id="our-team"><OurTeam/></div>
          <div id="reviews"><Reviews/></div>
          <div id="contacts"><Contacts/></div>
        </React.Suspense>
      </div>

      <SendPhoneButton/>
    </div>
  );
}
