import i18next from "i18next";

const localesHelper = { toggleLanguage: () => {} };

// const getLanguageFromStorageOrBrowser = () => {
//   const language = window.localStorage.getItem("i18nextLng");

//   if (language) return language;

//   const browserLanguage = navigator.language.split("-")[0];
  
//   if (["en", "cz", "uk", "de", "vi", "pl"].includes(browserLanguage)) {
//     return browserLanguage;
//   }

//   return "cz";
// };

const initialLanguage = "cz"//getLanguageFromStorageOrBrowser();

i18next.changeLanguage(initialLanguage);

localesHelper.toggleLanguage = () => {
  const currentLanguage = i18next.language;
  let newLanguage;

  if (currentLanguage === "en") {
    newLanguage = "cz";
  } else if (currentLanguage === "cz") {
    newLanguage = "en";
  } else if (currentLanguage === "uk") {
    newLanguage = "de";
  } else if (currentLanguage === "de") {
    newLanguage = "pl";
  } else if (currentLanguage === "pl") {
    newLanguage = "vi";
  } else {
    newLanguage = "uk";
  }

  window.localStorage.setItem("i18nextLng", newLanguage);
  i18next.changeLanguage(newLanguage);
};

export default localesHelper;
