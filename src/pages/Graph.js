import React from "react";
import "./Graph.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalendarGrid from "../components/graph/sidebar/CalendarGrid";
import TrackingGrid from "../components/graph/sidebar/TrackingGrid";
import Sidebar from "../components/graph/sidebar/Sidebar";
import Sensor from "../components/graph/sensor/Sensor";
import Map from "../components/graph/map/Map";
import Layout from "../components/layout/Index";

const Graph = () => {
  return (
    <Container className="grid-Container">
      <Row>
        <Col md={4} xs={6}>
          <CalendarGrid />
          <TrackingGrid />
        </Col>
        <Col xs={6}>Map</Col>
      </Row>
    </Container>

    // <div className="graphWrapper">
    /* <Sidebar />
      <Map />
      <Sensor /> */
    //</div>
  );
};

const Header = () => {
  return <div className="header">header</div>;
};

export default Graph;
