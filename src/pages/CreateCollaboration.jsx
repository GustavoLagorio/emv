import { useState } from "react";
import Swal from "sweetalert2";
import { User } from "../componentes/User";

export const CreateCollaboration = () => {
  const [form, setForm] = useState({
    Title: "",
    Order: "",
    ImageLink: "",
    CollaborationLink: "",
    State: "",
  });
  const [on, setOn] = useState("");

  const { Title, ImageLink, CollaborationLink, Order, State } = form;

  const changeOn = () => {
    setOn((prevState) => (prevState === "on" ? "" : "on"));
    setForm((prevForm, prevState) => ({
      ...prevForm,
      State: prevState === true ? false : true,
    }));
  };

  const handleInputChange = (e) => {
    // Actualiza el estado del formulario cuando los campos de entrada cambian
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSuccess = () => {
    Swal.fire({
      title: "Colaboración creada",
      text: "La colaboración se ha creado correctamente.",
      confirmButtonText: "Ir al panel de colaboración",
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
      text: "La colaboracción no pudo ser creada.",
      confirmButtonText: "Ir al panel de colaboración",
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

  //Ejecuta el envio del formulario al servidor
  const collaborationSubmit = async (e) => {
    e.preventDefault();

    if (form.State === "on") {
      form.State = true;
    } else {
      form.State = false;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_COLLABORATION_DEV}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
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
        console.error("Fallo la creacion de la colaboración");
        return;
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      handleFail();
    }
  };
  return (
    <main className="create-collaboration">
      <User />
      <h1>Collaboration Creation</h1>
      <form onSubmit={collaborationSubmit} className="create-form">
        <label>
          Title:
          <input
            type="text"
            value={Title}
            required={true}
            placeholder="Título de la colección"
            name="Title"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Img Collab:
          <input
            type="text"
            required={true}
            placeholder="Link de la Imagen"
            name="Img Collab"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Collab Link:
          <input
            placeholder="Link a la colaboración"
            name="Colaboración"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <div className="collab-control">
          <label>
            Order:
            <input
              type="number"
              value={Order}
              required={true}
              placeholder="Orden de lista"
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
};
