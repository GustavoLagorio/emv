import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { User } from "../componentes/User";
import { Loading } from "../componentes/Loading";

export const EditCollection = () => {
  const { Id } = useParams();
  const idCollection = parseInt(Id);
  const [collection, setCollection] = useState(null);
  const [form, setForm] = useState({
    Title: "",
    Description: "",
    Order: "",
    Images_Quantity: "",
    State: "",
  });
  const [on, setOn] = useState("");
  const [checkValue, setCheckValue] = useState("");

  useEffect(() => {
    const obtenerCollection = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_COLLECTION_ID_DEV}${idCollection}`,
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
            setCollection(data);
            if (data.State) {
              console.log(data.State);
              setOn("on");
              setCheckValue("1")
            } else {
              console.log(data.State);
              setCheckValue("0")
            }
            setForm({
              Title: data.Title || "",
              Description: data.Description || "",
              Order: data.Order || "",
              Images_Quantity: data.Images_Quantity || "",
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

    obtenerCollection();
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
      title: "Colección editada",
      text: "La colección se ha actualizado correctamente.",
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
      text: "La colección no pudo ser actualizada.",
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: newValue });
  };

  //Ejecuta el envio del formulario al servidor
  const collectionSubmit = async (e) => {
    e.preventDefault();

    const updatedForm = {
      Id: collection.Id,
      Dischard_Date: collection.Dischard_Date,
      Title: (form.Title ?? "") || collection.Title,
      Description: (form.Description ?? ""),
      Order: (form.Order ?? "").toString() || collection.Order,
      Images_Quantity:
        (form.Images_Quantity ?? "").toString() ||
        collection.Images_Quantity,
      State: (form.State === undefined ? collection.State : form.State),
    };

    console.log(updatedForm);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_COLLECTION_DEV}`,
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

        //Si la respuesta es 200 navega hasta el menu de Bungalows para seguir trabajando
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
  if (collection) {
    return (
      <main className="edit-collection">
        <User/>
        <h1>Collection Edit</h1>
        <form onSubmit={collectionSubmit} className="edit-form">
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
          <label>
            Description:
            <textarea
              rows={4}
              value={form.Description}
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
                value={form.Order}
                name="Order"
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label className="img-quantity">
              Imgs Qty:
              <input
                type="number"
                value={form.Images_Quantity}
                placeholder={collection.Images_Quantity}
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
    <Loading />
  }
};
