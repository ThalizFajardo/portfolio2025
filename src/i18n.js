import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import es from "./locales/es/common.json";
import { Interpolation } from "three/examples/jsm/libs/tween.module.js";

const saved = localStorage.getItem("lng");
const browser = navigator.language?.startsWith("es") ? "es" : "en";
const initial = saved || browser || "en";

i18next.use(initReactI18next).init({
  resources: { en: { translation: en }, es: { translation: es } },
  lng: initial,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

document.documentElement.setAttribute("lang",initial);
i18next.on("languageChanged",(lng) =>{
    document.documentElement.setAttribute("lang",lng);
    localStorage.setItem("lng",lng);
});

export default i18next;