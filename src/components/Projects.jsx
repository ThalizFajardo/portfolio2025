import { Key } from "lucide-react";
import React, { useState } from "react";
import quotesImage from "../assets/pics/quotesAppImg.jpeg"
import rymIcon from "../assets/pics/rymfoto.jpeg"
import ecommerceIcon from "../assets/pics/vanillaEcomerce.jpeg"
import eweaterImage from "../assets/pics/ewaterAppImg.jpeg"

const Projects = () => {
  const PROJECTS = {
    frontend: [
      { title: "Quotes App", img: quotesImage, url: "https://6328f61f39c047032d6c4499--chic-bubblegum-6e9cad.netlify.app/" },
      { title: "Ecommerce", img: ecommerceIcon, url: "https://63445d92e8139737d3edd518--eclectic-jelly-0adca9.netlify.app/" },
      { title: "Rickymorty ", img: rymIcon, url: "https://6342528143c38a4ee6073b74--neon-scone-747a15.netlify.app/" },
      { title: "Rickymorty ", img: eweaterImage, url: "https://63163593b38a9513e522c938--spontaneous-strudel-0306bb.netlify.app/" },
    ],
    backend: [],
  };

  const [tab, setTab] = useState("frontend");

  const tabs = [
    { key: "frontend", label: "Front‑end" },
    { key: "backend", label: "Back‑end" },
  ];

  const items = PROJECTS[tab] ?? [];

  return (
    <section className="projects-section" id="portafolio">
      <header className="projects-title">
        <h3>Projects</h3>
        <p>
          Estos son algunos proyectos que he desarrollado.
        </p>
      </header>

      {/* Tabs */}
      <div className="tabs" role="tablist" aria-label="Categorias de proyectos">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={tab === t.key}
            className={`tab ${tab === t.key ? "tab--active" : ""}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <div className="projects-grid">
        {items.map((card) => (
          <a
            className="project-card"
            key={card.title}
            href={card.url}
            target="_blank"
            rel="noreferrer"
          >
            <img src={card.img} alt={card.title} />
            <div className="project-card__info">
              <h4>{card.title}</h4>
            </div>
          </a>
        ))}
        {items.length === 0 && (
          <div className="projects-empty">Cooming soon ✨</div>
        )}
      </div>
    </section>
  );
};

export default Projects;
