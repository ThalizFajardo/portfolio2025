import React, { useEffect, useState } from "react";

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll",handleScroll);

      // cleanup
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
          <a href="#acerca-section">Acerca de mí</a>
        </li>
        <li className="nav-item">
          <a href="#habilidades-section">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#portafolio">Portafolio</a>
        </li>
        <li className="nav-item">
          <a href="#contacto-section">Contacto</a>
        </li>
      </ul>

      {/* Botones adicionales */}
      <div className="nav_btns">
        <div className="logoDownloadCV">
          <p>Download CV</p>
        </div>
        <div className="logo">
          <i className="fa-brands fa-square-linkedin"></i>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
