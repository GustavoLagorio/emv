import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../componentes/Loading";
import { NextPrevCollection } from "../componentes/NextPrevCollection";

export const Collection = () => {
  const { Id } = useParams();
  const idCollection = parseInt(Id);
  const [collection, setCollection] = useState(null);
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    const obtenerCollection = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_COLLECTION_ID_DEV}${idCollection}`,
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

  useEffect(() => {
    const obtenerCollections = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_COLLECTION_DEV}`,
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
          console.error("Error al obtener la data:", response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    };

    obtenerCollections();
  }, []);

  if (collection && collection.State === true && collections) {
    const collectionGallery = collection.Gallery;
    const filteredCollections = collections.filter(
      (collection) => collection.State
    );
    const indexOfCollection = filteredCollections.findIndex(
      (col) => col.Id === idCollection
    );
    
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
                  <div key={index} className="collection-gallery-img">
                    <img src={item.Link} alt="" loading="lazy" />
                  </div>
                );
              }
            })}
          </section>
          <NextPrevCollection
            filteredCollections={filteredCollections}
            indexOfCollection={indexOfCollection}
          />
        </main>
      </>
    );
  } else {
    return <Loading />;
  }
};
