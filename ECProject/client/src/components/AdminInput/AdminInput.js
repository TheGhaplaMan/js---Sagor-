import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./AdminInput.scss";

const AdminInput = ({ text }) => {
  const [info, setInfo] = useState({
    email: "",
    pass: "",
  });

  const eventChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);

    setInfo({ ...info, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const { email, pass } = info;

    const res = await fetch(
      "http://theghaplaman.herokuapp.com/api/v1/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          pass,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <section id="adminInput">
        <Container>
          <Row>
            <Col xl={4} className="mx-auto">
              <h2 className="text-center mb-5">{text}</h2>
              <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3 shadow py-2">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    value={info.email}
                    name="email"
                    onChange={eventChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3 shadow py-2">
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={info.pass}
                    onChange={eventChange}
                  />
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" className="btnStyle text-black fw-bold">
                    Login
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminInput;
