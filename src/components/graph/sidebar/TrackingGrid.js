import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LocationIcon from "../../../assets/images/visit.png";
import "./Grid.css";

function CalendarGrid() {
  return (
    <>
      <Container>
        <Row>
          <Col md={2} sm={2} xs={2}>
            <img src={LocationIcon} alt="" height="50%" />
          </Col>
          <Col md={8} sm={8} xs={8}>
            <p>Tracking</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CalendarGrid;
