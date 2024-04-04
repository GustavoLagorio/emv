import React from "react";
import { ContactForm } from "../componentes/ContactForm";

export const Contact = () => {
  return (
    <>
      <main className="contact">
        <div className="contact-hero">
          <img
            src="src\assets\contact.webp"
            alt=""
          />
        </div>
        <div className="form-section">
          <ContactForm />
        </div>
      </main>
    </>
  );
};
