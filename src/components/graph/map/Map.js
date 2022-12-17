import React, { useState, useEffect } from "react";
import "./Map.css";
import { motion } from "framer-motion";
import { mapSlideOutMotion } from "../sidebar/Click";
import { sensorAction } from "../../../store/actions/sensorAction";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { mapAnimate } from "../../../helper/functions";
import { ActivityData } from "../../../shippmentActivity";
import GoogleMapReact from "google-map-react";

const Map = ({ slideIn, sensorCollaspe }) => {
  const mapsPoints = [...ActivityData.map.shipmentLegs].map((v) => {
    return { lat: +v[0], lng: +v[1] };
  });
  console.log("Map points", mapsPoints);

  const polylineOptions = {
    path: mapsPoints,
    geodesic: true,
    strokeColor: "#354785",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  };

  const divStyle = {
    color: "white",
    background: "#FF7B7B",
    padding: 6,
    borderRadius: 4,
    fontfamily: "Inter, sans-serif",
    marginRight: "20em",
  };

  const markers = [...ActivityData.map.data.slice(0, 3)];

  const toShowWhat = ["Humidity", "SupplyTemperature", "Battery"];
  const labels = ["Humid", "Temp", "Bat"];

  const onMapLoadded = ({ map, maps }) => {
    const flightPath = new maps.Polyline(polylineOptions);

    flightPath.setMap(map);
  };

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

  console.log("Maps", slideIn);

  if (width > breakpoint) {
    return (
      <motion.div
        variants={mapSlideOutMotion}
        animate={mapAnimate}
        className="mapWrapper"
        style={{ color: "red" }}
      >
        <GoogleMapReact
          style={{ width: "100%", height: "100%", position: "relative" }}
          bootstrapURLKeys={{ key: "AIzaSyDpCJsLF8hJEpl6LQFimeHr_Syl6LedFFw" }}
          defaultCenter={mapsPoints[Math.floor(mapsPoints.length / 2)]}
          defaultZoom={3}
          onGoogleApiLoaded={onMapLoadded}
        >
          <img
            src="/depart.svg"
            lat={mapsPoints[0].lat}
            lng={mapsPoints[0].lng}
            className="map-center"
          ></img>
          {React.Children.toArray(
            markers.map((point, index) => {
              console.log("Finding", point.sensors, toShowWhat[index]);
              const sesnor = point.sensors.find(
                (s) => s.Name == toShowWhat[index]
              );

              return (
                <div
                  lat={point.point[0]}
                  lng={point.point[1]}
                  position="bottom-left"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "0.9em",
                    width: "20em",
                    whiteSpace: "nowrap",
                    marginTop: "-4em",
                  }}
                >
                  <div style={divStyle}>
                    {labels[index]}: {sesnor.Value} {sesnor.Unit ?? "%"}
                  </div>
                  <div
                    className="triangle-down"
                    style={{ marginTop: 2, marginRight: "20em" }}
                  ></div>
                </div>
              );
            })
          )}
          <img
            src="/dest.svg"
            style={{ marginTop: "-3em", marginLeft: "-0.8em" }}
            lat={mapsPoints[mapsPoints.length - 1].lat}
            lng={mapsPoints[mapsPoints.length - 1].lng}
          ></img>
        </GoogleMapReact>
      </motion.div>
    );
  } else {
    return (
      <div className="mapWrapper" style={{ color: "red", width: "100vw" }}>
        <GoogleMapReact
          style={{ width: "100%", height: "100%", position: "relative" }}
          bootstrapURLKeys={{ key: "AIzaSyDpCJsLF8hJEpl6LQFimeHr_Syl6LedFFw" }}
          defaultCenter={mapsPoints[Math.floor(mapsPoints.length / 2)]}
          defaultZoom={3}
          onGoogleApiLoaded={onMapLoadded}
        >
          <img
            src="/depart.svg"
            lat={mapsPoints[0].lat}
            lng={mapsPoints[0].lng}
            className="map-center"
          ></img>
          {React.Children.toArray(
            markers.map((point, index) => {
              console.log("Finding", point.sensors, toShowWhat[index]);
              const sesnor = point.sensors.find(
                (s) => s.Name == toShowWhat[index]
              );

              return (
                <div
                  lat={point.point[0]}
                  lng={point.point[1]}
                  position="bottom-left"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "0.9em",
                    width: "20em",
                    whiteSpace: "nowrap",
                    marginTop: "-4em",
                  }}
                >
                  <div style={divStyle}>
                    {labels[index]}: {sesnor.Value} {sesnor.Unit ?? "%"}
                  </div>
                  <div
                    className="triangle-down"
                    style={{ marginTop: 2, marginRight: "20em" }}
                  ></div>
                </div>
              );
            })
          )}
          <img
            src="/dest.svg"
            style={{ marginTop: "-3em", marginLeft: "-0.8em" }}
            lat={mapsPoints[mapsPoints.length - 1].lat}
            lng={mapsPoints[mapsPoints.length - 1].lng}
          ></img>
        </GoogleMapReact>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  slideIn: state.slidein.slideIn,
  sensorCollaspe: state.sensor.sensorCollaspe,
});

export default connect(mapStateToProps, {
  sensorAction,
})(Map);
