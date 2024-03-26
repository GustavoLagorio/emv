import React from "react";
import ReactPlayer from "react-player";
import video from "../assets/video_home.mp4";

export const Services = () => {
  return (
    <>
      <main className="services">
        <article className="service">
          <h2>PHOTOGRAPHY</h2>
          <img src="https://images.squarespace-cdn.com/content/v1/64f5a946a689204be6eaaf3f/6ba30d83-8f73-499b-abab-7d0f23d8d026/_DSC7010.jpg" alt="foto de servicios" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            modi aperiam, expedita voluptates similique officiis sapiente
            perferendis vero natus, cum veniam! Dignissimos praesentium
            perspiciatis voluptas quasi quas est in nesciunt!
          </p>
        </article>
        <article className="service">
          <h2>VIDEOGRAPHY</h2>
          <ReactPlayer
            url={video}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et
            mollitia, cumque molestiae corrupti similique eveniet recusandae ea,
            cum temporibus atque explicabo cupiditate repellendus expedita!
            Minima sunt esse error vitae.
          </p>
        </article>
      </main>
    </>
  );
};
