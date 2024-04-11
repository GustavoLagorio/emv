import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

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

  const { Title, Order, Images_Quantity, State } = form;

  useEffect(() => {
    const obtenerCollection = async () => {
      try {
        const response = await fetch(
          `https://pruebas-mvc.somee.com/api/collectionid?Id=${idCollection}`,
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

    obtenerCollection();
  }, []);

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
    // Actualiza el estado del formulario cuando los campos de entrada cambian
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //Ejecuta el envio del formulario al servidor
  const collectionSubmit = async (e) => {
    e.preventDefault();

    if (form.State === "on") {
      form.State = true;
    } else {
      form.State = false;
    }

    const updatedForm = {
      Id: collection.Id,
      Dischard_Date: collection.Dischard_Date,
      Title: form.Title.trim() || collection.Title,
      Description: form.Description.trim() || collection.Description,
      Order: form.Order.trim() || collection.Order,
      Images_Quantity:
        form.Images_Quantity.trim() || collection.Images_Quantity,
      State: form.State,
    };
    console.log(updatedForm);

    try {
      const response = await fetch(
        "https://pruebas-mvc.somee.com/Api/Collection",
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
        <h1>Collection Edit</h1>
        <form onSubmit={collectionSubmit} className="edit-form">
          <label>
            Title:
            <input
              type="text"
              value={Title}
              placeholder={collection.Title}
              name="Title"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              rows={4}
              placeholder={collection.Description}
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
                placeholder={collection.Order}
                name="Order"
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label className="img-quantity">
              Images Quantity:
              <input
                type="number"
                value={Images_Quantity}
                placeholder={collection.Images_Quantity}
                name="Images_Quantity"
                onChange={handleInputChange}
              />
            </label>
            <br />
          <label>
            <span>State:</span>
            <input
              type="checkbox"
              checked={State}
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
  }
};
