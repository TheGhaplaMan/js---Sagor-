import "./Scanner.scss";
import { useState, useEffect } from "react";
import QrReader from "react-qr-reader";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { get } from "../../apis/bebakApi";

//https://codesandbox.io/s/r3tyk

const Scanner = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState("");
  console.log(data);

  const [candiData, setCandData] = useState("");

  useEffect(() => {
    if (data) {
      const func = async () => {
        const data = await get(
          `https://banglaec.herokuapp.com/api/v1/candidate/${data}`
        );
        setCandData(data);
      };
      func();
      handleShow();
    }
  }, [data]);

  const handleConfirm = () => {};

  const handleScan = (result) => {
    console.log(result);
  };

  return (
    <>
      <QrReader
        delay={500}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
          console.log("kam kore na ken", result, error);
        }}
        style={{ width: "60%" }}
        onScan={handleScan}
        legacyMode
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm Vote {candiData.candidateName}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <p>{data}</p>
    </>
  );
};

export default Scanner;
