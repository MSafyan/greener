import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LatestReport from "../../../assets/images/clipboard-approve.png";
import "./Grid.css";

function LatestReportGrid() {
  return (
    <>
      <Container className="latest-report-container">
        <Row>
          <Col md={1} sm={2} xs={2}>
            <img src={LatestReport} alt="" height="60%" />
          </Col>
          <Col md={11} sm={10} xs={10}>
            <p>Latest Report</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LatestReportGrid;
