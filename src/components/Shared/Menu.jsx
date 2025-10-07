import React, { useEffect, useState } from "react";
import cvFilees from "../../assets/files/Thaliz_Fajardo_CVes.pdf";
import cvFileen from "../../assets/files/Thaliz_Fajardo_CVen.pdf";
import { useI18n } from "../../hooks/useI18n";

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  const { tx, lang, toggle } = useI18n();

  const [isLigth, setIsLigth] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isLigth);
    localStorage.setItem("theme", isLigth ? "light" : "dark");
  }, [isLigth]);

  const toggleTheme = () => {
    setIsLigth(!isLigth);
  };

  const handleDownload = () => {
    const a = document.createElement("a");

    a.href = lang === "es" ? cvFilees : cvFileen;
    a.download =
      lang === "es" ? "Thaliz_Fajardo_CVes.pdf" : "Thaliz_Fajardo_CVen.pdf";

    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Menú hamburguesa */}
      <input type="checkbox" id="menu-hamburguesa" className="menu-toggle" />
      <label htmlFor="menu-hamburguesa" className="menu-icon">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII="
          alt="menu"
        />
      </label>

      {/* Lista de navegación */}
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#casa-section">{tx("nav.home")}</a>
        </li>
        <li className="nav-item">
          <a href="#acerca-section">{tx("nav.about")}</a>
        </li>
        <li className="nav-item">
          <a href="#habilidades-section">{tx("nav.skills")}</a>
        </li>
        <li className="nav-item">
          <a href="#portafolio">{tx("nav.projects")}</a>
        </li>
        <li className="nav-item">
          <a href="#contacto-section">{tx("nav.contact")}</a>
        </li>
      </ul>

      {/* Botones adicionales */}
      <div className="nav_btns">
        <button onClick={toggleTheme} aria-label="Change theme">
          {isLigth ? "☀️" : "🌙"}
        </button>

        <button onClick={toggle} aria-label="Change language">
          🌐 {lang.toLocaleUpperCase()}
        </button>

        <button onClick={handleDownload} className="logoDownloadCV">
          {tx("nav.dwcv.btn")}
        </button>
        <div className="logo">{/* <i>{lnIcon}</i> */}</div>
      </div>
    </nav>
  );
};

export default Menu;
