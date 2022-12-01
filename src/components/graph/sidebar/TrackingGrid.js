import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LocationIcon from "../../../assets/images/visit.png";
import "./CalendarGrid.css";

function CalendarGrid() {
  return (
    <>
      <Container>
        <Row>
          <Col md={1}>
            <img src={LocationIcon} alt="" height="50%" />
          </Col>
          <Col>
            <p>Tracking</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CalendarGrid;
