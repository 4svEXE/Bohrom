import About from "./components/about";
import Contacts from "./components/contacts";
import Faq from "./components/faq";
import FirstScreen from "./components/first-screen";
import Prices from "./components/prices";
import "./index.scss";

export default function HomePage() {
  return (
    <div className="w-full">
      <div id="first-screen"><FirstScreen/></div>

      <div className="container m-auto">
        <div id="about"><About/></div>
        <div id="faq"><Faq/></div>
        <div id="contacts"><Contacts/></div>
        <div id="prices"><Prices/></div>
      </div>
    </div>
  );
}

