import React from "react";
import { Link } from "react-router-dom";

import HomeCarrousel from "../componentes/HomeCarrousel";
import { Logo } from "../componentes/Logo";
import { SocialLinks } from "../componentes/SocialLinks";

export const Home = () => {
  return (
    <>
      <main className="home">
        <section className="home-hero">
          <HomeCarrousel />
        </section>
        <section className="home-main">
            <div className="home-logo">
              <Logo color="black" />
            </div>
            <div className="home-titles">
              <h1 className="home-title">Capturing Moments
              <br></br>&<br></br>Creating Stories</h1>
              <h2 className="home-subtitle">PHOTOGRAPHER & VIDEOGRAPHER</h2>
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
      </main>
    </>
  );
};
