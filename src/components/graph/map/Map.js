import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./Map.css";
import { motion } from "framer-motion";
import { mapSlideOutMotion } from "../sidebar/Click";
import { sensorAction } from "../../../store/actions/sensorAction";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { mapAnimate } from "../../../helper/functions";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = ({ slideIn, sensorCollaspe }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDpCJsLF8hJEpl6LQFimeHr_Syl6LedFFw",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  console.log("Maps", slideIn);
  return isLoaded ? (
    <motion.div
      variants={mapSlideOutMotion}
      animate={mapAnimate}
      className="mapWrapper"
      style={{ color: "red" }}
    >
      <GoogleMap
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        mapContainerStyle={containerStyle}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </motion.div>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => ({
  slideIn: state.slidein.slideIn,
  sensorCollaspe: state.sensor.sensorCollaspe,
});

export default connect(mapStateToProps, {
  sensorAction,
})(Map);
