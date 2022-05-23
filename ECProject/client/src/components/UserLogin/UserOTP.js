import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./UserInput.scss";

const UserOTP = ({ text }) => {
  return (
    <>
      <section id="userInput">
        <Container>
          <p className="text-center">
            Enter the OTP received to the contact +880-XXXXXXXXX
          </p>
          <Row>
            <Col xl={4} className="mx-auto">
              <h2 className="text-center mb-5">{text}</h2>
              <Form>
                <Form.Group className="mb-3 shadow py-2" name="OTP">
                  <Form.Control type="number" placeholder="OTP" />
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

export default UserOTP;
