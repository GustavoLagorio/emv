import { Outlet } from "react-router-dom";
//import Header from "./HeaderB";
import Header from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
