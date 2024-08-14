import React from "react";
import Autor1 from "../assets/autor1_logo.svg";
import Autor2 from "../assets/autor2_logo.jpg";
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
              <a href="">
                <img
                  className="autor-logo1"
                  src={Autor1}
                  alt="Helios Web Desing"
                />
              </a>
            </span>
            <span className="autor2">
              <a href="https://www.instagram.com/compugrossok/" target="_blank">
                <img className="autor-logo2" src={Autor2} alt="CompuGross" />
              </a>
            </span>
            <span className="copyright">
              <p>&copy; {currentYear}</p>
            </span>
          </span>
          <span className="terms-item">
            <Link
              to="/privacy-policy"
              target="_blank"
              reloadDocument
            >
              Privacy - Terms
            </Link>
          </span>
        </section>
      </footer>
    </>
  );
};
