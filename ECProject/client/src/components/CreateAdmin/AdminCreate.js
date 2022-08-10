import React, { useState, useEffect } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { get } from "../../apis/bebakApi";
import RedButton from "../Button/Redbutton";

const AdminCreate = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: "",
    email: "",
    pass: "",
    room: "",
    tv: "",
    centerId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const { name, email, pass, room, tv, centerId } = info;
    try {
      const res = await fetch(
        // "https://theghaplaman.herokuapp.com/api/v1/admin/new-admin",
        "http://localhost:4000/api/v1/admin/new-admin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            userName: name,
            email,
            pass,
            roomNumber: room,
            totalVoter: tv,
            centerId: selectedId,
          }),
        }
      );

      const data = await res.json();
      // console.log(data);
      if (!data || res.status === 403) {
        alert(data.message);
      }
      if (data.status === "success") {
        navigate("/admin/login");
      }
    } catch (err) {
      alert(err);
    }
  };

  const [selectedId, setCentId] = useState("");

  const [centData, setCentData] = useState([]);
  useEffect(() => {
    const pailam = async () => {
      const data = await get("http://localhost:4000/api/v1/center");
      setCentData(data);
      // console.log(data);
    };
    pailam();
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="text-center  mb-5">
          <RedButton toPage="/admin/dashboard" btnName="Home" />
        </div>
        <div className="row">
          <div className="col-xl-8 mx-auto">
            <Form onSubmit={formSubmit}>
              <Row className="mb-3">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={info.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={info.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="pass"
                    value={info.pass}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Room No</Form.Label>
                  <Form.Control
                    type="number"
                    name="room"
                    value={info.room}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Total Voter</Form.Label>
                  <Form.Control
                    type="number"
                    name="tv"
                    value={info.tv}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Select
                  onChange={(e) => setCentId(e.target.value)}
                  className="mb-3"
                >
                  <option>Center</option>
                  {centData.map((element) => {
                    return (
                      <option value={element._id.toString()}>
                        {element.centerName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Row>

              <div className="d-grid gap-2">
                <Button
                  type="submit"
                  className="btn_shadow"
                  style={{
                    backgroundColor: "#CF8181",
                    color: "#000",
                  }}
                >
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
