import React from "react";
import Logo from "../assets/Logo1.png";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <main className="about">
        <div className="about-hero">
          <img
            src="https://images.squarespace-cdn.com/content/v1/64f5a946a689204be6eaaf3f/88bc09b4-b9ea-4fb9-b237-8e6659c4834a/DSC09341.jpg?format=2500w"
            alt=""
          />
          <h1>ABOUT</h1>
        </div>
        <div className="about-brand">
          <img src={Logo} alt="" />
        </div>
        <article className="about-article">
          <p className="about-text">
            I am Ezequiel Vieta, a passionate photographer and videographer
            dedicated to visual storytelling.
            <br></br>I am a digital nomad, I travel depending on each project,
            and that's why I'm willing to go to any corner to capture unique
            moments.
            <br></br>
            What I am to bring to the creative industry is my unique perspective
            and the style with which I capture these moments. For me,
            storytelling is essential in everything I do, and I always strive to
            present it in the most natural way possible.
            <br></br>I believe that the moments that happen between the
            highlighted instances are what truly matter. To me, it's about
            comprehending the complete picture and valuing the journey as a
            whole. Through my projects, I strive to tell stories that transcend
            the obvious and delve into the essence of each experience.
            <br></br>
            Thank you for visiting my website and exploring my work. If you are
            interested in collaborating or learning more about my approach,
            please feel free to get in touch with me.
          </p>
        </article>
        <ul className="about-social-list">
          <li className="about-social-item">
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
          <li className="about-social-item">
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
          <li className="about-social-item">
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
      </main>
    </>
  );
};
