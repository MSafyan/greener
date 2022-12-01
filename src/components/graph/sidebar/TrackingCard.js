import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import brand from "../../../assets/images/card-brand.png";
import "./Grid.css";
import depart from "../../../assets/images/depart.png";
import arrival from "../../../assets/images/orange-visit.png";

function TrackingCard() {
  return (
    <>
      <Container className="tracking-card">
        <Row>
          <Col>
            <img src={brand} width="30%" />
          </Col>
          <Col></Col>
        </Row>
        <Row className="row1">
          <Col>
            <p className="col1">N Booking </p>
          </Col>
          <Col>
            <p className="col2">C2122-000734 </p>
          </Col>
        </Row>
        <Row className="row2">
          <Col>
            <p className="col3">C2122-000734</p>
          </Col>
          <Col>
            <p className="col3">P2122-87996 </p>
          </Col>
        </Row>
        <Row className="row2">
          <Col>
            <p className="col4">Status </p>
          </Col>
          <Col>
            <p className="col4">Navire</p>
          </Col>
        </Row>
        <Row className="row2">
          <Col>
            <p className="col3">Booking Envoye</p>
          </Col>
          <Col>
            <p className="col5">SC Montreox </p>
          </Col>
        </Row>
        <Row className="row1">
          <Col md={1} xs={1} className="img">
            <img src={depart} alt="" height="30%" />
          </Col>
          <Col md={5} xs={4} className="depart">
            <p className="col6">
              AGADIR <span className="col1">15Jun</span>
              <span className="dash">-------</span>
            </p>
          </Col>

          <Col md={1} xs={1}>
            <img src={arrival} alt="" height="30%" />
          </Col>
          <Col md={5} xs={5} className="depart">
            <p className="col6">SAINT PETERSBURG</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TrackingCard;
