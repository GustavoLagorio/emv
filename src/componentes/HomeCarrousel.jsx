import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={1500}
      className="swiper-container"
    >
      <SwiperSlide>
        <figure>
          <img
            src="https://images.squarespace-cdn.com/content/v1/64f5a946a689204be6eaaf3f/d9546d0d-688f-41b0-a5bb-b8d6b00e9e41/222D03C7-E576-4F38-87D4-8B460157761B.jpg"
            alt=""
          />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img
            src="https://images.squarespace-cdn.com/content/v1/64f5a946a689204be6eaaf3f/88bc09b4-b9ea-4fb9-b237-8e6659c4834a/DSC09341.jpg"
            alt=""
          />
        </figure>
      </SwiperSlide>{" "}
      ...
    </Swiper>
  );
};
