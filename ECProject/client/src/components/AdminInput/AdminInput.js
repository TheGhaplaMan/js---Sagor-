import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./AdminInput.scss";

const AdminInput = ({ text }) => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setInfo({ [name]: value });
  };

  //   after clicking on button
  const formSubmit = (e) => {
    e.preventDefault();
  };

  //   api call to backend like this
  const postMethod = async () => {
    const { email, password } = info;

    const res = await fetch("post method routes link hobe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    // setMain(data);

    if (!data) {
      console.log(data);
    }
  };

  useEffect(() => {
    postMethod();
  }, []);

  return (
    <>
      <section id="adminInput">
        <Container>
          <Row>
            <Col xl={4} className="mx-auto">
              <h2 className="text-center mb-5">{text}</h2>
              <Form onSubmit={formSubmit}>
                <Form.Group
                  className="mb-3"
                  name="email"
                  value={info.email}
                  onChange={handleChange}
                >
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={info.password}
                    onChange={handleChange}
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
