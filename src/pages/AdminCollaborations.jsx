import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { User } from "../componentes/User";
import { Loading } from "../componentes/Loading";

export const AdminCollaborations = () => {
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
          }
        } else {
          console.error("Error al obtener el token:", response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    };

    obtenerCollaborations();
  }, []);

  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Desea eliminar la colaboración de la lista?",
      showCancelButton: true,
      allowEnterKey: false,
      confirmButtonColor: "#ed3b3b",
      cancelButtonColor: "#212121",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      customClass: {
        container: "my-swal-modal-container",
        title: "my-swal-modal-title",
        confirmButton: "button",
        cancelButton: "button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      }
    });
  };

  const handleSuccess = () => {
    Swal.fire({
      title: "Colaboración eliminada",
      text: "La colaboración se ha eliminado correctamente.",
      confirmButtonText: "Ir al panel de colaboraciones",
      allowOutsideClick: false,
      customClass: {
        container: "my-swal-modal-container",
        title: "my-swal-modal-title",
        content: "my-swal-modal-content",
        confirmButton: "button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/admin-panel/collaborations";
      }
    });
  };

  const handleFail = () => {
    Swal.fire({
      title: "Solicitud fallida",
      text: "La colaboración no pudo ser eliminada.",
      confirmButtonText: "Ir al panel de colaboraciones",
      allowOutsideClick: false,
      customClass: {
        container: "my-swal-modal-container",
        title: "my-swal-modal-title",
        content: "my-swal-modal-content",
        confirmButton: "button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/admin-panel/collaborations";
      }
    });
  };

  const handleDelete = async (id) => {
    const collaborationDelete = {
      Id: id,
    };
    console.log(collaborationDelete);
    console.log(JSON.stringify(collaborationDelete));
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_COLLABORATION_DEV}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(collaborationDelete),
        }
      );

      if (response.status === 200) {
        handleSuccess();
        return;
      } else {
        console.log(response);
        handleFail();

        //Si falla por algun motivo navega al login para reloguear
        console.error("Fallo la eliminacion de la colaboración");
        return;
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      handleFail();
    }
  };

  const previousPage = () => {
    window.location.href = "/admin-panel";
  };

  if (collaborations) {
    return (
      <>
        <main className="admin-panel">
          <User />
          <div className="admin-title">
            <h1>COLLABORATIONS</h1>
            <span>
              <button className="back-button" onClick={() => previousPage()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4rem"
                  height="4rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06"
                  />
                </svg>
              </button>
            </span>
          </div>
          <section className="command-create">
            <Link
              className="btn-command"
              as={Link}
              to={`/admin-panel/collaborations/create`}
            >
              Create new Collaboration
            </Link>
          </section>

          <div className="collaborations-list">
            <h2>Modify or delete collaborations</h2>
            {collaborations &&
              collaborations.map((collaboration) => (
                <div
                  key={collaboration.Id}
                  id={`collaboration-${collaboration.Id}`}
                  className="collaboration"
                >
                  <h3>{collaboration.Title}</h3>
                  <ul className="command-list">
                    <li className="command-item">
                      <Link
                        className="button"
                        as={Link}
                        to={`/admin-panel/collaborations/edit/${collaboration.Id}`}
                      >
                        Edit
                      </Link>
                    </li>
                    <li className="command-item">
                      <button
                        className="button"
                        onClick={() => confirmDelete(collaboration.Id)}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </main>
      </>
    );
  } else {
    return <Loading />;
  }
};
