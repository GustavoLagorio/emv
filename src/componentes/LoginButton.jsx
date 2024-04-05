import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const LoginButton = () => {
  const handleLogin = (response) => {
    // Aquí puedes manejar la respuesta de inicio de sesión
    console.log(response);
    if (response.success) {
      console.log("Inicio de sesión exitoso");
    } else {
      console.log("Inicio de sesión fallido");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleLogin}
      onFailure={handleLogin}
    />
  );
};

export default LoginButton;
