import React, { useEffect, useState } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { get } from "../../apis/bebakApi";
import RedButton from "../Button/Redbutton";
import "./InfoCard.scss";

const InfoCard = ({ linkBoshuk }) => {
  const [uData, setUData] = useState({});
  const [centData, setCData] = useState({});
  const params = useParams();
  // console.log(params, "hudai");

  const { id } = params;
  // console.log(params)

  useEffect(() => {
    const pailam = async () => {
      const vData = await get(
        `https://banglaec.herokuapp.com/api/v1/voter/profile/${id}`
      );
      // const data = await get(`http://theghaplaman.herokuapp.com/api/v1/admin/${id}`);
      // console.log(data.findAdmin);
      console.log(vData);
      setUData(vData.findVoter);

      const cId = vData.findVoter.centerId;

      const cenn = await get(
        `https://banglaec.herokuapp.com/api/v1/center/${cId}`
      );
      // const data = await get(`http://theghaplaman.herokuapp.com/api/v1/admin/${id}`);
      // console.log(cenn);
      setCData(cenn);
    };
    pailam();
  }, []);
  // console.log(localStorage.getItem("token"));

  return (
    <>
      <section
        className="d-flex text-center mt-5 justify-content-center"
        id="infoCard"
      >
        <Container>
          <Row>
            <Col className="mx-auto col-xl-4">
              <Card className="text-center shadow main_card">
                <div className="card_image">
                  <Card.Img
                    className="shadow"
                    src={`https://banglaec.herokuapp.com/${uData.voterImage}`}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="mb-5">
                    <strong>{uData.voterName}</strong>
                  </Card.Title>

                  <p>
                    <strong>Address : </strong>
                    {uData.voterAddress}
                  </p>

                  <p>
                    <strong>Center : </strong> {centData.centerName}
                  </p>

                  <RedButton toPage={linkBoshuk} btnName="Vote" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InfoCard;
