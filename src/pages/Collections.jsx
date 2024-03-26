import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Collections = () => {
  const [collections, setCollections] = useState(null);
  const [imgMain, setImgMain] = useState(null);
  const [clickedCollection, setClickedCollection] = useState({});
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [url, setUrl] = useState("");
  const [selectedCollection, setSelectedCollection] = useState(null);

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

  const handleCollectionClick = (collectionId) => {
    console.log(clickedCollection);
    console.log(collectionId);
    
    if (selectedCollection === collectionId) {
      window.location.href = `/collections/${collectionId}`;
    return;
    }

    setClickedCollection(null);

    setClickedCollection(collectionId);
    setSelectedCollection(collectionId);
  };

  useEffect(() => {
    const handleResize = () => {
      // Verificar si el ancho de la pantalla es mayor o igual a 1200px
      setIsWideScreen(window.innerWidth >= 1200);
    };

    // Agregar un event listener para el evento 'resize' que se activa cuando cambia el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Llamar a handleResize una vez al inicio para inicializar el estado
    handleResize();

    // Remover el event listener al desmontar el componente para evitar memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              onClick={() => handleCollectionClick(collection.Id)}
            >
              <Link
                to={isWideScreen === true ? `/collections/${collection.Id}` : url}
                className={`collection-link ${
                  clickedCollection === collection.Id ? "active" : ""
                }`}
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
                <div className="filter-img"></div>
                <h2>{collection.Title}</h2>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};
