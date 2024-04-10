import { useState } from "react";

export const CreateCollection = () => {
  const [form, setForm] = useState({
    Title: "",
    Description: "",
    Order: "",
    Images_Quantity: "",
    State: "",
  });

  const { Title, Description, Order, Images_Quantity, State } = form;

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
    console.log(form);

    try {
      const response = await fetch(
        "https://pruebas-mvc.somee.com/Api/Collection",
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

        //Si la respuesta es 200 navega hasta el menu de Bungalows para seguir trabajando
        return;
      } else {
        console.log(response);

        //Si falla por algun motivo navega al login para reloguear
        console.error("Inicio de sesión fallido");
        return;
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };
  return (
    <main className="create-collection">
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
        <label>
          Number of Order:
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
          Number of Images Quantity:
          <input
            type="number"
            value={Images_Quantity}
            required={true}
            placeholder="Cantidad de imágenes"
            name="Images_Quantity"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          State:
          <input
            type="checkbox"
            checked={State}
            onChange={handleInputChange}
            name="State"
          />
          <p>(Check if you want the collection to be active.)</p>
        </label>
        <br />
        <button type="submit" className="button" resize="none">Submit</button>
      </form>
    </main>
  );
};
