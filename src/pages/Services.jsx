import React from "react";
import ReactPlayer from "react-player";
import video from "../assets/video_home.mp4";
import imgServices from "../assets/img-services.jpg";

export const Services = () => {
  return (
    <>
      <main className="services">
        <article className="service">
          <h2>PHOTOGRAPHY</h2>
          <img
            src={imgServices}
            alt="foto de servicios"
          />
        </article>
        <article className="service">
          <h2>VIDEOGRAPHY</h2>
          <ReactPlayer
            url={video}
            controls={true}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
          <p>
            "Photography and videography have become my passion, and that's why
            I enjoy every project that comes my way. Each project and person has
            something different to tell, and through my organic and reportage
            style, I seek to convey it through my camera."
          </p>
        </article>
        <section className="services-list">
          <h2>SERVICES</h2>
          <ul>
            <li className="services-item">Creative Direction</li>
            <li className="services-item">Social Media Strategies</li>
            <li className="services-item">Photography Production</li>
            <li className="services-item">Video Production</li>
            <li className="services-item">Social Media Management</li>
            <li className="services-item">Podcast Production</li>
            <li className="services-item">Content for Influencers</li>
            <li className="services-item">3D Renders and Visualizations</li>
            <li className="services-item">Aerial Photography and Video</li>
            <li className="services-item">Professional Editing</li>
            <li className="services-item">Visual Effects and Graphic Design</li>
            <li className="services-item">Brand Activation and Creation</li>
            <li className="services-item">Website Design</li>
          </ul>
        </section>
      </main>
    </>
  );
};
