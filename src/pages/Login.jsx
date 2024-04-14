import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginButton from "../componentes/LoginButton";

export const Login = () => {

  const googleKey = `${import.meta.env.VITE_GOOGLE_KEY}`;

  return (
    <>
      <main className="login">
        <h1>WELCOME TO EMV</h1>
        <GoogleOAuthProvider clientId={googleKey}>
          <LoginButton />
        </GoogleOAuthProvider>
      </main>
    </>
  );
};
