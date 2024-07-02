import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../componentes/Loading";

export const Collections = () => {
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    const obtenerCollections = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_COLLECTION_DEV}?state=${'true'}`,
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

  if (collections) {
    const filteredCollections = collections.filter(
      (collection) => collection.State
    );

    console.log(collections);
    
    return (
      <>
        <main className="collections">
          <section className="collections-list">
            {filteredCollections.map((collection) => (
              <div
                key={collection.Id}
                id={`collection-${collection.Id}`}
                className="collection"
              >
                <Link
                  to={`/collections/${collection.Id}`}
                  className="collection-link"
                >
                  <img src={collection.Gallery[0].Link} alt="" loading="lazy" />
                  <div className="filter-img"></div>
                  <h2>{collection.Title}</h2>
                </Link>
              </div>
            ))}
          </section>
        </main>
      </>
    );
  } else {
    return (
      <Loading/>
    );
  }
};
