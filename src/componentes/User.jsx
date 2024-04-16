import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const User = () => {
  const user = localStorage.getItem("userMeta");
  const { logout } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("userMeta");
    logout();
    useNavigate('/login')
  };

  return (
    <div className="admin-user">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-user"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
      </span>
      <span>{user}</span>
      <span>
        <button className="logout" onClick={handleLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-logout-2"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
            <path d="M15 12h-12l3 -3" />
            <path d="M6 15l-3 -3" />
          </svg>
        </button>
      </span>
    </div>
  );
};
