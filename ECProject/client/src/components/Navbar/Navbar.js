import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import "./Navbar.scss";

import { Link } from "react-router-dom";

const Navigation = ({ text }) => {
  return (
    <>
      <header id="header" className="py-3">
        <Container>
          <div className="d-flex justify-content-between">
            <div className="mx-auto">
              <Link to="/dashboard" className="text_link text-light">
                {text}
              </Link>
            </div>

            <div>
              <FaUserAlt />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Navigation;
