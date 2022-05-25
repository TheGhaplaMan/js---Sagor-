import React from "react";
import { Col, Card } from "react-bootstrap";
import qrCode from "../../images/qrSample.png";
import "../QRCard/QrCard.scss";

const QRCard = ({ title, imgSrc }) => {
  return (
    <>
      <Col xl={4} className="qr_card mt-5">
        <Card className="text-center p-5">
          <Card.Title>{title}</Card.Title>
          <Card.Img className="mx-auto shadow w-75 h-75" src={imgSrc} />
        </Card>
      </Col>
    </>
  );
};

export default QRCard;
