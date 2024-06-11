import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { User } from "../componentes/User";
import { Loading } from "../componentes/Loading";

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
      title: "¿Desea eliminar la colección de la lista?",
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
      Id: id,
    };
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

  if (collections) {
    return (
      <>
        <main className="admin-panel">
          <User />
          <div className="admin-title">
            <h1>DASHBOARD</h1>
          </div>

          <section className="manage-content">
            <Link className="btn-command" as={Link} to={`/admin-panel/collections`}>
              Manage Collections
            </Link>
            <Link className="btn-command" as={Link} to={`/admin-panel/collaborations`}>
              Manage Collaborations
            </Link>
          </section>
        </main>
      </>
    );
  } else {
    return (
      <Loading />
    )
  }
};
