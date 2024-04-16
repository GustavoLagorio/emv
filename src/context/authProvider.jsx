import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialLoggedInState = localStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState);
  //* Aca irian las funciones , datos ,que queremos compartir entre componentes

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const auth = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        auth,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;

//* almacena y modifica el valor de isLoggedin segun el caso
//* recomendado : crear el archivo en authProvider.jsx en la carpeta context
//* modo de uso : <authProvider>
//*             :    <App/> o un Componente de Alto Orden (HOC)
//*               </authProvider>
//*
//*
//* Recomendado usar el snippet hookcontext , para usar solamente el hook
//* nos evitamos importar useContext , authContext y usar useContext(authContext)
//* cada vez que querramos usar un dato, con el hook usaremos:,

//*  import useauth from '<rutaDelHook/useauth'
//*
//* const {dato a sacar del context o funcion} = useauth()

//* en la carpeta /hooks/useauth()****
