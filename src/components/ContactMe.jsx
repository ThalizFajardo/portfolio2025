import React, { useState } from "react";
import { useI18n } from "../hooks/useI18n";


export default function Contact() {
  const {tx } = useI18n();
  
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
        <h2>{tx("contact.title")}</h2>
        <p>{tx("contact.lead")}</p>
      </header>

      <div className="contact__grid">
        {/* Columna info */}
        <div className="contact__info">
          <ul>
            <li>
              <strong>{tx("contact.form.email")}:</strong>{" "}
              <a 
              className="link"
              href="mailto:fajardothaliz@gmail.com">
                fajardothaliz@gmail.com
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
              className="link"
                href="https://www.linkedin.com/in/thal%C3%ADz-fajardo-00026a244/"
                target="_blank"
                rel="noreferrer"
              >
                View profile
              </a>
            </li>
            <li>
              <strong>{tx("about.info.location")} :</strong> Mexico City
            </li>
          </ul>
          <p className="contact__note">Typical response time: ~24h.</p>
        </div>

        {/* Columna formulario */}
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          {/* Honeypot anti‑spam */}
          <input type="text" name="company" tabIndex="-1" autoComplete="off" className="hp" />

          <label> {tx("contact.form.name")}
            <input name="name" type="text" placeholder={tx("contact.form.placeholder.name")}  required minLength={2}  />
          </label>

          <label> {tx("contact.form.email")} 
            <input  name="email" type="email"placeholder={tx("contact.form.placeholder.email")} inputMode="email" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" />
          </label>

          <label>
            {tx("contact.form.message")}
            <textarea name="message" rows="5" placeholder={tx("contact.form.placeholder.message")} required />
          </label>


          <button type="submit" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send message"}
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
