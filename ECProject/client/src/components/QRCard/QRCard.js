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

      <Col xl={4} className="qr_card mt-5 mx-auto display-flex">
        <Card className="text-center p-5">
          <Card.Title>Party A</Card.Title>
          <Card.Img
            className="mx-auto mt-3 padding-3 shadow w-75 h-75"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOFSURBVO3BQY4cSQIDQWeg/v9lXx32wFMAiaxuSAOaxT+Y+b/DTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNM+fBSEn6TSkvCjUpLwo1KS0JTeSIJv0nljcNMOcyUw0z58GUq35SEG5WbJNyotCQ0lZskNJUblW9KwjcdZsphphxmyocfloQnVN5IQlNpSWhJaCotCT8pCU+o/KTDTDnMlMNM+fCPS8JNEm5UnlD5LzvMlMNMOcyUD/9xKi0JT6jcJKGp/MsOM+UwUw4z5cMPU/lNKjcqLQlPqHyTyt/kMFMOM+UwUz58WRL+JkloKjcqLQnflIS/2WGmHGbKYaZ8eEnlX6byRBKayo3Kv+QwUw4z5TBTPryUhKbyRBKaSkvCGyotCU2lJeGNJHyTyk0Smsobh5lymCmHmfLhy5LwTSotCU2lJaGpNJU3VG5UWhKaSkvCTRKayk86zJTDTDnMlA8vqTyRhJsk3Ki0JNwkoam0JDSVloSWhBuVmyQ0lZsk/KbDTDnMlMNMiX/wQhKayk0SmkpLQlN5IglvqPymJLyh8k2HmXKYKYeZ8uHLktBUnlBpSXhC5SYJN0l4QuWbVG6S0JLQVN44zJTDTDnMlA+/TOUJlZaEptKScKNyk4QblZaEN1T+JoeZcpgph5ny4SWVmyQ0lZaEptKScJOEn6TSkvBfdpgph5lymCkffpjKE0loKm8k4SYJTaUloancJKGptCS0JDSVG5WWhG86zJTDTDnMlPgHLyThDZWbJDSVN5LQVJ5Iwm9SaUm4UXnjMFMOM+UwU+If/MOS0FRaEppKS8KNyk0SmsoTSWgqLQlN5ScdZsphphxmyoeXkvCbVG6S0FRaEm5UWhLeSEJTeSMJNypvHGbKYaYcZsqHL1P5piTcqNwk4UblRuUmCTcqTyThRuUnHWbKYaYcZsqHH5aEJ1SeSEJTuVFpSfimJLyh8kQSmsobh5lymCmHmfLhH6fSkvCESkvCEypPJOEmCTcqP+kwUw4z5TBTPvzHqLQkPKHym1RaEm6S0FS+6TBTDjPlMFM+/DCVv1kSmspNEt5QaUl4QuUnHWbKYaYcZsqHL0vCb0rCjUpLwk0SnlC5ScKNyhtJaCpvHGbKYaYcZkr8g5n/O8yUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJT/AZbfgx8uhXEGAAAAAElFTkSuQmCC"
          />
        </Card>
        <Card className="text-center p-5">
          <Card.Title>Party B</Card.Title>
          <Card.Img
            className="mx-auto mt-3 padding-3 shadow w-75 h-75"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOJSURBVO3BMa4cSwIDwWRh7n/lXBlr0Cqg0fP0JYER8Rdm/u8wUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBTPryUhN9JpSWhqTyRhKbSktBUnkjC76TyxmGmHGbKYaZ8+DKVb0rCjUpLwo3KTRKayk0SmsqNyjcl4ZsOM+UwUw4z5cMPS8ITKt+k8oRKS8JPSsITKj/pMFMOM+UwUz785ZJwk4QblSdU/mWHmXKYKYeZ8uEfp/KGyk0Smsrf7DBTDjPlMFM+/DCVP0kSmkpLwo3KN6n8SQ4z5TBTDjPlw5cl4b+k0pLQVFoSmkpLwjcl4U92mCmHmXKYKfEX/mJJuFFpSWgqN0m4UfmXHGbKYaYcZsqHl5LQVJ5IQlNpSXgjCU8k4Y0kfJPKTRKayhuHmXKYKYeZ8uGHJeFGpSWhqbQk3Ki0JDSVN1RuVFoSmkpLwk0SmspPOsyUw0w5zJQPL6k8odKScJOEpvKESkvCjUpLQkvCjcpNEprKTRJ+p8NMOcyUw0z58FISfpLKTRKaSktCU2lJuFF5Q+UmCU8koal802GmHGbKYabEX/iiJDSVloSm0pLwhkpLwk9SeSMJTeUmCTcqbxxmymGmHGbKh5eS0FRaEprKEyo3SXhC5SYJNyotCW+o/EkOM+UwUw4z5cNLKk8k4UalJaGpPKHyhkpLwr/sMFMOM+UwU+Iv/IeS0FSeSMKNyk0SmkpLQlO5SUJTaUm4UXkiCU3ljcNMOcyUw0z58FIS3lC5SUJTeSMJTeVGpSXhiSQ8kYSm0pLwkw4z5TBTDjMl/sJfLAlPqLQk3KjcJKGpPJGEptKS0FR+0mGmHGbKYaZ8eCkJv5PKjUpLQkvCjUpLwhtJaCpvJOFG5Y3DTDnMlMNM+fBlKt+UhBuVloQnVG5UbpJwo/JEEm5UftJhphxmymGmfPhhSXhC5YkkNJUnknCj0pJwk4Q3VJ5IQlN54zBTDjPlMFM+/OVUbpLQVJpKS0JLwo3KE0m4ScKNyk86zJTDTDnMlA//mCS8ofI7qbQk3CShqXzTYaYcZsphpnz4YSq/k8oTSWgqN0l4Q6Ul4QmVn3SYKYeZcpgpH74sCb9TEppKS8ITSXhC5SYJNypvJKGpvHGYKYeZcpgp8Rdm/u8wUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBT/gfswIcbmc0DdQAAAABJRU5ErkJggg=="
          />
        </Card>
        <Card className="text-center p-5">
          <Card.Title>Party C</Card.Title>
          <Card.Img
            className="mx-auto shadow mt-3 padding-3 w-75 h-75"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOhSURBVO3BQY4jSQIDQWdA//+ybx/mwFMACUnVU7M0i38w84/DTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNMefGmJPwklZaEptKS0FSeSMITKi0JP0nlHYeZcpgph5ny4sNUPikJ71BpSXhC5SYJT6h8UhI+6TBTDjPlMFNefFkSnlD5pCS8IwnflIQnVL7pMFMOM+UwU178cio3KjdJaCo3SWgq/yWHmXKYKYeZ8uKXS0JTaUloKjdJaCo3SWgqv9lhphxmymGmvPgylW9SaUloKi0JTeUJlU9S+Tc5zJTDTDnMlBcfloSflISm0pLQVFoSmkpLQlNpSWgqN0n4NzvMlMNMOcyUF29S+ZtU3qHSktBU3qHymxxmymGmHGbKizcloancJOGbVJpKS0JT+aQkNJWbJDSVloQnVN5xmCmHmXKYKS/+MpUnktBUbpLQVG5UWhKayo1KS8ITSWgqN0n4pMNMOcyUw0yJf/BFSWgqN0l4QqUl4UalJaGp3CShqTyRhBuVv+kwUw4z5TBTXvywJDSVG5WWhBuVloSWhJ+UhKbSknCThCdU3nGYKYeZcpgpL36Yyo1KS0JTaUm4UblJQkvCjUpLwo3KE0m4UWlJ+KTDTDnMlMNMefGmJNyotCQ0lZaEptKScKPyhEpLwicl4UbliSR802GmHGbKYaa8+LIkNJUnknCj8kQSblRuknCj8k0q33SYKYeZcpgpLz5M5SYJNypPJKGptCTcqLxD5SYJNyotCU2lJaGpfNJhphxmymGmvPiyJDSVmyTcqNwkoak8kYSm0lRaEt6RhKZyo9KS0FTecZgph5lymCkv3qRyo/KEyicl4QmVloSmcqPyRBKeSEJT+aTDTDnMlMNMefGmJPwklU9SaUloKi0JTyShqTyRhJ90mCmHmXKYKS8+TOWTkvAOlZskNJWWhHeovEOlJaEloam84zBTDjPlMFNefFkSnlD5pCQ0lZskNJWbJLQkvCMJNyotCZ90mCmHmXKYKS/+z6ncJOEJlSeScKPykw4z5TBTDjPlxS+n0pLwRBKayo1KS8JNEj4pCd90mCmHmXKYKS++TOVvUrlRuVF5IglN5SYJTaUloam0JHzSYaYcZsphprz4sCT8pCTcJKGptCQ8ofJEEppKU2lJuEnCNx1mymGmHGZK/IOZfxxmymGmHGbKYaYcZsphphxmymGmHGbKYaYcZsphphxmymGmHGbK/wDUaZkh022JKwAAAABJRU5ErkJggg=="
          />
        </Card>{" "}
      </Col>
    </>
  );
};

export default QRCard;
