import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Collections = () => {
  const [collections, setCollections] = useState(null);
  const [imgMain, setImgMain] = useState(null);

  // Realizar una solicitud al servidor para obtener el Collections
  useEffect(() => {
    const obtenerCollections = async () => {
      try {
        const response = await fetch(
          `https://pruebas-mvc.somee.com/api/collection`,
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
            setCollections(data);
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

    obtenerCollections();
  }, []); //Argumento vacio para que se ejecute una vez al ejecutar el componente

  useEffect(() => {
    if (collections) {
      const principalImages = {};
      collections.forEach((collection) => {
        const galeriaPrincipal = collection.Gallery.find(
          (item) => item.Principal === true
        );
        if (galeriaPrincipal) {
          principalImages[collection.Id] = galeriaPrincipal.Link;
        }
      });
      setImgMain(principalImages);
    }
  }, [collections]);

  return (
    <>
      <main className="collections">
        <div className="collections-hero">
          <h1>COLLECTIONS</h1>
        </div>

        <div className="collections-list">
          {collections &&
            collections.map((collection) => (
              <Link
                key={collection.Id}
                as={Link}
                to={`/collections/${collection.Id}`}
              >
                <div
                  key={collection.Id}
                  id={`collection-${collection.Id}`}
                  className="collection"
                >
                  <img
                    src={
                      imgMain && imgMain[collection.Id]
                        ? imgMain[collection.Id]
                        : ""
                    }
                    alt=""
                    loading="lazy"
                  />
                  <h2>{collection.Title}</h2>
                </div>
              </Link>
            ))}
        </div>
      </main>
    </>
  );
};
