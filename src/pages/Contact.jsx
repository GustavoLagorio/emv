import React from "react";
import { ContactForm } from "../componentes/ContactForm";

export const Contact = () => {
  return (
    <>
      <main className="contact">
        <div className="contact-hero">
          <h1 className="contact-hero-title">Ezequiel Vieta</h1>
          <img
            src="https://s3-alpha-sig.figma.com/img/e04e/7314/26860c4d15db58011ead5b7d3d8e7409?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BDY9VoDphJLGV5dQNWZRJCPIoEsougFIKacPZuUd-JwNXmmSLMyyNaYRLG-R1O5gmWBIMQMp8Wi9aJz1O2iVuh6X1vfY1GGJ2oD5cs26QyE2lQrfNQmSzHRoHFLNkzroZB04aPdQ1eDZ27-NYKCDsbvOUf3lL19ZgG5hipaJ8-k67Ad5wiqN0dbW4Sm-mYi7I~rhN7WtutKNzJiiFHsEqc5X-7uiexVTNR0t3ogrDpydI-egmVycR4SAhmNFeCeLIGF657VMh5OktYcggedv2-60SqalQmO7CEPEUwgrLzKZcF3Cp9OZliBN9BNZvuI3Vtc6lAMX-TU~jKOolK1hvQ__"
            alt=""
          />
          <div className="filter-hero-contact"></div>
        </div>
        <ContactForm />        
      </main>
    </>
  );
};
