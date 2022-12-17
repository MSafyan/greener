import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import report from "../../../assets/images/report.png";
import "./Grid.css";

function Button() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 500;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > breakpoint) {
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
  } else {
    return (
      <>
        <Container className="grid_container">
          <div className="bg-main reportBtn mt-3">
            <div className="icon-wrapper-20">
              <img src={report} alt="" height="100%" />
            </div>
            <div >
              <p style={{paddingLeft: "6vw" , color: "white"}}>Generate Report</p>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Button;
