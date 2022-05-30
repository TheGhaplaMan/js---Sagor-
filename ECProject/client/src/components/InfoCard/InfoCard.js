import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import userImg from "../../images/Sagor-Mahtab.jpg";
import RedButton from "../Button/Redbutton";
import "./InfoCard.scss";

const InfoCard = ({ linkBoshuk }) => {
  return (
    <>
      <section
        className="d-flex align-items-center justify-content-center"
        id="infoCard"
      >
        <Container>
          <Row>
            <Col className="mx-auto col-xl-4">
              <Card className="text-center shadow main_card">
                <div className="card_image">
                  <Card.Img className="shadow" src={userImg} />
                </div>
                <Card.Body>
                  <Card.Title className="mb-5">
                    <strong>Sagor Mahtab xD</strong>
                  </Card.Title>

                  <p>
                    <strong>DOB : </strong> date/boshbe/ekhane
                  </p>
                  <p>
                    <strong>Address : </strong> Address Jabe ekhane
                  </p>

                  <p>
                    <strong>Center : </strong> Omuk Center
                  </p>
                  <p>
                    <strong>Room : </strong> 103
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
