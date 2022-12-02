import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import report from "../../../assets/images/report.png";
import "./Grid.css";

function Button() {
  return (
    <>
      <Container className="grid_container">
        <div className="bg-main reportBtn mt-3">
          <div className="icon-wrapper-20">
            <img src={report} alt="" height="100%" />
          </div>
          <p>Generate Report</p>
        </div>
      </Container>
    </>
  );
}

export default Button;
