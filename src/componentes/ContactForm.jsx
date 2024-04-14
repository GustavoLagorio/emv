import { useState } from "react";
import Swal from "sweetalert2";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  //Detectamos cambios en los campos
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSuccess = () => {
    Swal.fire({
      title: "Mensaje enviado",
      text: "Tu mensaje fue enviado con exito",
      confirmButtonText: "Cerrar",
      allowOutsideClick: false,
      customClass: {
        container: "my-swal-modal-container",
        title: "my-swal-modal-title",
        content: "my-swal-modal-content",
        confirmButton: "button",
      },
    });
  };

  const handleFail = () => {
    Swal.fire({
      title: "Algo salio mal",
      text: "El mensaje no pudo ser enviado, intenta mas tarde.",
      confirmButtonText: "Cerrar",
      allowOutsideClick: false,
      customClass: {
        container: "my-swal-modal-container",
        title: "my-swal-modal-title",
        content: "my-swal-modal-content",
        confirmButton: "button",
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos obligatorios
    if (!formData.email || !formData.message) {
      setError("Email y message son campos obligatorios.");
      return;
    }

    // Sanitización de datos
    const sanitizedFormData = {
      ...formData,
      Name: formData.name.trim(),
      Last_Name: formData.lastName.trim(),
      Email: formData.email.trim(),
      Message: formData.message.trim(),
    };

    // Reiniciar el formulario y limpiar el error
    setFormData({
      name: "",
      lastName: "",
      email: "",
      message: "",
    });
    setError("");

    try {
      const response = await fetch(
        `${importa.meta.env.VITE_API_CONTACT_DEV}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sanitizedFormData),
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
        console.error("Fallo del mensaje en el servidor");
        return;
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      handleFail();
    }
  };
  return (
    <>
      <section className="contact-form">
        <h2>CONTACT</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div>
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div>
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="form-label">Message:</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
          </div>
          <button className="button" type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};
