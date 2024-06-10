import React from "react";
import { Link } from "react-router-dom";

export const Terms = () => {
  return (
    <>
      <main className="terms">
        <h1>Política de Privacidad</h1>
        <section className="site-data">
          <h2>Información General</h2>
          <ul>
            <li>Nombre del Sitio Web: EMV Productions</li>
            <li>
              URL:{" "}
              <Link to="/" reloadDocument className="link">
                https://www.emv-productions.com/
              </Link>
            </li>
            <li>Responsable del Sitio: Ezequiel Vieta</li>
          </ul>
        </section>
        <section className="data-handle">
          <h2>Datos Recopilados</h2>
          <p>
            Recopilamos los siguientes datos personales a través del formulario
            de contacto en nuestro sitio web:
          </p>
          <ul>
            <li>Nombre</li>
            <li>Apellido</li>
            <li>Correo Electrónico</li>
            <li>Mensaje</li>
          </ul>
          <p>
            No recopilamos datos adicionales como direcciones IP, ubicación
            geográfica, o datos de navegación.
          </p>
          <h2>Propósito de la Recopilación</h2>
          <p>
            Los datos personales proporcionados se utilizan exclusivamente para
            responder a las consultas enviadas por los usuarios a través del
            formulario de contacto. No se utilizan para otros fines como el
            envío de boletines.
          </p>
          <h2>Métodos de Recopilación</h2>
          <p>
            Los datos personales se recopilan únicamente a través del formulario
            de contacto disponible en nuestro sitio web.
          </p>
          <h2>No Utilización de Cookies</h2>
          <p>
            No utilizamos cookies u otras tecnologías de seguimiento en nuestro
            sitio web.
          </p>
          <h2>Compartición de Datos</h2>
          <p>
            No compartimos la información personal recopilada con terceros. Los
            datos proporcionados son utilizados únicamente por nosotros para
            responder a las consultas de los usuarios.
          </p>
          <h2>Almacenamiento y Seguridad</h2>
          <p>
            No almacenamos los datos personales de forma permanente. La
            información proporcionada a través del formulario de contacto puede
            quedar eventualmente almacenada en nuestra cuenta de correo
            electrónico en Gmail.
          </p>
          <h2>Derechos del Usuario</h2>
          <p>
            Los usuarios tienen los siguientes derechos sobre sus datos
            personales:
          </p>
          <ul>
            <li>
              <b>Acceso</b>: Derecho a conocer qué datos personales tenemos.
            </li>
            <li>
              <b>Rectificación</b>: Derecho a solicitar la corrección de datos
              inexactos.
            </li>
            <li>
              <b>Eliminación</b>: Derecho a solicitar la eliminación de sus
              datos personales.
            </li>
          </ul>
          <p>
            Para ejercer estos derechos, los usuarios pueden notificarnos a
            través de la información de contacto proporcionada en la sección de{" "}
            <b>Información de Contacto.</b>
          </p>
          <h2>Actualizaciones de la Política</h2>
          <p>
            Nuestra política de privacidad está diseñada para ser permanente.
            Sin embargo, en caso de que surjan eventualidades que requieran
            cambios, actualizaremos esta política de privacidad. Las
            actualizaciones se publicarán en esta misma página. Podemos
            notificar a los usuarios sobre los cambios mediante un pop-up al
            visitar el sitio o enviando correos electrónicos a los usuarios
            registrados.
          </p>
          <h2>Información de Contacto</h2>
          <p>
            Para cualquier consulta relacionada con la privacidad de sus datos,
            los usuarios pueden contactarnos a través de:
          </p>
          <ul>
            <li>Correo Electrónico: ezequiel.vieta@gmail.com</li>
            <li>Instagram: <Link to="https://www.instagram.com/ezequielvieta/" target="_blank" reloadDocument className="link">@ezequielvieta</Link></li>
            <li>
              Canal de YouTube: <Link to="https://www.youtube.com/channel/UCi_cFUXozrRO66erzOTH7Uw" target="_blank" reloadDocument className="link">Ezequiel Vieta</Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
