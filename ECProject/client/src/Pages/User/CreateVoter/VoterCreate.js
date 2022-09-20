import React, { useState, useEffect } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { get } from "../../../apis/bebakApi";
import RedButton from "../../../components/Button/Redbutton";
import Navigation from "../../../components/Navbar/Navbar";

const VoterCreate = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: "",
    nid: "",
    contact: "",
    email: "",
    address: "",
    img: "",
    pin: "",
    centerid: "",
  });
  const [selectedId, setCentId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleFile = (e) => {
    const files = e.target.files;
    // console.log("jhinka", files[0])
    setInfo({ ...info, img: files[0] });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const { name, email, nid, contact, address, img, pin } = info;
    const formData = new FormData();

    formData.append("voterName", name);
    formData.append("voterNID", nid);
    formData.append("email", email);
    formData.append("voterContact", contact);
    formData.append("voterAddress", address);
    formData.append("voterImage", img);
    formData.append("voterPin", `${pin}`);
    formData.append("centerId", selectedId);

    // console.log("img lg", img[0]  , img.rawFile)

    try {
      const res = await fetch(
        // "https://theghaplaman.herokuapp.com/api/v1/admin/new-admin",
        "http://localhost:4000/api/v1/voter/new-voter",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      console.log(data);
      if (!data || res.status === 403) {
        alert(data.message);
      }
      if (data.status === "success") {
        navigate("/login");
      }
    } catch (err) {
      alert(err);
    }
  };

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
      <Navigation text="Voter Sign Up" />
      <div className="container my-5">
        <div className="text-center  mb-5">
          <RedButton toPage="/login" btnName="Login" />
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
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    type="text"
                    name="contact"
                    value={info.contact}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>NID No</Form.Label>
                  <Form.Control
                    type="text"
                    name="nid"
                    value={info.nid}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={info.address}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" name="img" onChange={handleFile} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>PIN</Form.Label>
                  <Form.Control
                    type="password"
                    name="pin"
                    value={info.pin}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Select
                  onChange={(e) => setCentId(e.target.value)}
                  className="mb-3"
                >
                  <option>Select Center</option>
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

export default VoterCreate;
