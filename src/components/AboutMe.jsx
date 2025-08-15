import React from "react";
import mappinIcon from "../assets/map-pin.svg"
import filbadgeIcon from "../assets/file-badge.svg"
import graduationIcon from "../assets/graduation-cap.svg"
import mailIcon from "../assets/mail.svg"
import phoneIcon from "../assets/phone.svg"
import profilepic from "../assets/pics/profilepic.jpg"


const AboutMe = () => {
  return (
    <>
      <section id="acerca-section" className="about-section">
        <div className="about-container">
          <article className="about-title">
            <span id="about-me">biography</span>
            <h3>About me</h3>
          </article>
          <div className="about-inner">
            <div className="about-img-container">
              <div className="about-img-border">
                <figure className="about-img-inner">
                  <img
                    src={profilepic}
                    alt="profile picture"
                  />
                </figure>
              </div>
            </div>

            <div className="about-info-container">
              <div className="about-info-title">
                <h3>
                  I'm Thaliz Fajardo | <span>Front-end Web Developer</span>
                </h3>
              </div>

              <div className="about-info-text">
                <p>
                  Hi i'm <span> Thaliz Fajardo</span> I'm a frontend-focused developer with experience leading high-impact digital projects and coordinating technical teams. I'm passionate about building functional, automated, and scalable solutions—especially when they solve real business challenges. I enjoy collaborating with multidisciplinary teams, providing technical vision, and bringing structure and efficiency through development. Currently, I’m expanding my skill set toward full-stack development to increase my technical impact and autonomy when creating solutions.
                </p>
              </div>

              <div className="about-info-list">
                <ul>
                  
            
                  <li>
                    <span className="about-info-logo">
                      <img src={mappinIcon} alt="Location Icon" />
                    </span>
                    <span>
                      <label>Location:</label>Ciudad de Mexico
                    </span>
                  </li>

                  <li>
                    <span className="about-info-logo">
                     <img src={filbadgeIcon} alt="Study Icon" />
                    </span>
                    <span>
                      <label>Study:</label>Academlo
                    </span>
                  </li>

                  <li>
                    <span className="about-info-logo">
                     <img src={graduationIcon} alt="graduation Icon" />
                    </span>
                    <span>
                      <label>Degree:</label>Bachelor
                    </span>
                  </li>

                  <li>
                    <span className="about-info-logo">
                      <img src={mailIcon} alt="Mail Icon" />
                    </span>
                    <span>
                      <label>Mail:</label>
                      <a href="mailto:fajardothaliz@gmail.com">fajardothaliz@gmail.com</a>
                    </span>
                  </li>

                  <li>
                    <span className="about-info-logo">
                      <img src={phoneIcon} alt="phone Icon" />
                    </span>
                    <span>
                      <label>Phone:</label>
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
