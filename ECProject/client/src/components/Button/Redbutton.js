import React from "react";
import { Button } from "react-bootstrap";
import "./redButton.scss";

const RedButton = ({ btnName }) => {
  return (
    <Button
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
