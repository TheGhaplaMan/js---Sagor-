import React, { useEffect, useState } from "react";
import axios from "axios";

import Navigation from "../components/Navbar/Navbar";
import RedButton from "../components/Button/Redbutton";

const Error = () => {
  // const [omukData, setData] = useState([]);

  // const apiDaki = async () => {
  //   const omuk = await axios.get(`http://localhost:4000/api/v1/admin/${id}`);
  //   // console.log(omuk.data.findAllAdmins);
  //   setData(omuk.data.findAllAdmins);
  // };

  // useEffect(() => {
  //   apiDaki();
  // }, []);

  return (
    <>
      <Navigation text="Error" />
      <div className="centerize">
        <h1 className="mb-5">NOT FOUNDDDDDDDD </h1>
        {/* {omukData.map((issa) => {
          return (
            <>
              <h1>{issa.userName}</h1>
            </>
          );
        })} */}
        <RedButton toPage="/admin/login" btnName="Back To Home" />
      </div>
    </>
  );
};

export default Error;
