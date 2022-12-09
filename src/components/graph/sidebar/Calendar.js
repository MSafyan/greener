import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalendarIcon from "../../../assets/images/calendar.png";
import "./Grid.css";

function CalendarGrid() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <Container className="grid_container">
        <Row>
          <Col md={2} sm={2} xs={2}>
            <img src={CalendarIcon} alt="" height="50%" />
          </Col>
          <Col md={8} sm={8} xs={8}>
            <DatePicker
              selected={date}
              onChange={onChange}
              dateFormat="dd.MM.yyyy  h:mm:ss a"
              className="calendar"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CalendarGrid;
