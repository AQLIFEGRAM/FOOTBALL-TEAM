import React from "react";
// import { IoFootballOutline } from "react-icons/io5";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  const navLinks = [
    {
      text: "Home",
      link: "/",
    },
    // {
    //   text: "Teams",
    //   link: "/teams",
    // },
    {
      text: "Players",
      link: "/players",
    },
    {
      text: "Team Details",
      link: "/teamDetails",
    },
  ];
  return (
    <Navbar className="bannerimg">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "black",fontWeight:"25px" }}>
          Football Teams
          {/* <IoFootballOutline className="icon" /> */}
        </Navbar.Brand>

        <Nav className="me-auto">
          {navLinks.map((nav) => {
            return (
              <span style={{ marginRight: "1rem" }}>
                <Link to={nav.link} className="link">
                  {nav.text}
                </Link>
              </span>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
}
