import About from "./components/about";
import Contacts from "./components/contacts";
import Faq from "./components/faq";
import Prices from "./components/prices";
import "./index.scss";

export default function HomePage() {
  return (
    <div className="w-full">
 
      <div className="container">
        <div id="prices"><Prices/></div>
        <div id="about"><About/></div>
        <div id="faq"><Faq/></div>
        <div id="contacts"><Contacts/></div>
      </div>
    </div>
  );
}

