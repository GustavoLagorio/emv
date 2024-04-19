import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

const LoginButton = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const handleSuccess = (response) => {
    console.log(response);
    const decodedToken = jwtDecode(response.credential);
    console.log(decodedToken);

    if (
      decodedToken.email == import.meta.env.VITE_MAIL_CLIENT ||
      decodedToken.email == import.meta.env.VITE_MAIL_FRONT ||
      decodedToken.email == import.meta.env.VITE_MAIL_BACK ||
      decodedToken.email == import.meta.env.VITE_MAIL_DESIGN
    ) {
      const userMeta = decodedToken.email;
      localStorage.setItem("userMeta", userMeta);
      auth();
      navigate("/admin-panel");
    } else {
      Swal.fire({
        title: "Acceso denegado.",
        text: "El usuario no tiene permitido acceder al sistema.",
        confirmButtonText: "Cerrar",
        allowOutsideClick: false,
        customClass: {
          container: "my-swal-modal-container",
          title: "my-swal-modal-title",
          content: "my-swal-modal-content",
          confirmButton: "button",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
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
        onError={() => {
          console.log("Error de login");
        }}
      />
    </>
  );
};

export default LoginButton;
