import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { get } from "../../apis/bebakApi";
import RedButton from "../../components/Button/Redbutton";
import Navigation from "../../components/Navbar/Navbar";

const Dashboard = () => {
  const [uData, setUData] = useState({});
  const [centData, setCData] = useState({});
  const params = useParams();
  // console.log(params, "hudai");

  const { id } = params;

  useEffect(() => {
    const pailam = async () => {
      const data = await get(`http://localhost:4000/api/v1/admin/${id}`);
      // const data = await get(`http://theghaplaman.herokuapp.com/api/v1/admin/${id}`);
      // console.log(data.findAdmin);
      // console.log(data);
      setUData(data.findAdmin);

      const cId = data.findAdmin.centerId;

      const cenn = await get(`http://localhost:4000/api/v1/center/${cId}`);
      // const data = await get(`http://theghaplaman.herokuapp.com/api/v1/admin/${id}`);
      // console.log(cenn);
      setCData(cenn);
    };
    pailam();
  }, []);
  // console.log(localStorage.getItem("token"));

  return (
    <>
      <Navigation text="Election" />
      <Container>
        {/* <div className="text-end mt-3">
          <RedButton toPage="/admin/create" btnName="Create New" />
        </div> */}

        <h2 className="text-center fw-bold display-4 mt-2 mb-1">
          {uData.userName}
        </h2>
        <h4 className="text-center mt-1 pt-1">Room No {uData.roomNumber}</h4>
        <h4 className="text-end mt-1 pt-1">
          Total Voters{" "}
          <span className="text-danger display-6"> {uData.totalVoter}</span>
        </h4>
        <h4 className="text-end mt-1 pt-1">
          <span className="text-danger display-6">{uData.votedAlready} </span>
          Votes Colleceted
        </h4>
        <div className="text-center mt-1 mb-3">
          <br /> <br />
          <RedButton
            toPage={`/admin/vote/${uData._id}`}
            btnName="Vote Screen"
          />
          <br /> <br />
          <RedButton
            toPage={`/admin/verify-voter/${uData._id}`}
            btnName="Voter Verification"
          />
          <br /> <br />
          <RedButton
            toPage={`/admin/stats/${uData._id}`}
            btnName="Center Stats"
          />
          <br /> <br />
          <h4 className="text-center display-3 fw-bold mt-3 pt-5">
            {centData.centerName}
          </h4>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
