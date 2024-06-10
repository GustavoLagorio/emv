import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ScrollTop } from "./componentes/ScrollTop";
import { AuthProvider } from "./context/authProvider";

import { Home } from "./pages/Home";
import { Collections } from "./pages/Collections";
import { Collection } from "./pages/Collection";
import { Collaborations } from "./pages/Collaborations";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Terms } from "./pages/Terms";
import { Login } from "./pages/Login";
import { AuthAdminPanel } from "./authRoutes/AuthAdminPanel";
import { AuthAdminCollections } from "./authRoutes/AuthAdminCollections";
import { AuthCreateCollection } from "./authRoutes/AuthCreateCollection";
import { AuthEditCollection } from "./authRoutes/AuthEditCollection";
import { AuthAdminCollaborations } from "./authRoutes/AuthAdminCollaborations";
import { AuthCreateCollaboration } from "./authRoutes/AuthCreateCollaboration";
import { AuthEditCollaboration } from "./authRoutes/AuthEditCollaboration";
import { Error404 } from "./pages/Error404";
import { Layout } from "./componentes/Layout";
import { LayoutHome } from "./componentes/LayoutHome";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "collections",
        element: <Collections />,
        errorElement: <Error404 />,
      },
      {
        path: "collaborations",
        element: <Collaborations />,
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
        path: "privacy-policy",
        element: <Terms />,
        errorElement: <Error404 />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error404 />,
      },
      {
        path: "admin-panel",
        element: <AuthAdminPanel/>,
        errorElement: <Error404 />,
      },
      {
        path: "admin-panel/collections",
        element: <AuthAdminCollections />,
        errorElement: <Error404 />,
      },
      {
        path: "admin-panel/collections/create",
        element: <AuthCreateCollection />,
        errorElement: <Error404 />,
      },
      {
        path: "admin-panel/collections/edit/:Id",
        element: <AuthEditCollection />,
        errorElement: <Error404 />,
      },
      {
        path: "admin-panel/collaborations",
        element: <AuthAdminCollaborations />,
        errorElement: <Error404 />,
      },
      {
        path: "admin-panel/collaborations/create",
        element: <AuthCreateCollaboration />,
        errorElement: <Error404 />,
      },
      {
        path: "admin-panel/collaborations/edit/:Id",
        element: <AuthEditCollaboration />,
        errorElement: <Error404 />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} fallbackElement="Cargando...">
        <ScrollTop />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
);
