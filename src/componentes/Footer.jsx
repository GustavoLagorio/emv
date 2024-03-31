import React from "react";
import { Logo } from "./Logo";
import Autor from "../assets/autor_logo.jpeg"
import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <SocialLinks />         
        <ul className="terms">
          <li className="terms-item">
            <img className="autor-logo" src={Autor} alt="Helios Web Desing" />
          </li>
          <li className="terms-item">
            <p>
              &copy; {currentYear}
            </p>
          </li>
          <li className="terms-item">
            <Link>Privacy - Terms</Link>
          </li>
        </ul>
      </footer>
    </>
  );
};
