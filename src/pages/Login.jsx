import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginButton from "../componentes/LoginButton";

export const Login = () => {
  return (
    <>
      <main className="login">
        <h1>WELCOME TO EMV</h1>
        <GoogleOAuthProvider clientId="309513572301-370vm8smlo8a0fe6sar6u0jaej0od3qk.apps.googleusercontent.com">
          <LoginButton />
        </GoogleOAuthProvider>
      </main>
    </>
  );
};
