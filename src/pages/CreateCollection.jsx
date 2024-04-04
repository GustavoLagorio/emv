import { useState } from "react";

export const CreateCollection = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [order, setOrder] = useState("");
  const [photos, setPhotos] = useState(0);
  const [state, setState] = useState("Pendiente");

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date().toLocaleDateString();
    // Aquí puedes realizar las acciones necesarias con los datos del formulario
    console.log({
      title,
      description,
      order,
      photos,
      state,
      date,
    });
    // Puedes enviar los datos a un servidor, guardarlos localmente, etc.
  };
  return (
    <main className="create-collection">
      <form onSubmit={handleSubmit} className="create-form">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <br />
        <label>
          Number of order:
          <input
            type="text"
            value={order}
            onChange={(event) => setOrder(event.target.value)}
          />
        </label>
        <br />
        <label>
          Number of photos:
          <input
            type="number"
            value={photos}
            onChange={(event) => setPhotos(parseInt(event.target.value))}
          />
        </label>
        <br />
        <label>
          State:
          <select
            value={state}
            onChange={(event) => setState(event.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Disable">Disable</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
