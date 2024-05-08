import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../componentes/Loading";

export const Collaborations = () => {
    const [collaborations, setCollaborations] = useState(null);

    useEffect(() => {
      const obtenerCollaborations = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_COLLABORATION_DEV}`,
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
              setCollaborations(data);
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
  
      obtenerCollaborations();
    }, []);
  
    if (collaborations) {
        console.log(collaborations[0].Title);
        console.log(collaborations[0].ImageLink);
      const filteredCollaborations = collaborations.filter(
        (collaboration) => collaboration.State
      );
  
      return (
        <>
          <main className="collaborations">
            <section className="collaborations-list">
              {filteredCollaborations.map((collaboration) => (
                <div
                  key={collaboration.Id}
                  id={`collaboration-${collaboration.Id}`}
                  className="collaboration"
                >
                  <Link
                    to={collaboration.CollaborationLink}
                    className="collaboration-link"
                  >
                    <h2>{collaboration.Title}</h2>
                    <figure>
                        <img src={collaboration.ImageLink} alt="" />
                    </figure>
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
}
