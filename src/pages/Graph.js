import React, { useState, useEffect } from "react";
import "./Graph.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalendarGrid from "../components/graph/sidebar/Calendar";
import TrackingCard from "../components/graph/sidebar/Tracking";
import LatestReport from "../components/graph/sidebar/LatestReport";
import Sidebar from "../components/graph/sidebar/Sidebar";
import Sensor from "../components/graph/sensor/Sensor";
import Chart from "../components/graph/chart/Chart";
import Map from "../components/graph/map/Map";
import Layout from "../components/layout/Index";
import { connect } from "react-redux";
import { slideinAction } from "../store/actions/slideinAction";
import { useDispatch } from "react-redux";
import { SELECTED_GRAPH } from "../store/types";
import {
  orderDetailsAction,
  orderEventsAction,
} from "../store/actions/exploreAction";

const Graph = ({
  slideIn,
  sensorCollaspe,
  selectedGraph,
  orderEventsAction,
  orderDetailsAction,
}) => {
  console.log("Inside graph", selectedGraph);
  const [graph, setGraph] = useState(-1);
  const dispatch = useDispatch();
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

  useEffect(() => {
    orderEventsAction();
    orderDetailsAction();
    dispatch({ type: SELECTED_GRAPH, payload: false });
  }, [dispatch]);

  if (width > breakpoint) {
    if (!slideIn && !sensorCollaspe) {
      return (
        <div className={`graphWrapper-child`}>
          <Sidebar />
          {!selectedGraph ? <Map /> : <Chart data={selectedGraph} />}
          <Sensor />
        </div>
      );
    }
    return (
      <div className={`graphWrapper`}>
        <Sidebar/>
        {!selectedGraph ? <Map /> : <Chart data={selectedGraph} />}
        <Sensor />
      </div>
    );
  } else {
    return (
      <>
        <div className={`graphMobileWrapper`}>
          <Sidebar />
          {!selectedGraph ? <Map /> : <Chart data={selectedGraph} />}
          <Sensor />
        </div>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  slideIn: state.slidein.slideIn,
  sensorCollaspe: state.sensor.sensorCollaspe,
  selectedGraph: state.selectedgraph.selectedGraph,
});

export default connect(mapStateToProps, {
  orderEventsAction,
  orderDetailsAction,
})(Graph);
