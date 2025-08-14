import languageIcon from "../assets/languages.svg"
import scrumIcom from "../assets/refresh-cw.svg"
import uiIcon from "../assets/sparkles.svg"
import resilenceIcon from "../assets/shield-check.svg"
import comunicacionIcon from "../assets/speech.svg"
import teamIcon from "../assets/users.svg"


const SKILLS = [
  {
    group: "Front-end",
    items: [
      {
        name: "HTML5",
        level: "Advanced",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        level: "Advanced",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript (ES6+)",
        level: "Intermediate",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        level: "Intermediate",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Redux ",
        level: "Intermediate",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      },
    ],
  },
  {
    group: "Tools",
    items: [
      {
        name: "Git & GitHub",
        level: "Intermediate",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "Vite",
        level: "Intermediate",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "Figma",
        level: "Starter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      },
      {
        name: "Bosstrap",
        level: "Advanced",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "Wordpres",
        level: "Intermediate",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
      },
    ],
  },
  {
    group: "Soft Skills",
    items: [
      { name: "English",level: "intermediate(B1)", icon:languageIcon },
      { name: "Clean UI & detalle", level: "Strong", icon: uiIcon},
      { name: "Comunication", level: "Strong", icon: comunicacionIcon },
      { name: "Teamwork", level: "Strong", icon: teamIcon },
      { name: "Resilence", level: "Strong", icon: resilenceIcon },
      { name: "Agile metodologies", level: "Strong", icon: scrumIcom },
    ],
  },
];

export default function Skills() {
  return (
    <section id="habilidades-section" className="skills">
      <div className="skills__head">
        <h2>Skills</h2>
        <p>
        Technical stack and skills I use to build clean, functional products.
        </p>
      </div>

      {/* Carrusel */}
      {SKILLS.map(({ group, items }, groupIndex) => (
  <div className="skills__group" key={group}>
    <h3>{group}</h3>

    <div className={`skills-marquee ${groupIndex % 2 === 0 ? "to-left" : "to-right"}`}>
      <div className="marquee__track">
        {items.concat(items).map((s, i) => ( // duplicamos para loop infinito
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
                    s.level === "Advanced"
                      ? "90%"
                      : s.level === "Intermediate"
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
