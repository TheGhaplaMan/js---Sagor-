import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AdminCreate = () => {
  const navigate = useNavigate();

  // state of input
  const [info, setInfo] = useState({
    name: "",
    email: "",
    pass: "",
    room: "",
    centerId: "",
  });

  // input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo({ ...info, [name]: value });
  };

  // form submit
  const formSubmit = async (e) => {
    e.preventDefault();

    const { name, email, pass, room, centerId } = info;

    const res = await fetch(
      "http://theghaplaman.herokuapp.com/api/v1/admin/new-admin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          pass,
          room,
          centerId,
        }),
      }
    );

    const data = await res.json();
    // console.log(data);
    if (!data || res.status === 404) {
      console.log("Invalid user");
    } else {
      console.log("user added successful");
      navigate("/admin/dashboard");
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <Link to="/" className="text-primary display-6 fw-bold">
            Back to home
          </Link>
        </div>
        <div className="row">
          <div className="col-xl-8 mx-auto">
            <Form onSubmit={formSubmit}>
              <Row className="mb-3">
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={info.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={info.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="age">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="pass"
                    value={info.pass}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Room No</Form.Label>
                  <Form.Control
                    type="text"
                    name="room"
                    value={info.room}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="work">
                  <Form.Label>Center</Form.Label>
                  <Form.Control
                    type="text"
                    name="centerId"
                    value={info.centerId}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCreate;
