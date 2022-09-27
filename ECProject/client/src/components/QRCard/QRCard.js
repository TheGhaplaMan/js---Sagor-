import React from "react";
import { Col, Card } from "react-bootstrap";
import "../QRCard/QrCard.scss";

const QRCard = () => {
  return (
    <>
      {/* <Col xl={4} className="qr_card mt-5 mx-auto">
        <Card className="text-center p-5">
          <Card.Title>{title}</Card.Title>
          <Card.Img className="mx-auto shadow w-75 h-75" src={imgSrc} />
        </Card> */}

      <Col md={4} className="qr_card mt-5 mx-auto display-flex">
        <Card className="text-center p-5">
          <Card.Title>Party A</Card.Title>
          <Card.Img
            className="mx-auto mt-3 padding-3 shadow w-75 h-75"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAODSURBVO3BOQ7kSAADwWRB//9y7hhr0BIgqHtORsQfmPnfYaYcZsphphxmymGmHGbKYaYcZsphphxmymGmHGbKYaYcZsphply8lISfSeWNJDSVloQnVO4k4WdSeeMwUw4z5TBTLj5M5ZOS8E1JaCpPJKGp3FH5pCR80mGmHGbKYaZcfFkSnlB5IglNpSWhqdxJQlNpSWgqbyThCZVvOsyUw0w5zJSLv5zKEyp3VFoSmsqf7DBTDjPlMFMu/nFJaCp3kvA3O8yUw0w5zJSLL1P5mZJwR6Wp3EnCHZU3VH4nh5lymCmHmXLxYUn4lVRaEu4koancUWlJaCp3kvA7O8yUw0w5zJSLl1T+JEl4QqUloancUfmTHGbKYaYcZkr8gReS0FRaEj5J5XeShKbSkvBJKt90mCmHmXKYKRcvqbQk3FG5k4Sm0pLQVFoSnlB5IglN5QmVJ5LQktBUPukwUw4z5TBTLl5KQlNpSWhJeCIJTaUloancScITSXgiCU3lDZU7SWgqbxxmymGmHGbKxUsqLQlNpSXhCZU3ktBUWhKaSlNpSWhJaCotCW+otCR802GmHGbKYaZcfJhKS8IbSbij8oZKS0JTaSp3ktBUnkjCr3SYKYeZcpgpFy8loancUWlJuKNyJwl3VO4k4U4S7qjcScIdld/JYaYcZsphpsQfeCEJTeWTknBH5W+WhKbyTYeZcpgph5ly8WVJaCotCXdUWhJaEp5QaUm4o9KS0FRaEr4pCU3lkw4z5TBTDjPl4stU7qi0JLQkPKHyhkpLQlNpSfgklTtJaEloKm8cZsphphxmSvyBP1gS7qg8kYQ7Ki0JTeWJJDyh8k2HmXKYKYeZcvFSEn4mlabyRBLuqLQktCQ8kYSmckflVzrMlMNMOcyUiw9T+aQk3EnCGyp3VFoSnlB5IglNpSXhjsobh5lymCmHmXLxZUl4QuWTVFoSvikJb6jcUWlJ+KTDTDnMlMNMufjHqLQk3FFpKk8koancScIdlW86zJTDTDnMlIt/nEpLQktCU2lJeCMJd1R+psNMOcyUw0y5+DKVb1JpSXgiCXdUWhKayhsqTyThmw4z5TBTDjPl4sOS8DMl4U4SmsodlZaEO0loKi0Jb6g0lZaETzrMlMNMOcyU+AMz/zvMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyU/wD2CIYcg6luGAAAAABJRU5ErkJggg=="
          />
        </Card>
        <Card className="text-center p-5">
          <Card.Title>Party B</Card.Title>
          <Card.Img
            className="mx-auto mt-3 padding-3 shadow w-75 h-75"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOLSURBVO3BQa5bRwADweZA979yx4ssuBrgQdK3nbAq/sLMvw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlxZuS8JNUbpLQVFoSPknlJgk/SeUdh5lymCmHmfLiw1Q+KQlPqNyofFISmsqNyicl4ZMOM+UwUw4z5cWXJeEJlSeScKPSkvCESktCU3lHEp5Q+abDTDnMlMNMefE/o/IOlZaEpvI3O8yUw0w5zJQX/zEqLQlN5SYJTaUl4b/sMFMOM+UwU158mcpPSsITSWgqLQk3Ku9Q+ZMcZsphphxmyosPS8LvpNKS8EkqLQlN5SYJf7LDTDnMlMNMefEmlT+ZyhNJaCotCU3lRuVvcpgph5lymCkv3pSEptKS8EkqTeUmCU3lRuVGpSWhqbQkfJLKNx1mymGmHGbKiw9Lwo1KS0JTuUlCU3kiCU2lJaGptCQ0lSdUnkhCS0JT+aTDTDnMlMNMefEmlSeS0FRuktBUWhKeUGlJaCotCU8koam8Q+UmCU3lHYeZcpgph5ny4k1JaCotCe9QaUloKi0JT6i0JDSVloSWhKbSkvAOlZaEbzrMlMNMOcyUF29SaUm4UXkiCTdJaCotCS0JNyo3KjdJaCpPJOF3OsyUw0w5zJQXb0rCjcpNEm5UbpLwhMpNEppKS0JTuUnCjUpT+Z0OM+UwUw4zJf7CG5LQVG6S0FRaEn4nlZaEpvJNSWgqP+kwUw4z5TBTXnxZEm6ScKPSktBUbpJwo9KScJOEptKS8ElJuFH5pMNMOcyUw0x58cNUWhJuknCThBuVloQblZaEptKS8EkqN0loSWgq7zjMlMNMOcyU+At/sSQ0lSeS8IRKS0JTeSIJT6h802GmHGbKYaa8eFMSfpJKU2lJuFFpKk8k4YkkNJUbld/pMFMOM+UwU158mMonJeEmCe9IQlP5JJVPSsKNyjsOM+UwUw4z5cWXJeEJlXeofFISnkjCN6m0JHzSYaYcZsphprz4j0nCjUpTuVF5RxKayk0SblS+6TBTDjPlMFNe/M8k4UbliSS8Iwk3Kj/pMFMOM+UwU158mco3qTyRhKbyRBKayjtUbpLwkw4z5TBTDjPlxYcl4Scloak8kYSm8kQSmkpLwjtUbpLwSYeZcpgph5kSf2HmX4eZcpgph5lymCmHmXKYKYeZcpgph5lymCmHmXKYKYeZcpgph5nyD9q/iCAtQGvqAAAAAElFTkSuQmCC"
          />
        </Card>
        <Card className="text-center p-5">
          <Card.Title>Party C</Card.Title>
          <Card.Img
            className="mx-auto shadow mt-3 padding-3 w-75 h-75"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOESURBVO3BQY7kSAIDQWcg//9l3zrMgXsRIEhZPdOgWfzBzD8OM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5cNDSfhNKnckoam0JDyhciUJv0nlicNMOcyUw0z58DKVNyXhTUloKk8koalcUXlTEt50mCmHmXKYKR++LAl3qNyRhKbSVK4k4YpKS0JTeSIJd6h802GmHGbKYaZ8+Msk4Q6VO1RaEprKf9lhphxmymGmfJj/k4Sm0pLwNzvMlMNMOcyUD1+m8iep3KHSknBF5QmVf5PDTDnMlMNM+fCyJPxJKi0JTaUloalcUWlJaCpXkvBvdpgph5lymCnxB/9hSXhCpSWhqbQkNJW/yWGmHGbKYabEHzyQhKbSkvAmlSeScEXljiQ0lZaEN6l802GmHGbKYabEH3xREq6oPJGEpnJHEq6otCQ0lStJaCp3JOGKypsOM+UwUw4z5cNDSbiiciUJd6g8kYQrKi0JdyShqTyhciUJTeWJw0w5zJTDTPnwkMqVJFxRuSMJb1JpSWgqLQktCU2lJeEJlZaEbzrMlMNMOcyUDw8l4YrKlSQ0lZaEKyotCU3lShKayhWVK0loKnck4U86zJTDTDnMlPiDB5LwTSotCU+oXElCU2lJaCotCXeo3JGEKypPHGbKYaYcZkr8wQNJaCpPJOGKSktCU7mShCsqLQlN5ZuS0FR+02GmHGbKYaZ8+LIkNJWWhKbypiRcUWlJuJKEptKS8KYkXFF502GmHGbKYabEHzyQhKbyRBKuqFxJwh0qV5LQVFoS3qRyJQlXVJ44zJTDTDnMlA8PqbxJ5Y4kNJU7kvAmlTuS0JJwReWbDjPlMFMOM+XDQ0n4TSpN5UoSmkpTuSMJdyShqVxR+ZMOM+UwUw4z5cPLVN6UhCtJaCpN5UoSmkpLwhMqdyThCZUnDjPlMFMOM+XDlyXhDpUnktBUnlBpSbiShDepXEnCmw4z5TBTDjPlw18uCU2lqdyhckcSmsodSWgq33SYKYeZcpgpH/4yKleScEXljiQ8kYQrKr/pMFMOM+UwUz58mco3qTyhckcSmsoTKnck4ZsOM+UwUw4z5cPLkvCbknBF5UoSmsodSWgqLQlPqDSVloQ3HWbKYaYcZkr8wcw/DjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+V/y72R+7GJjSEAAAAASUVORK5CYII="
          />
        </Card>{" "}
      </Col>
    </>
  );
};

export default QRCard;
