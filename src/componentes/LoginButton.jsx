import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

const LoginButton = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const handleSuccess = (response) => {
    console.log(response);
    const decodedToken = jwtDecode(response.credential);
    console.log(decodedToken);

    if (decodedToken.email == import.meta.env.VITE_MAIL_CLIENT 
      || decodedToken.email == import.meta.env.VITE_MAIL_FRONT
      || decodedToken.email == import.meta.env.VITE_MAIL_BACK
      || decodedToken.email == import.meta.env.VITE_MAIL_DESIGN) {
      auth();
      navigate("/admin-panel");
    }
  };

  return (
    <>
      <GoogleLogin
        theme="filled_black"
        size="medium"
        shape="square"
        logo_alignment="center"
        width={300}
        onSuccess={handleSuccess}
        onFailure={() => {
          console.log("Login Fail");
        }}
      />
    </>
  );
};

export default LoginButton;
