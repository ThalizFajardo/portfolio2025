import React from "react";
import { useI18n } from "../hooks/useI18n";
import { Trans } from "react-i18next";

import mappinIcon from "../assets/map-pin.svg";
import filbadgeIcon from "../assets/file-badge.svg";
import graduationIcon from "../assets/graduation-cap.svg";
import mailIcon from "../assets/mail.svg";
import phoneIcon from "../assets/phone.svg";
import bg from "../assets/profilepic.jpg";

const AboutMe = () => {
  const { tx } = useI18n();

  return (
    <>
      <section id="acerca-section" className="about-section">
        <div className="about-container">
          <article className="about-title">
            <span id="about-me">biography</span>
            <h3>{tx("about.title")}</h3>
          </article>
          <div className="about-inner">
            <div className="about-img-container">
              <div className="about-img-border">
                <figure
                  className="about-img-inner"
                  style={{ backgroundImage: `url(${bg})` }}
                >
                  <img src={bg} alt="Propic" className="profile-img" />
                </figure>
              </div>
            </div>

            <div className="about-info-container">
              <div className="about-info-title">
                <h3>
                  {tx("about.ponounce")} Thaliz Fajardo |{" "}
                  <span>{tx("about.role")}</span>
                </h3>
              </div>

              <div className="about-info-text">
                <p>
                  <Trans
                    t={tx}
                    i18nKey="about.bio" // clave dentro de about.json
                    values={{ name: "Thalíz Fajardo" }}
                    components={{ name: <span className="highlight" /> }}
                  />
                </p>
              </div>

              <div className="about-info-list">
                <ul>
                  <li>
                    <span className="about-info-logo">
                      <img src={mappinIcon} alt="Location Icon" />
                    </span>
                    <span>
                      <label>{tx("about.info.location")}: </label>{tx("about.info.location.city")}
                    </span>
                  </li>

                  <li>
                    <span className="about-info-logo">
                      <img src={filbadgeIcon} alt="Study Icon" />
                    </span>
                    <span>
                      <label>{tx("about.info.study")} :</label>Academlo
                    </span>
                  </li>

                  <li>
                    <span className="about-info-logo">
                      <img src={graduationIcon} alt="graduation Icon" />
                    </span>
                    <span>
                      <label>{tx("about.info.degree")} :</label>Bachelor
                    </span>
                  </li>

                  <li>
                    <span className="about-info-logo">
                      <img src={mailIcon} alt="Mail Icon" />
                    </span>
                    <span>
                      <label>{tx("about.info.mail")}:</label>
                      <a href="mailto:fajardothaliz@gmail.com">
                        fajardothaliz@gmail.com
                      </a>
                    </span>
                  </li>

                  <li>
                    <span className="about-info-logo">
                      <img src={phoneIcon} alt="phone Icon" />
                    </span>
                    <span>
                      <label>{tx("about.info.phone")} :</label>
                      <a href="tel:+525529039985">+525529039985</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
