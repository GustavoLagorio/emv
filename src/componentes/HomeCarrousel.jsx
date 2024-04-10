import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default () => {
  const [homeImg, setHomeImg] = useState([]);

  useEffect(() => {
    const obtenerFotosHome = async () => {
      try {
        const response = await fetch(
          `https://pruebas-mvc.somee.com/api/home`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            setHomeImg(data);
          } else {
            const textData = await response.text();
            console.log("Contenido de la respuesta:", textData);
          }
        } else {
          console.error("Error al obtener el token:", response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    };

    obtenerFotosHome();
  }, []);
  if(homeImg.length > 0) {
    console.log(homeImg);
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
      {homeImg.map((img, index) => (
          <SwiperSlide key={index}>
            <figure>
              <img src={img.Link} alt="" />
            </figure>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    );
  }  
};
