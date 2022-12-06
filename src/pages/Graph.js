import React, { useState } from "react";
import "./Graph.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalendarGrid from "../components/graph/sidebar/CalendarGrid";
import TrackingGrid from "../components/graph/sidebar/TrackingGrid";
import TrackingCard from "../components/graph/sidebar/TrackingCard";
import LatestReport from "../components/graph/sidebar/LatestReport";
import Sidebar from "../components/graph/sidebar/Sidebar";
import Sensor from "../components/graph/sensor/SensorPhaseTesting";
import Map from "../components/graph/map/Map";
import Layout from "../components/layout/Index";
import { connect } from "react-redux";
import { slideinAction } from "../store/actions/slideinAction";

const Graph = ({ slideIn, sensorCollaspe }) => {
  console.log("Inside graph", slideIn, sensorCollaspe);
  return (
    <div
      className={`graphWrapper${!slideIn && !sensorCollaspe ? "-child" : ""}`}
    >
      <Sidebar />
      <Map />
      <Sensor />
    </div>
  );
};

const mapStateToProps = (state) => ({
  slideIn: state.slidein.slideIn,
  sensorCollaspe: state.sensor.sensorCollaspe,
});

export default connect(mapStateToProps)(Graph);
