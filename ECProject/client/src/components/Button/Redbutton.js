import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./redButton.scss";

const RedButton = ({ btnName, toPage }) => {
  const navig = useNavigate();

  const handleClick = () => {
    navig(toPage);
  };
  return (
    <Button
      onClick={handleClick}
      className="btn_shadow"
      style={{
        backgroundColor: "#CF8181",
        color: "#000",
      }}
    >
      {btnName}
    </Button>
  );
};

export default RedButton;
