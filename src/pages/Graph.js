import React from "react";
import "./Graph.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalendarGrid from "../components/graph/sidebar/CalendarGrid";
import TrackingGrid from "../components/graph/sidebar/TrackingGrid";
import TrackingCard from "../components/graph/sidebar/TrackingCard";
import LatestReportGrid from "../components/graph/sidebar/LatestReportGrid";
import Sidebar from "../components/graph/sidebar/Sidebar";
import Sensor from "../components/graph/sensor/Sensor";
import Map from "../components/graph/map/Map";
import Layout from "../components/layout/Index";

const Graph = () => {
  return (
    <Container fluid className="grid-Container">
      <Row>
        <Col
          md={3}
          xs={7}
          style={{ backgroundColor: "#D3D3D3", height: "100vh" }}
        >
          <CalendarGrid />
          <TrackingGrid />
          <TrackingCard />
          <LatestReportGrid />
        </Col>
        <Col md={9} xs={5}>
          Map
        </Col>
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
