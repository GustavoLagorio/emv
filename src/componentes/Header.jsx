import React, { useState, useEffect, useRef } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/Logo1.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
        className="custom-navbar fixed-top"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" reloadDocument>
              <img
                src={Logo}
                height="100%"
                className="d-inline-block align-top"
                alt="Logo"
              />
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
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2"
                height="100%"
                viewBox="0 0 24 24"
                strokeWidth="0.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            )}

            {/* SVG para el menú abierto */}
            {isOpen && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-letter-x"
                height="100%"
                viewBox="0 0 24 24"
                strokeWidth="0.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 4l10 16" />
                <path d="M17 4l-10 16" />
              </svg>
            )}
          </Navbar.Toggle>
        </Container>
      </Navbar>

      <div ref={containerRef} className={`sidebar ${isOpen ? "show" : ""}`}>
        <Nav defaultActiveKey="collections" className="flex-column nav-menu">
          <NavLink
            as={NavLink}
            to="/"
            onClick={handleNavLinkClick}
            reloadDocument
          >
            HOME
          </NavLink>
          <NavLink
            as={NavLink}
            to="/services"
            onClick={handleNavLinkClick}
            reloadDocument
          >
            SERVICES
          </NavLink>
          <NavLink
            as={NavLink}
            to="/collections"
            onClick={handleNavLinkClick}
            reloadDocument
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            as={NavLink}
            to="/about"
            onClick={handleNavLinkClick}
            reloadDocument
          >
            ABOUT
          </NavLink>
          <NavLink
            as={NavLink}
            to="/contact"
            onClick={handleNavLinkClick}
            reloadDocument
          >
            CONTACT
          </NavLink>
          <NavLink
            href="https://www.youtube.com/channel/UCi_cFUXozrRO66erzOTH7Uw"
            onClick={handleNavLinkClick}
            target="_blank"
            className="inactive"
          >
            YOUTUBE
          </NavLink>
        </Nav>
        <div className="nav-menu-logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Header;
