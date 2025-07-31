import React from 'react'

const Menu = () => {
  return (
    <div>
  <nav className="navbar">
            <div className="inner-nav">
                <div className="btn-container">
                    <input type="checkbox" id="menu-hamburguesa"/>

                    <label for="menu-hamburguesa">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII=" />
                    </label>


                    <ul className="nav-list">
                        <li><a href="#casa-section">Home</a></li>
                        <li><a href="#acerca-section">Acerca de mi</a></li>
                        <li><a href="#habilidades-section">Skills</a></li>
                        <li><a href="#portafolio"> Portafolio</a></li>
                        <li><a href="#contacto-section">Contacto</a></li>
                    </ul>
                </div>



            </div>
            <div className="logos-container">
                <div className="logo">
                    <img src=".src/assets/pics/cib_linkedin-in.svg" />
                </div>

                <div className="logo">
                    <img src='./assets/pics/' />
                </div>
            </div>
        </nav>


 {/* <footer>
        <section className="footer-section">
            <article className="footer-container">
                <p>Social Media</p>
                <div class="footer-sm">
                    <a href="https://github.com/ThalizFajardo" target="_blank" rel="noopener">
                        <i className="fab fa-github rndm-color"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/thaliz-fajardo-00026a244/" target="_blank" rel="noopener">
                        <i className="fab fa-linkedin rndm-color"></i>
                    </a>
                </div>
            </article>
        </section>
    </footer> */}
    </div>
  )
}

export default Menu