import React, { useEffect, useState } from "react";
import cvFile from "../../assets/files/Thaliz_Fajardo_CV.pdf";



const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

 const handleDownload = () => {
  const a = document.createElement("a");
  a.href = cvFile;
  a.download = "Thaliz_Fajardo_CV.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
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
          <a href="#casa-section">Home</a>
        </li>
        <li className="nav-item">
          <a href="#acerca-section">About me</a>
        </li>
        <li className="nav-item">
          <a href="#habilidades-section">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#portafolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#contacto-section">Contact</a>
        </li>
      </ul>

      {/* Botones adicionales */}
      <div className="nav_btns">
        <button onClick={handleDownload} className="logoDownloadCV">
          Download CV
        </button>
        <div className="logo">{/* <i>{lnIcon}</i> */}</div>
      </div>
    </nav>
  );
};

export default Menu;
