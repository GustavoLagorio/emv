import React, { useState, useEffect, useRef } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Logo } from "./Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lock, setLock] = useState(false);
  const [activeNavbar, setActiveNavar] = useState(false)

  const toggleScrollLock = (lock) => {
    document.body.classList.toggle("scroll-lock", lock);
  };

  useEffect(() => {
    toggleScrollLock(lock);
  }, [lock]);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setLock(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    if (lock) {
      setLock(false);
    } else {
      setLock(true);
    }
  };

  useEffect(() => {
    const navbarIsOpen = () => {

      if(isOpen) {
        setActiveNavar(true);
      } else {
        setActiveNavar(false);
      }
    }
    navbarIsOpen();
  }, [isOpen])
  const handleToggleMouseDown = (event) => {
    event.stopPropagation(); // Evitar que el evento llegue al contenedor exterior
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
    setLock(false);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="false"
        className={`custom-navbar ${scrollPosition === 0 ? "opaque" : ""} ${activeNavbar === true ? "nav-activa" : ""}`}
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
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path d="M5 5L19 19">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      dur="0.4s"
                      values="M5 5L19 19;M5 5L19 5"
                    />
                  </path>
                  <path d="M12 12H12" opacity="0">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      begin="0.2s"
                      dur="0.4s"
                      values="M12 12H12;M5 12H19"
                    />
                    <set attributeName="opacity" begin="0.2s" to="1" />
                  </path>
                  <path d="M5 19L19 5">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      dur="0.4s"
                      values="M5 19L19 5;M5 19L19 19"
                    />
                  </path>
                </g>
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
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path d="M5 5L19 5">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      begin="0.2s"
                      dur="0.4s"
                      values="M5 5L19 5;M5 5L19 19"
                    />
                  </path>
                  <path d="M5 12H19">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      dur="0.4s"
                      values="M5 12H19;M12 12H12"
                    />
                    <set attributeName="opacity" begin="0.4s" to="0" />
                  </path>
                  <path d="M5 19L19 19">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      begin="0.2s"
                      dur="0.4s"
                      values="M5 19L19 19;M5 19L19 5"
                    />
                  </path>
                </g>
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
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="4rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19V5"
                />
              </svg>
            </span>
            HOME
          </NavLink>
          <NavLink
            as={NavLink}
            to="/services"
            onClick={handleNavLinkClick}
            reloadDocument
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="4rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19V5"
                />
              </svg>
            </span>
            SERVICES
          </NavLink>
          <NavLink
            as={NavLink}
            to="/collections"
            onClick={handleNavLinkClick}
            reloadDocument
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="4rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19V5"
                />
              </svg>
            </span>
            COLLECTIONS
          </NavLink>
          <NavLink
            as={NavLink}
            to="/about"
            onClick={handleNavLinkClick}
            reloadDocument
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="4rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19V5"
                />
              </svg>
            </span>
            ABOUT
          </NavLink>
          <NavLink
            as={NavLink}
            to="/contact"
            onClick={handleNavLinkClick}
            reloadDocument
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="4rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19V5"
                />
              </svg>
            </span>
            CONTACT
          </NavLink>
          <NavLink
            as={Link}
            to="https://www.youtube.com/channel/UCi_cFUXozrRO66erzOTH7Uw"
            onClick={handleNavLinkClick}
            target="_blank"
            className="inactive"
          >
            YOUTUBE
          </NavLink>
        </Nav>
      </div>
    </>
  );
}

export default Header;
