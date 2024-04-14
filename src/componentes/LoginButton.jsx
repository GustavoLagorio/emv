import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginButton = () => {
  const navigate = useNavigate();

  const { auth } = useAuth();

  const handleSuccess = () => {
    auth();
    navigate("/admin-panel");
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
