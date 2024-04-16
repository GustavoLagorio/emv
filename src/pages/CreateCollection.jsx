import { useState } from "react";
import Swal from "sweetalert2";
import { User } from "../componentes/User";

export const CreateCollection = () => {
  const [form, setForm] = useState({
    Title: "",
    Description: "",
    Order: "",
    Images_Quantity: "",
    State: "",
  });
  const [on, setOn] = useState("");

  const { Title, Description, Order, Images_Quantity, State } = form;

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
      title: "Colección creada",
      text: "La colección se ha creado correctamente.",
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
      text: "La colección no pudo ser creada.",
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

  //Ejecuta el envio del formulario al servidor
  const collectionSubmit = async (e) => {
    e.preventDefault();

    if (form.State === "on") {
      form.State = true;
    } else {
      form.State = false;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_COLLECTION_DEV}`,
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
        console.error("Fallo la creacion de la colección");
        return;
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      handleFail();
    }
  };
  return (
    <main className="create-collection">
      <User />
      <h1>Collection Creation</h1>
      <form onSubmit={collectionSubmit} className="create-form">
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
          Description:
          <textarea
            rows={4}
            value={Description}
            placeholder="Descripción de la colección"
            name="Description"
            resize="none"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <div className="form-numbers">
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
            Imgs Qty:
            <input
              type="number"
              value={Images_Quantity}
              required={true}
              placeholder="N° de imágenes"
              name="Images_Quantity"
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
