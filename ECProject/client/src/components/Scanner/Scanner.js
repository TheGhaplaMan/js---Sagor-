import "./Scanner.scss";
import { useState, useEffect } from "react";
import QrReader from "react-qr-reader";
import axios from "axios";

//https://codesandbox.io/s/r3tyk

const Scanner = (props) => {
  const [data, setData] = useState("");

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "60%" }}
      />
      <p>{data}</p>
    </>
  );
};

export default Scanner;
