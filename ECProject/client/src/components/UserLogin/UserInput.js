import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./UserInput.scss";

const UserInput = ({ text }) => {
  return (
    <>
      <section id="userInput">
        <Container>
          <Row>
            <Col xl={4} className="mx-auto">
              <h2 className="text-center mb-5">{text}</h2>
              <Form>
                <Form.Group className="mb-3 shadow py-2" name="NID">
                  <Form.Control type="number" placeholder="NID" />
                </Form.Group>
                <Form.Group className="mb-3 shadow py-2">
                  <Form.Control
                    type="text"
                    placeholder="Phone No"
                    name="PhoneNo"
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

export default UserInput;
