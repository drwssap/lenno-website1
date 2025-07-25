"use client";

import "./ContactUsSection.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUsSection() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_solpu5m", // Replace with your actual service ID
        "template_u60sojq", // Replace with your actual template ID
        form.current,
        "wVj3ZR4Rvw-J4KoI_" // Replace with your public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          form.current?.reset();
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-left">
        <div className="contact-header">
          <span className="contact-badge">Contact</span>
          <h2 className="contact-heading">Nous joindre</h2>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <img src="/images/mail.png" className="icon-mail" alt="" />
            <div className="info">
              <h4 className="title">Courriel</h4>
              <p className="info-response">info@lenno.ca</p>
            </div>
          </div>
          <div className="contact-item">
            <img src="/images/location.png" className="icon-location" alt="" />
            <div className="info">
              <h4 className="title">Bureau</h4>
              <p className="info-response">Saint-hippolyte, Canada</p>
            </div>
          </div>
          <div className="contact-item">
            <img src="/images/call.png" className="icon-phone" alt="" />
            <div className="info">
              <h4 className="title">téléphone</h4>
              <p className="info-response">(+1) 23 456 789 369</p>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/images/sphere.png"
        alt="Sphere Decoration"
        className="form-sphere"
      />

      <div className="contact-right">
        <h3 className="form-title">Prêt à travailler ensemble ?</h3>
        <hr className="customLineForm" />
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <div>
              <span className="title-input">Nom complet</span>
              <input
                type="text"
                name="user_name"
                className="input-form-row1"
                required
              />
            </div>
            <div>
              <span className="title-input">Numéro de téléphone</span>
              <input
                type="text"
                name="user_phone"
                className="input-form-row1"
              />
            </div>
          </div>
          <div>
            <span className="title-input">Courriel professionnel</span>
            <input
              type="email"
              name="user_email"
              className="input-form-row2"
              required
            />
          </div>
          <div>
            <span className="title-input">Nom de l&#39;entreprise</span>
            <input
              type="text"
              name="user_company"
              className="input-form-row2"
            />
          </div>
          <div>
            <span className="title-input">Détails de votre projet</span>
            <textarea name="message" className="input-form-row3" required />
          </div>
          <button type="submit" className="submit-button">
            Envoyer <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
