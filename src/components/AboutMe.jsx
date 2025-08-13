import React from "react";

const AboutMe = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <article className="about-title">
            <span id="about-me">biography</span>
            <h3>About me</h3>
          </article>
          <div className="about-inner">
            <div className="about-img-container">
              <div className="about-img-border">
                <figure className="about-img-inner">
                  {/* <img
                    src="src\assets\pics\fotofrontalyosinfondo-Photoroom (1).png"
                    alt=""
                  /> */}
                   <img
                    src="src\assets\pics\1e7cd3db-1194-48a5-99ec-1888f6af0e83.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <div className="about-info-container">
              <div className="about-info-title">
                <h3>
                  I'm Thaliz Fajardo | <span>Front end Web Developer</span>
                </h3>
              </div>

              <div className="about-info-text">
                <p>
                  Hola mi nombre es <span> Thaliz Fajardo</span> amet
                  consectetur adipisicing elit. Temporibus, illum aspernatur.
                  Debitis assumenda deleniti quibusdam commodi, saepe animi
                  porro sint velit. Officia recusandae ex iste possimus,
                  asperiores accusantium eligendi illum?
                </p>
              </div>

              <div className="about-info-list">
                <ul>
                  
            
                  <li>
                    <span className="about-info-logo">
                      {/* <i class="fas fa-map-marker-alt"></i> */}
                    </span>
                    <span>
                      <label>Location:</label>Ciudad de Mexico
                    </span>
                  </li>

                  <li>
                    <span className="about-info-logo">
                      {/* <i class="fas fa-school"></i> */}
                    </span>
                    <span>
                      <label>Study:</label>Academlo
                    </span>
                  </li>

                  <li>
                    <span className="about-info-logo">
                      {/* <i class="fas fa-graduation-cap"></i> */}
                    </span>
                    <span>
                      <label>Degree:</label>Bachelor
                    </span>
                  </li>

                  <li>
                    <span className="about-info-logo">
                      {/* <i className="fas fa-envelope"></i> */}
                    </span>
                    <span>
                      <label>Mail:</label>
                      <a href="mailto:fajardoThaliz@gmail.com">My mail</a>
                    </span>
                  </li>

                  <li>
                    <span className="about-info-logo">
                      {/* <i className="fas fa-phone-alt"></i> */}
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
