import { useState } from "react";

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

  //Manejo del submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos obligatorios
    if (!formData.email || !formData.message) {
      setError("Email y message son campos obligatorios.");
      return;
    }

    // Sanitización de datos
    const sanitizedFormData = {
      ...formData,
      name: formData.name.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    // Aquí puedes enviar los datos al backend o hacer lo que necesites con ellos
    console.log("Datos enviados:", sanitizedFormData);

    // Reiniciar el formulario y limpiar el error
    setFormData({
      name: "",
      lastName: "",
      email: "",
      message: "",
    });
    setError("");
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
