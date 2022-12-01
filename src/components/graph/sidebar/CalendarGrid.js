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
          <Col md={1} sm={2} xs={2}>
            <img src={CalendarIcon} alt="" height="50%" />
          </Col>
          <Col md={11} sm={10} xs={10}>
            <DatePicker
              selected={date}
              onChange={onChange}
              dateFormat="dd.MM.yyyy  h:mm:ss a"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CalendarGrid;
