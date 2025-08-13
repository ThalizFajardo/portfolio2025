import { Key } from "lucide-react";
import React, { useState } from "react";

const Projects = () => {
  const PROJECTS = {
    frontend: [
      { title: "Quotes App", img: "img/quotes.png", url: "htpps://..." },
      { title: "Ecommerce", img: "img/quotes.png", url: "htpps://..." },
      { title: "Rickymorty api", img: "img/quotes.png", url: "htpps://..." },
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
    <section className="projects-section" id="projects">
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
