import { useState } from "react";

export const Contact = () => {
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
      <main className="contact">
        <div className="contact-hero">
        <h1 className="contact-hero-title">Ezequiel Vieta</h1>
          <img
            src="https://s3-alpha-sig.figma.com/img/e04e/7314/26860c4d15db58011ead5b7d3d8e7409?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BDY9VoDphJLGV5dQNWZRJCPIoEsougFIKacPZuUd-JwNXmmSLMyyNaYRLG-R1O5gmWBIMQMp8Wi9aJz1O2iVuh6X1vfY1GGJ2oD5cs26QyE2lQrfNQmSzHRoHFLNkzroZB04aPdQ1eDZ27-NYKCDsbvOUf3lL19ZgG5hipaJ8-k67Ad5wiqN0dbW4Sm-mYi7I~rhN7WtutKNzJiiFHsEqc5X-7uiexVTNR0t3ogrDpydI-egmVycR4SAhmNFeCeLIGF657VMh5OktYcggedv2-60SqalQmO7CEPEUwgrLzKZcF3Cp9OZliBN9BNZvuI3Vtc6lAMX-TU~jKOolK1hvQ__"
            alt=""
          />
        </div>
        <h2>CONTACT</h2>
        <section className="contact-form">
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
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </>
  );
};
