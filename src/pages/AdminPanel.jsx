import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AdminPanel = () => {
  const [collections, setCollections] = useState(null);

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

  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Desea eliminar la colección de la base de datos?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      customClass: {
        container: "my-swal-modal-container",
        title: "my-swal-modal-title",
        confirmButton: "button",
        cancelButton: "button"
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      }
    });
  }

  const handleSuccess = () => {
    Swal.fire({
      title: "Colección eliminada",
      text: "La colección se ha eliminado correctamente.",
      confirmButtonText: "Ir al panel de administración",
      allowOutsideClick: false,
      customClass: {
        container: "my-swal-modal-container",
        title: "my-swal-modal-title",
        content: "my-swal-modal-content",
        confirmButton: "button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/admin-panel";
      }
    });
  };

  const handleFail = () => {
    Swal.fire({
      title: "Solicitud fallida",
      text: "La colección no pudo ser eliminada.",
      confirmButtonText: "Ir al panel de administración",
      allowOutsideClick: false,
      customClass: {
        container: "my-swal-modal-container",
        title: "my-swal-modal-title",
        content: "my-swal-modal-content",
        confirmButton: "button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/admin-panel";
      }
    });
  };

  const handleDelete = async (id) => {
    const collectionDelete = {
      Id: id
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_COLLECTION_DEV}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(collectionDelete),
        }
      );

      if (response.status === 200) {
        console.log(response);
        handleSuccess();
        return;
      } else {
        console.log(response);
        handleFail();

        //Si falla por algun motivo navega al login para reloguear
        console.error("Fallo la eliminacion de la colección");
        return;
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      handleFail();
    }
  };

  return (
    <>
      <main className="admin-panel">
        <div className="admin-title">
          <h1>DASHBOARD</h1>
        </div>

        <section className="command-create">
          <Link className="btn-command" as={Link} to={`/admin-panel/create`}>
            Create new Collection
          </Link>
        </section>

        <div className="collections-list">
          <h2>Modify or delete collections</h2>
          {collections &&
            collections.map((collection) => (
              <div
                key={collection.Id}
                id={`collection-${collection.Id}`}
                className="collection"
              >
                <h3>{collection.Title}</h3>
                <ul className="command-list">
                  <li className="command-item">
                    <Link
                      className="button"
                      as={Link}
                      to={`/admin-panel/edit/${collection.Id}`}
                    >
                      Edit
                    </Link>
                  </li>
                  <li className="command-item">
                    <button className="button" onClick={() => confirmDelete(collection.Id)}>Delete</button>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};
