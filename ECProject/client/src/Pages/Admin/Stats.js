import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Container, Row } from "react-bootstrap";
import RedButton from "../../components/Button/Redbutton";

import Navigation from "../../components/Navbar/Navbar";
import StatsCard from "../../components/StatsCard/StatsCard";

const Stats = () => {
  const [uData, setUData] = useState({});
  const [cData, setCData] = useState([]);

  const params = useParams();
  const { id } = params;
  // console.log(id);

  const apiDaki = async () => {
    // const omuk = await axios.get(`http://localhost:4000/api/v1/admin/${id}`, {
    //   Authorization: `Bearer ${localStorage.getItem("token")}`,
    // });
    const omuk = await axios.get(
      `http://theghaplaman.herokuapp.com/api/v1/admin/${id}`,
      { Authorization: `Bearer ${localStorage.getItem("token")}` }
    );
    console.log(omuk.data.findAdmin);
    setUData(omuk.data.findAdmin);
  };
  const candidateDaki = async () => {
    // const cenn = await axios.get("http://localhost:4000/api/v1/candidate", { Authorization: `Bearer ${localStorage.getItem("token")}`,});
    const cenn = await axios.get(
      "http://theghaplaman.herokuapp.com/api/v1/candidate",
      { Authorization: `Bearer ${localStorage.getItem("token")}` }
    );
    // console.log(cenn.data[0].majorCandidates);
    setCData(cenn.data[0].majorCandidates);
  };

  useEffect(() => {
    candidateDaki();
  }, []);
  useEffect(() => {
    apiDaki();
  }, []);

  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-5 pt-5">{uData.userName}</h2>
        <h4 className="text-end mt-1 pt-1">Room No {uData.roomNumber}</h4>

        <div className="text-center">
          <RedButton toPage={`/admin/dashboard/${id}`} btnName="Home" />
          <Row>
            {cData.map((issa) => {
              return (
                <>
                  <StatsCard
                    key={Math.random()}
                    linkBoshuk={`/admin/dashboard/${id}`}
                    partyName={issa.candidateName}
                    voteCount={issa.voteReceived}
                  />
                </>
              );
            })}
            {/* <StatsCard
              linkBoshuk={`/admin/dashboard/${id}`}
              partyName="Party B"
              voteCount="211"
            />
            <StatsCard
              linkBoshuk={`/admin/dashboard/${id}`}
              partyName="Party C"
              voteCount="121"
            /> */}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Stats;
