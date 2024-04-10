import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Collection = () => {
  const { Id } = useParams();
  const idCollection = parseInt(Id);
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const obtenerCollection = async () => {
      try {
        const response = await fetch(
          `https://pruebas-mvc.somee.com/api/collectionid?Id=${idCollection}`,
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
            setCollection(data);
            console.log(data);
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

    obtenerCollection();
  }, []);

  if (collection) {
    console.log(collection);
    const collectionGallery = collection.Gallery;
    console.log(collectionGallery);
    return (
      <>
        <main className="collection">
          <div className="collection-hero">            
            <img src={collectionGallery[0].Link} alt="" />
          </div>
          <article className="collection-description">
            <h1>{collection.Title}</h1>
            <p>{collection.Description}</p>
          </article>
          <section className="collection-gallery">
            {collectionGallery.map((item, index) => {
              if (index === 0) {
                return null;
              } else {
                return (
                  <div key={item.Id} className="collection-gallery-img">
                    <img src={item.Link} alt="" loading="lazy" />
                  </div>
                );
              }
            })}
          </section>
        </main>
      </>
    );
  }
};
