import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    const form = e.currentTarget;
    
    if (form.company.value) {
      setStatus({ loading: false, ok: false, msg: "Bots no permitidos 😅" });
      return;
    }

    
    const ENDPOINT = "https://formspree.io/f/manbvpkn";

    const data = new FormData(form);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      setStatus({
        loading: false,
        ok: true,
        msg: "¡Gracias! Te responderé pronto.",
      });
    } else {
      setStatus({
        loading: false,
        ok: false,
        msg: "Ups, algo falló. Intenta de nuevo.",
      });
    }
  }

  return (
    <section id="contacto-section" className="contact">
      <header className="contact__head">
        <h2>Contacto</h2>
        <p>¿Tienes un proyecto o vacante? Escríbeme y hablamos.</p>
      </header>

      <div className="contact__grid">
        {/* Columna info */}
        <div className="contact__info">
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:fajardothaliz@gmail.com">
                fajardothaliz@gmail.com
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/thal%C3%ADz-fajardo-00026a244/"
                target="_blank"
                rel="noreferrer"
              >
                perfil de linkedin
              </a>
            </li>
            <li>
              <strong>Ubicación:</strong> Ciudad de México
            </li>
          </ul>
          <p className="contact__note">Tiempo de respuesta ~24h.</p>
        </div>

        {/* Columna formulario */}
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          {/* Honeypot anti‑spam */}
          <input type="text" name="company" tabIndex="-1" autoComplete="off" className="hp" />

          <label> Nombre
            <input name="name" type="text" placeholder="Tu nombre"  required minLength={2}  />
          </label>

          <label> Email 
            <input  name="email" type="email"placeholder="tu@correo.com"  inputMode="email" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" />
          </label>

          <label>
            Mensaje
            <textarea name="message" rows="5" placeholder="Cuéntame en qué te ayudo"required />
          </label>


          <button type="submit" disabled={status.loading}>
            {status.loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status.ok === true && (
            <p className="contact__alert contact__alert--ok">{status.msg}</p>
          )}
          {status.ok === false && (
            <p className="contact__alert contact__alert--err">{status.msg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
