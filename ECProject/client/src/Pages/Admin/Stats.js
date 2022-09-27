import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { Container, Row } from "react-bootstrap";
import RedButton from "../../components/Button/Redbutton";

import Navigation from "../../components/Navbar/Navbar";
import StatsCard from "../../components/StatsCard/StatsCard";
import { get } from "../../apis/bebakApi";

const Stats = () => {
  const [uData, setUData] = useState({});
  const [cData, setCData] = useState([]);

  const naviggg = useNavigate();

  const params = useParams();
  const { id } = params;
  // console.log(id);

  useEffect(() => {
    const pailam = async () => {
      const data = await get(`http://localhost:4000/api/v1/admin/${id}`);
      // const data = await get(`http://theghaplaman.herokuapp.com/api/v1/admin/${id}`);
      // console.log(data.findAdmin);

      setUData(data.findAdmin);

      const candidates = await get("http://localhost:4000/api/v1/candidate");
      // const data = await get("http://theghaplaman.herokuapp.com/api//v1/candidate");
      // console.log(candidates);
      setCData(candidates[0].majorCandidates);
    };
    pailam();
  }, []);
  // console.log(localStorage.getItem("token"));

  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-3 pt-3">{uData.userName}</h2>
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
