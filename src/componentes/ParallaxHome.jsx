import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const contentStylesSm = {
  top: "30%",
  left: "5%",
  position: "absolute",
};

const contentStylesM = {
  top: "10%",
  left: "20%",
  position: "absolute",
};

let insideStyles;
export const ParallaxHome = ({ imagen, contenido }) => {
  const [bgImageStyle, setBgImageStyle] = useState({});
  const [height, setHeight] = useState({});

  useEffect(() => {
    const updateBgImageStyle = () => {
      const windowWidth = window.innerWidth;
      let styles;

      switch (true) {
        case windowWidth < 768:
          styles = { left: imagen.lsm, top: imagen.tsm };
          break;
        case windowWidth >= 768 && windowWidth < 992:
          styles = { left: imagen.lm, top: imagen.tm };
          break;
        case windowWidth >= 992 && windowWidth < 1200:
          styles = { left: imagen.ll, top: imagen.tl };
          break;
        default:
          styles = { left: imagen.lxl, top: imagen.txl };
          break;
      }

      if (windowWidth < 768) {
        insideStyles = contentStylesSm;
      } else {
        insideStyles = contentStylesM;
      }

      setBgImageStyle(styles);

      if (imagen.hero) {
        setHeight("100vh");
      } else {
        setHeight("70vh");
      }
    };

    // Llama a la función al cargar la página y cada vez que se redimensiona la ventana
    updateBgImageStyle();
    window.addEventListener("resize", updateBgImageStyle);
    return () => window.removeEventListener("resize", updateBgImageStyle);
  }, []);

  return (
    <>
      <Parallax
        bgImage={imagen.img}
        strength={imagen.str}
        bgImageStyle={bgImageStyle}
      >
        <div style={{ height: height }}>
          <div style={insideStyles} className="parallax-content">
            <h2 className="heading-secundary">{contenido.heading}</h2>
            <Link
              as={Link}
              to={imagen.url}
              className="links-home"
              reloadDocument
            >
              <span>
                <p>{contenido.text}</p>
              </span>
              <span>{contenido.svg}</span>
            </Link>
          </div>
        </div>
      </Parallax>
    </>
  );
};
