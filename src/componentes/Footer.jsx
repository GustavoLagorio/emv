import React from "react";
import { Logo } from "./Logo";
import Autor from "../assets/autor_logo.jpeg"
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="footer-brand">
          <Logo color="black" />
        </div>
        <ul className="footer-social-list">
          <li className="footer-social-item">
            <Link
              as={Link}
              to="https://www.instagram.com/ezequielvieta/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                height="100%"
                viewBox="0 0 24 24"
                strokeWidth="0.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </Link>
          </li>
          <li className="footer-social-item">
            <Link
              as={Link}
              to="mailto:ezequiel.vieta@gmail.com"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                height="100%"
                viewBox="0 0 24 24"
                strokeWidth="0.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </Link>
          </li>
          <li className="footer-social-item">
            <Link
              as={Link}
              to="https://www.youtube.com/channel/UCi_cFUXozrRO66erzOTH7Uw"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-youtube"
                height="100%"
                viewBox="0 0 24 24"
                strokeWidth="0.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                <path d="M10 9l5 3l-5 3z" />
              </svg>
            </Link>
          </li>
        </ul>
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
