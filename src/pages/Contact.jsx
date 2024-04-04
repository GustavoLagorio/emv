import React from "react";
import { ContactForm } from "../componentes/ContactForm";

export const Contact = () => {
  return (
    <>
      <main className="contact">
        <div className="contact-hero">
        </div>
        <div className="form-section">
          <ContactForm />
        </div>
      </main>
    </>
  );
};
