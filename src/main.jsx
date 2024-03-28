import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { ScrollTop } from "./componentes/ScrollTop";

import { Home } from "./pages/Home";
import { Collections } from "./pages/Collections";
import { Collection } from "./pages/Collection";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { AdminPanel } from "./pages/AdminPanel";
import { CreateCollection } from './pages/CreateCollection';
import { EditCollection } from './pages/EditCollection';
import { Error404 } from "./pages/Error404";
import { Layout } from "./componentes/Layout";
import { LayoutHome } from "./componentes/LayoutHome"

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />, // Usa el diseño alternativo aquí para la ruta /
    children: [
      {
        index: true,
        element: <Home />, // Carga el componente Home dentro del diseño alternativo
      },
    ],
  },
  {
    path: "/", // Ruta principal que carga el Layout original para el resto de las páginas
    element: <Layout />,
    children: [
      {
        path: "collections",
        element: <Collections />,
        errorElement: <Error404 />,
      },
      {
        path: "collections/:Id",
        element: <Collection />,
        errorElement: <Error404 />,
      },
      {
        path: "services",
        element: <Services />,
        errorElement: <Error404 />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error404 />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Error404 />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error404 />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        errorElement: <Error404 />,
      },
      {
        path: "admin-panel/create",
        element: <CreateCollection />,
        errorElement: <Error404 />,
      },
      {
        path: "admin-panel/edit/:Id",
        element: <EditCollection />,
        errorElement: <Error404 />,
      },      
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router}>
      <ScrollTop />
    </RouterProvider>
  </StrictMode>
);
