import React, { useState, useEffect, useRef } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Logo } from "./Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleToggleMouseDown = (event) => {
    event.stopPropagation(); // Evitar que el evento llegue al contenedor exterior
  };

  const handleNavLinkClick = () => {
    setIsOpen(false); // Cerrar el menú del sidebar al hacer clic en un enlace
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="false"
        className={`custom-navbar ${scrollPosition === 0 ? 'opaque' : ''}`}
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" reloadDocument>
              <Logo color="black" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleToggleClick}
            onMouseDown={handleToggleMouseDown}
          >
            {/* SVG para el menú cerrado */}
            {!isOpen && (
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="4rem"
                height="4rem"
                viewBox="0 0 24 24"
              >
                {/* omitido para brevedad */}
              </svg>
            )}

            {/* SVG para el menú abierto */}
            {isOpen && (
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="4rem"
                height="4rem"
                viewBox="0 0 24 24"
              >
                {/* omitido para brevedad */}
              </svg>
            )}
          </Navbar.Toggle>
        </Container>
      </Navbar>

      <div ref={containerRef} className={`sidebar ${isOpen ? "show" : ""}`}>
        <Nav defaultActiveKey="collections" className="flex-column nav-menu">
          {/* omitido para brevedad */}
        </Nav>
        <div className="nav-menu-logo">
          <Logo color="black" />
        </div>
      </div>
    </>
  );
}

export default Header;
