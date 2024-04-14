import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //* Aca irian las funciones , datos ,que queremos compartir entre componentes

  const auth = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        auth,
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
