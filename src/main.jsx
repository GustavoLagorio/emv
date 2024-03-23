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
import { Error404 } from "./pages/Error404";
import { Layout } from "./componentes/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/collections",
        element: <Collections />,
        errorElement: <Error404 />,
      },
      {
        path: "/collections/:Id",
        element: <Collection />,
        errorElement: <Error404 />,
      },
      {
        path: "/services",
        element: <Services />,
        errorElement: <Error404 />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error404 />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
