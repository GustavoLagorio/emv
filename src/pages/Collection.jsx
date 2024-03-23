import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Collection = () => {
  const { Id } = useParams();
  const idCollection = parseInt(Id);
  const [collections, setCollections] = useState(null);
  const [collection, setCollection] = useState(null);

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
  }, []);

  useEffect(() => {
    if (collections) {
      const obtenerCollectionSelected = () => {
        const selectedCollection = collections.find(
          (item) => item.Id === idCollection
        );
        console.log(selectedCollection);
        if (selectedCollection) {
          setCollection(selectedCollection);
        }
      };

      obtenerCollectionSelected();
    }
  }, [collections, idCollection]);

  if (collection) {
    const collectionGallery = collection.Gallery;
    console.log(collectionGallery);
    return (
      <>
        <main className="collection">
          <div className="collection-hero">
            <div className="collection-hero-filter"></div>
            <img src={collection.Gallery[idCollection].Link} alt="" />
            <h1>{collection.Title}</h1>
          </div>
          <article className="collection-description">
            <p>{collection.Description}</p>
          </article>
          <section className="collection-gallery">
            {collectionGallery.map((item, index) => {
              if (index === 0) {
                return null;
              } else {
                return (
                  <div key={item.Id} className="collection-gallery-img">
                    <img src={item.Link} alt="" />
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
