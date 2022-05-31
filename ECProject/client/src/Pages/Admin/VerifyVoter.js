import React from "react";
import { Container } from "react-bootstrap";
import RedButton from "../../components/Button/Redbutton";
import Navigation from "../../components/Navbar/Navbar";
import QRCard from "../../components/QRCard/QRCard";

const VerifyVoter = () => {
  const qrImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOmSURBVO3BO45jSQADwWRB979y7hhr0CrgQVLPB4yIvzDzv8NMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0x58aYk/CSVJ5LQVG6S0FRaEm5UWhJ+kso7DjPlMFMOM+XFh6l8UhI+KQlNpam0JNyoPKHySUn4pMNMOcyUw0x58WVJeELliSTcqNwk4UblJglN5YkkPKHyTYeZcpgph5ny4h+j0pLQVJrKO1T+JYeZcpgph5ny4h+ThJskPKHSknCj8jc7zJTDTDnMlBdfpvKTVFoSblRukvBNKn+Sw0w5zJTDTHnxYUn4k6m0JDSVG5WWhCeS8Cc7zJTDTDnMlPgLf7EkvEOlJeEdKn+zw0w5zJTDTIm/8IYkNJWWhE9SuUlCU/mdkvBJKt90mCmHmXKYKS/epNKS0FRaEppKS0JTaUm4UWlJaCotCT9JpSXhRuUmCU3lHYeZcpgph5ny4k1JeEcSmkpLQlO5SUJTeULlJgk3Kk+oPJGEpvJJh5lymCmHmfLiw1RaEm5UWhKayjuS0FRukvCEyk0SmkpLwo1KU/mmw0w5zJTDTHnxZSrvSMI7VFoSblSeSMKNSktCU2lJuElCU/mkw0w5zJTDTHnxYUm4UXlCpSWhqdwkoancJKGptCQ0lZskPKFyo9KS0FTecZgph5lymCkvPkylJeEmCU2lJeEmCU2lqbQk3Ki0JDyRhKbSknCThKbykw4z5TBTDjPlxW+mcqPSknCThCdUblRuktBUWhKaSkvCTRJuVD7pMFMOM+UwU178sCTcqLQkNJWWhKbSkvCOJDSVmyTcJOFG5SYJLQlN5R2HmXKYKYeZEn/hL5aEJ1RaEm5UWhJuVJ5IwhMq33SYKYeZcpgpL96UhJ+k0lRuknCj0pLQkvCOJDSVG5Xf6TBTDjPlMFNefJjKJyXhJglN5YkkNJUnknCj8klJuFF5x2GmHGbKYaa8+LIkPKHyjiQ0lXck4YkkvCMJTaWptCR80mGmHGbKYaa8+Mcloak0lRuVloSm0pLQVFoSmspNEprKNx1mymGmHGbKi3+Myk0SblSeSEJTaUloKi0JTaWp/KTDTDnMlMNMefFlKt+kcpOEG5UnVG6S0FRuVFoSfqfDTDnMlMNMefFhSfhJSXhHEprKTRJuVFoSmkpLQlN5IgmfdJgph5lymCnxF2b+d5gph5lymCmHmXKYKYeZcpgph5lymCmHmXKYKYeZcpgph5lymCn/AYTxpxOlTAsoAAAAAElFTkSuQmCC";

  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-5 pt-5">Admin</h2>
        <h4 className="text-end mt-1 pt-1">Room No 103</h4>

        <div className="text-center">
          <RedButton toPage="/admin/dashboard" btnName="Home" />
          <QRCard title="Scan here" imgSrc={qrImage} />
        </div>
      </Container>
    </>
  );
};

export default VerifyVoter;
