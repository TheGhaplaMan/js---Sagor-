import React from "react";
import { Container, Dropdown } from "react-bootstrap";
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
              <Link to="/" className="text_link text-light">
                {text}
              </Link>
            </div>

            <div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FaUserAlt />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Navigation;
