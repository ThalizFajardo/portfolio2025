import { useI18n } from "../hooks/useI18n";

import languageIcon from "../assets/languages.svg";
import scrumIcon from "../assets/refresh-cw.svg";
import uiIcon from "../assets/sparkles.svg";
import resilienceIcon from "../assets/shield-check.svg";
import communicationIcon from "../assets/speech.svg";
import teamIcon from "../assets/users.svg";

export default function Skills() {
  const { tx } = useI18n();

  const SKILLS = [
    {
      group: "Front-end",
      items: [
        {
          name: "HTML5",
          level: tx("skills.level.advanced"),
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          level: tx("skills.level.advanced"),
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript (ES6+)",
          level: tx("skills.level.intermediate"),
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          level: tx("skills.level.intermediate"),
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Redux",
          level: tx("skills.level.intermediate"),
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        },
      ],
    },
    {
      group: tx("skills.tools"),
      items: [
        {
          name: "Git & GitHub",
          level: tx("skills.level.intermediate"),
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        },
        {
          name: "Vite",
          level: tx("skills.level.intermediate"),
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        },
        {
          name: "Figma",
          level: tx("skills.level.starter"),
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        },
        {
          name: "Bootstrap",
          level: tx("skills.level.advanced"),
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "WordPress",
          level: tx("skills.level.intermediate"),
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
        },
      ],
    },
    {
      group: tx("skills.soft"),
      items: [
        { name: tx("skills.softskills.english"), level: "B1", icon: languageIcon },
        { name: tx("skills.softskills.cleanUI"), level: tx("skills.softskills.strong"), icon: uiIcon },
        { name: tx("skills.softskills.communication"), level: tx("skills.softskills.strong"), icon: communicationIcon },
        { name: tx("skills.softskills.teamwork"), level:tx("skills.softskills.strong"), icon: teamIcon },
        { name: tx("skills.softskills.resilience"), level: tx("skills.softskills.strong"), icon: resilienceIcon },
        { name: tx("skills.softskills.agile"), level: tx("skills.softskills.strong"), icon: scrumIcon },
      ],
    },
  ];

  return (
    <section id="habilidades-section" className="skills">
      <div className="skills__head">
        <h2>{tx("skills.title")}</h2>
        <p>{tx("skills.sub")}</p>
      </div>

      {SKILLS.map(({ group, items }, groupIndex) => (
        <div className="skills__group" key={group}>
          <h3>{group}</h3>

          <div className={`skills-marquee ${groupIndex % 2 === 0 ? "to-left" : "to-right"}`}>
            <div className="marquee__track">
              {items.concat(items).map((s, i) => (
                <div className="skill-card" key={s.name + i}>
                  {s.icon && <img src={s.icon} alt="" aria-hidden="true" />}
                  <div className="skill-card__body">
                    <span className="skill-card__name">{s.name}</span>
                    <span className="skill-card__level">{s.level}</span>
                  </div>
                  <div className="skill-card__bar">
                    <span
                      style={{
                        width:
                          s.level === tx("skills.level.advanced") ||
                          s.level === "Advanced"
                            ? "90%"
                            : s.level === tx("skills.level.intermediate") ||
                              s.level === "Intermediate"
                            ? "70%"
                            : "50%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
