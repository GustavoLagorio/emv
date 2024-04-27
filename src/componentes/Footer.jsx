import React from "react";
import Autor from "../assets/autor_logo.jpeg";
import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <SocialLinks />
        <section className="terms">
          <span className="developer">
            <span className="autor">
              <img className="autor-logo" src={Autor} alt="Helios Web Desing" />
            </span>
            <span className="copyright">
              <p>&copy; {currentYear}</p>
            </span>
          </span>
          <span className="terms-item">
            <Link>Privacy - Terms</Link>
          </span>
        </section>
      </footer>
    </>
  );
};
