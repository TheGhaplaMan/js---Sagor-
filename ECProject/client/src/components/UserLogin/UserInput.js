import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import RedButton from "../Button/Redbutton";
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
                    type="password"
                    placeholder="PIN"
                    name="pin"
                  />
                </Form.Group>

                

                <div className="text-center">
                  <Button type="submit" className="btnStyle text-black fw-bold">
                    Login
                  </Button>
                </div>
              </Form>
              <div className="text-center mt-3">
              <RedButton toPage={"/user/create"} btnName="Sign Up" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default UserInput;
