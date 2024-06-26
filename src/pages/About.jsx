import React from "react";
import imgAbout from "../assets/img-about.jpg"

export const About = () => {
  return (
    <>
      <main className="about">
        <div className="about-hero">
          <img
            src={imgAbout}
            alt="about image"
          />
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
      </main>
    </>
  );
};
