import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { post } from "../../apis/bebakApi";
import RedButton from "../Button/Redbutton";
import "./UserInput.scss";

const UserInput = ({ text }) => {
  const navigate = useNavigate();
  // console.log(navigate);

  const [info, setInfo] = useState({
    voterNID: "",
    voterPin: "",
  });

  const loginClick = (e) => {
    const { name, value } = e.target;
    // console.log(e.target);

    setInfo({ ...info, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const { voterNID, voterPin } = info;
    try {
      const res = await post(
        "https://banglaec.herokuapp.com/api/v1/voter/login",
        {
          voterNID,
          voterPin,
        }
      );
      const data = await res.json();
      // console.log(data);
      if (data.status == "success") {
        localStorage.setItem("voterToken", data.token);
        // console.log(data.token);
        if (data.token) {
          navigate(`/user/${data.data._id}`);
          // console.log(data.userData._id);
          // navigate("/user/success");
        } else {
          navigate("admin/login");
        }
      }
      if (!data || res.status === 403 || res.status === 404) {
        alert(data.message);
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <section id="userInput">
        <Container>
          <Row>
            <Col xl={4} className="mx-auto">
              <h2 className="text-center mb-5">{text}</h2>
              <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3 shadow py-2">
                  <Form.Control
                    type="number"
                    placeholder="NID"
                    name="voterNID"
                    onChange={loginClick}
                  />
                </Form.Group>
                <Form.Group className="mb-3 shadow py-2">
                  <Form.Control
                    type="password"
                    placeholder="PIN"
                    name="voterPin"
                    onChange={loginClick}
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
