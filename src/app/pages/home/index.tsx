import About from "./components/about";
import Contacts from "./components/contacts";
import FirstScreen from "./components/first-screen";
import OurServices from "./components/our-services";
import OurTeam from "./components/our-team";
import Prices from "./components/prices";
import Tariffs from "./components/tariffs";
import WhyUs from "./components/why-choose-us";
import "./index.scss";

export default function HomePage() {
  return (
    <div className="w-full">
      <div id="first-screen"><FirstScreen/></div>

      <div className="container m-auto">
        <div id="about"><About/></div>
        <div id="our-services"><OurServices/></div>
        <div id="tarifs"><Tariffs/></div>
        <div id="why-us"><WhyUs/></div>
        <div id="our-team"><OurTeam/></div>
        <div id="contacts"><Contacts/></div>

      </div>

      {/* футер */}
    </div>
  );
}

