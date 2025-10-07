import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import useI18 from "../i18n";

// API: const { t, lang, toggle, change, tx } = useI18n();
export function useI18n(ns) {
  const { t, i18n: i, ready } = useTranslation(ns); 

  const lang = i.language;

 
  const tx = (keyOrKeys, options) => {
    if (Array.isArray(keyOrKeys)) {
      for (const k of keyOrKeys) {
        const val = i.exists(k) ? t(k, options) : null;
        if (val) return val;
      }
      return keyOrKeys[0]; // si nada existe, devuelve la primera clave
    }
    return t(keyOrKeys, options);
  };

  const toggle = () => i.changeLanguage(lang === "es" ? "en" : "es");
  const change = (lng) => i.changeLanguage(lng);

  
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  
  return useMemo(() => ({ t, tx, lang, toggle, change, ready }), [t, tx, lang, ready]);
}
