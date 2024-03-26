import React from "react";
import { ParallaxHome } from "../componentes/ParallaxHome";
import { ContactForm } from "../componentes/ContactForm";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import video from "../assets/video_home.mp4";
import "animate.css/animate.min.css";

import HomeCarrousel from "../componentes/HomeCarrousel";
import { Logo } from "../componentes/Logo";
import { SocialLinks } from "../componentes/SocialLinks";

/*const imgParallax1 = {
  img: "https://images.squarespace-cdn.com/content/v1/64f5a946a689204be6eaaf3f/1963bea3-88de-4ea0-a810-b998162dc8e8/_DSC3461-Editar.jpg",
  hero: false,
  lsm: "50%",
  tsm: "-30%",
  lm: "50%",
  tm: "-30%",
  ll: "50%",
  tl: "-40%",
  lxl: "50%",
  txl: "-150%",
  str: -350,
  url: "/services",
};

const imgParallax2 = {
  img: "https://images.squarespace-cdn.com/content/v1/64f5a946a689204be6eaaf3f/fb738b84-03b1-46b6-a851-88673bf4f768/IMG_9646.jpg",
  hero: false,
  lsm: "150%",
  tsm: "-50%",
  lm: "100%",
  tm: "-40%",
  ll: "50%",
  tl: "-60%",
  lxl: "50%",
  txl: "-70%",
  str: -500,
  url: "/collections",
};

const imgParallax3 = {
  img: "https://images.squarespace-cdn.com/content/v1/64f5a946a689204be6eaaf3f/2e8a5ee3-d5e1-4552-b4c0-6f8f64ced1cc/_DSC4859.jpg",
  hero: false,
  lsm: "50%",
  tsm: "-30%",
  lm: "50%",
  tm: "-10%",
  ll: "50%",
  tl: "-40%",
  lxl: "50%",
  txl: "-30%",
  str: -300,
  url: "/about",
};
const contentParallax1 = {
  heading: "SERVICES",
  text: "See more",
  svg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-narrow-right"
      height="6rem"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#E3EA96"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M15 16l4 -4" />
      <path d="M15 8l4 4" />
    </svg>
  ),
};

const contentParallax2 = {
  heading: "COLLECTIONS",
  text: "See more",
  svg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-narrow-right"
      height="6rem"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#E3EA96"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M15 16l4 -4" />
      <path d="M15 8l4 4" />
    </svg>
  ),
};

const contentParallax3 = {
  heading: "ABOUT",
  text: "See more",
  svg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-narrow-right"
      height="6rem"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#E3EA96"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M15 16l4 -4" />
      <path d="M15 8l4 4" />
    </svg>
  ),
};*/

export const Home = () => {
  return (
    <>
      <main className="home">
        <section className="home-hero">
          <HomeCarrousel />
          {/*<img
            src="https://images.squarespace-cdn.com/content/v1/64f5a946a689204be6eaaf3f/d9546d0d-688f-41b0-a5bb-b8d6b00e9e41/222D03C7-E576-4F38-87D4-8B460157761B.jpg"
            alt=""
          />*/}
        </section>
        <section className="home-main">
            <div className="home-logo">
              <Logo color="black" />
            </div>
            <div className="home-titles">
              <h1 className="home-title">Texto Slogan</h1>
              <h2 className="home-subtitle">Photographer & Videomaker</h2>
              <Link
                to="/collections"
                reloadDocument
                className="button btn-home"
              >
                See more
              </Link>
            </div>
          <SocialLinks />
        </section>

        {/*<ParallaxHome imagen={imgParallax1} contenido={contentParallax1} />
        <ParallaxHome imagen={imgParallax2} contenido={contentParallax2} />
        <ParallaxHome imagen={imgParallax3} contenido={contentParallax3} />
        <div className="home-youtube">
          <ReactPlayer
            url={video}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
          <div className="video-filter"></div>
          <div className="youtube-content">
            <h2 className="heading-secundary">YOUTUBE</h2>
            <Link as={Link} to="" className="links-home" reloadDocument>
              <span>
                <p>See more</p>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-narrow-right"
                  height="6rem"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#E3EA96"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
  <ContactForm />*/}
      </main>
    </>
  );
};
