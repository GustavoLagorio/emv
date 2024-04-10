import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Collections = () => {
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    const obtenerCollections = async () => {
      try {
        const response = await fetch(
          `https://pruebas-mvc.somee.com/Api/Collection`,
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

    obtenerCollections();
  }, []);

  if(collections) {
    console.log(collections[0].Gallery[0].Link);
    return (
      <>
        <main className="collections">
          <section className="collections-list">
          {collections &&
            collections.map((collection) => (
              <div
                key={collection.Id}
                id={`collection-${collection.Id}`}
                className="collection"
              >
                <Link
                  to={`/collections/${collection.Id}`}
                  className="collection-link"
                >
                  <img
                    src={collection.Gallery[0].Link}
                    alt=""
                    loading="lazy"
                  />
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
    console.log('hola');
  }  
};
