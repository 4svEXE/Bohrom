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
          <div id="about" className="scroll-mt-1 md:scroll-mt-[-80px]"><About/></div>
          <div id="our-services" className="scroll-mt-10 md:scroll-mt-[-30px]"><OurServices/></div>
          <div id="tarifs" className="scroll-mt-1 md:scroll-mt-[-80px]"><Tariffs/></div>
          <div id="why-us" className="scroll-mt-10 md:scroll-mt-24"><WhyUs/></div>
          <div id="reviews" className="scroll-mt-10 md:scroll-mt-[-80px]"><Reviews/></div>
          <div id="our-team" className="scroll-mt-4 md:scroll-mt-[-30px]"><OurTeam/></div>
          <div id="contacts" className="scroll-mt-1 md:scroll-mt-[-80px]"><Contacts/></div>
        </React.Suspense>
      </div>

      <SendPhoneButton/>
    </div>
  );
}
