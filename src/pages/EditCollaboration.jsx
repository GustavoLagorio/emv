import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { User } from "../componentes/User";
import { Loading } from "../componentes/Loading";

export const EditCollaboration = () => {
  const { Id } = useParams();
  const idCollaboration = parseInt(Id);
  const [collaboration, setCollaboration] = useState(null);
  const [form, setForm] = useState({
    Title: "",
    Order: "",
    ImageLink: "",
    CollaborationLink: "",
    State: "",
  });
  const [on, setOn] = useState("");
  const [checkValue, setCheckValue] = useState("");

  useEffect(() => {
    const obtenerCollaboration = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_COLLABORATION_ID_DEV}${idCollaboration}`,
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
            setCollaboration(data);
            if (data.State) {
              console.log(data.State);
              setOn("on");
              setCheckValue("1");
            } else {
              console.log(data.State);
              setCheckValue("0");
            }
            setForm({
              Title: data.Title || "",
              ImageLink: data.ImageLink || "",
              CollaborationLink: data.CollaborationLink || "",
              Order: data.Order || "",
            });
            if (data.State) {
              setOn("on");
            }
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

    obtenerCollaboration();
  }, []);

  const changeOn = () => {
    setOn((prevState) => (prevState === "on" ? "" : "on"));
    setCheckValue((prevState) => (prevState === "1" ? "0" : "1"));
    setForm((prevForm, prevState) => ({
      ...prevForm,
      State: prevState === true ? false : true,
    }));
  };

  const handleSuccess = () => {
    Swal.fire({
      title: "Colaboración editada",
      text: "La colaboración se ha actualizado correctamente.",
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
      text: "La colaboración no pudo ser actualizada.",
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: newValue });
  };

  //Ejecuta el envio del formulario al servidor
  const collaborationSubmit = async (e) => {
    e.preventDefault();

    const updatedForm = {
      Id: collaboration.Id,
      Title: (form.Title ?? "") || collaboration.Title,
      ImageLink: (form.ImageLink ?? "") || collaboration.ImageLink,
      CollaborationLink:
        (form.CollaborationLink ?? "") || collaboration.CollaborationLink,
      Order: (form.Order ?? "").toString() || collaboration.Order,
      State: form.State === undefined ? collaboration.State : form.State,
    };

    console.log(updatedForm);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_COLLABORATION_DEV}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedForm),
        }
      );

      if (response.status === 200) {
        console.log(response);
        handleSuccess();

        return;
      } else {
        handleFail();
        console.log(response);

        //Si falla por algun motivo navega al login para reloguear
        console.error("Inicio de sesión fallido");
        return;
      }
    } catch (error) {
      handleFail();
      console.error("Error al enviar los datos:", error);
    }
  };
  if (collaboration) {
    return (
      <main className="edit-collaboration">
        <User />
        <h1>Collaboration Edit</h1>
        <form onSubmit={collaborationSubmit} className="edit-form">
          <label>
            Title:
            <input
              type="text"
              value={form.Title}
              name="Title"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label className="img-link">
            Img Link:
            <input
              type="text"
              placeholder={collaboration.ImageLink}
              name="ImageLink"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label className="collab-link">
            Collab Link:
            <input
              type="text"
              placeholder={collaboration.CollaborationLink}
              name="CollaborationLink"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <div className="collab-control">
            <label>
              Order:
              <input
                type="number"
                value={form.Order}
                name="Order"
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              <span>State:</span>
              <input
                onClick={changeOn}
                type="checkbox"
                value={checkValue}
                checked={on}
                onChange={handleInputChange}
                name="State"
              />
            </label>
          </div>
          <br />
          <button type="submit" className="button" resize="none">
            Submit
          </button>
        </form>
      </main>
    );
  } else {
    <Loading />;
  }
};
